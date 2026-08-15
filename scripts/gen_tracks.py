# -*- coding: utf-8 -*-
"""Genera (o aggiorna) le tracce di tracks.js a partire dai GPX ufficiali.

USO (dalla radice del repo):
    python scripts/gen_tracks.py originale="gpx/tuscany-trail-2027-originale.gpx"
    python scripts/gen_tracks.py newbie="gpx/....gpx" detour="gpx/....gpx"

Ogni argomento e' chiave=percorso_del_gpx (le chiavi sono gli id di
content.js -> percorsi: originale / newbie / detour). Le chiavi non passate
restano invariate in tracks.js: il file viene aggiornato, non riscritto.

La traccia viene SEMPLIFICATA (Douglas-Peucker) per tenere il file leggero:
misura il 2-3% in meno del GPX completo, e va bene cosi' — routeGeom() in
index.html riallinea i km ancorandosi ai POI, e comunque km e D+ ufficiali
NON si ricalcolano mai dal GPX (regola di Andrea). Dopo questo script vanno
fatti anche i POI (scripts/gen_poi.py, leggendo PRIMA docs/generazione-poi.md)
e il campo percorsi[].gpx in content.js (in TUTTE E DUE le lingue).

Parametro opzionale eps=<gradi> per la tolleranza di semplificazione
(default 0.00008, circa 9 metri — sul Trentino Gravel dava 1.500-2.500
punti per percorso).
"""
import io, json, math, os, re, sys, xml.etree.ElementTree as ET

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TRACKS_JS = os.path.join(REPO, "tracks.js")

EPS = 0.00008
GPX = {}
for arg in sys.argv[1:]:
    if arg.startswith("eps="):
        EPS = float(arg[4:]); continue
    if "=" not in arg:
        sys.exit(f"argomento non valido: {arg} (atteso chiave=file.gpx)")
    k, v = arg.split("=", 1)
    if not os.path.exists(os.path.join(REPO, v)) and not os.path.exists(v):
        sys.exit(f"file non trovato: {v}")
    GPX[k] = v if os.path.exists(v) else os.path.join(REPO, v)
if not GPX:
    sys.exit(__doc__)


def leggi_gpx(path):
    """Tutti i trkpt (o rtept/wpt in mancanza), con quota; namespace-agnostico."""
    tree = ET.parse(path)
    root = tree.getroot()
    punti = []
    for tag in ("trkpt", "rtept", "wpt"):
        for el in root.iter():
            if el.tag.split("}")[-1] != tag:
                continue
            lat, lon = float(el.get("lat")), float(el.get("lon"))
            ele = 0.0
            for ch in el:
                if ch.tag.split("}")[-1] == "ele" and ch.text:
                    ele = float(ch.text)
            punti.append((lon, lat, ele))
        if punti:
            break
    if len(punti) < 2:
        sys.exit(f"{path}: nessuna traccia trovata nel GPX")
    return punti


def rdp(punti, eps):
    """Douglas-Peucker iterativo su (lon,lat); la quota segue i punti tenuti."""
    keep = [False] * len(punti)
    keep[0] = keep[-1] = True
    stack = [(0, len(punti) - 1)]
    while stack:
        a, b = stack.pop()
        if b <= a + 1:
            continue
        ax, ay = punti[a][0], punti[a][1]
        bx, by = punti[b][0], punti[b][1]
        dx, dy = bx - ax, by - ay
        norma = math.hypot(dx, dy) or 1e-12
        imax, dmax = -1, -1.0
        for i in range(a + 1, b):
            px, py = punti[i][0], punti[i][1]
            d = abs(dx * (ay - py) - dy * (ax - px)) / norma
            if d > dmax:
                imax, dmax = i, d
        if dmax > eps:
            keep[imax] = True
            stack.append((a, imax))
            stack.append((imax, b))
    return [p for p, k in zip(punti, keep) if k]


def carica_tracks():
    if not os.path.exists(TRACKS_JS):
        return {}, None
    testo = io.open(TRACKS_JS, encoding="utf-8").read()
    m = re.search(r"window\.TRACKS\s*=\s*(\{.*\})\s*;?\s*$", testo, re.S)
    if not m:
        sys.exit("tracks.js: non trovo window.TRACKS = {...}")
    dati = json.loads(m.group(1)) if m.group(1).strip() != "{}" else {}
    intestazione = testo[: m.start()]
    return dati, intestazione


INTESTAZIONE_DEFAULT = """// window.TRACKS — le tracce dei percorsi, usate per mappe, altimetria e GPS live.
// GENERATO da scripts/gen_tracks.py a partire dai GPX in gpx/ — non modificare a mano.
// Formato: { coords: [[lng,lat], ...], ele: [m, ...] } — semplificata, il 2-3%%
// piu' corta del GPX completo (routeGeom() in index.html compensa coi POI).
"""

dati, intestazione = carica_tracks()
if not intestazione:
    intestazione = INTESTAZIONE_DEFAULT

for chiave, path in GPX.items():
    punti = leggi_gpx(path)
    sempl = rdp(punti, EPS)
    dati[chiave] = {
        "coords": [[round(p[0], 5), round(p[1], 5)] for p in sempl],
        "ele": [int(round(p[2])) for p in sempl],
    }
    print(f"{chiave}: {len(punti)} punti GPX -> {len(sempl)} semplificati (eps={EPS})")

corpo = json.dumps(dati, separators=(",", ":"))
io.open(TRACKS_JS, "w", encoding="utf-8", newline="\n").write(
    INTESTAZIONE_DEFAULT + "window.TRACKS=" + corpo + ";\n")
print(f"scritto {TRACKS_JS}")
print("ORA: 1) content.js -> percorsi[].gpx (IT e EN)  2) scripts/gen_poi.py  3) bump CACHE in sw.js")
