# Tuscany Trail App

Web app (PWA) che accompagna i partecipanti del **Tuscany Trail 2027** (19–25 maggio 2027, partenza/arrivo da Venturina Terme, Campiglia Marittima) prima, durante e dopo l'evento.

**Derivata da [`advlabbik/tg-guida`](https://github.com/advlabbik/tg-guida)** (la guida del Trentino Gravel): stessa architettura, contenuti e palette rifatti per il Tuscany Trail. È anche il banco di prova della funzione **"Arriva preparato"** decisa da Andrea il 15/8/2026 — se qui funziona, si porta su tutti gli eventi. La parte turistica del TT vive invece in `advlabbik/cycling-in-tuscany`.

Vanilla JS, nessun build step: `index.html` + file dati/logica/stile caricati come script globali. Nessun bundler, nessuna dipendenza npm.

## Come si apre

Serve un server statico qualsiasi (serve HTTPS/localhost per geolocalizzazione e service worker):

```bash
npx serve .
# oppure
python -m http.server 8000
```

Poi apri `index.html`. Il codice di accesso demo è `TUSCANY27` (✱ segnaposto, vedi `#gate` in `index.html`). La barra per cambiare fase (prima/durante/dopo) si attiva con `?demo=1`.

**Usa questo per vedere l'effetto di una modifica prima di pushare.** `main` fa deploy automatico su GitHub Pages, cioè in produzione — non serve pushare per "controllare se funziona".

## Struttura

| File/cartella | Contenuto |
|---|---|
| `index.html` | Markup + tutta la logica dell'app (tab, gate, vista percorso con mappa e altimetria, GPS live, meteo, ricerca, installazione PWA, card "Arriva preparato") |
| `content.js` | `window.CONTENT.it` / `.en` — tutti i testi editoriali, bilingue. **Ogni modifica va fatta in tutte e due le lingue.** Contiene anche `preparazione` (blocchi + lista acquisti sponsor) e, per ogni percorso, il campo `gpx` |
| `tracks.js` | `window.TRACKS` — coordinate dei percorsi. **Oggi vuoto**: si genera con `scripts/gen_tracks.py` quando arrivano i GPX |
| `poi.js` | `window.POI` — punti di interesse per km. **Oggi vuoto**: si genera con `scripts/gen_poi.py` (prima leggere `docs/generazione-poi.md`) |
| `styles.css` | Design system. Palette Tuscany Trail (rosso ufficiale `#a80030`, crema, oro) — i **nomi** dei token restano quelli di tg-guida (`--lime` = colore primario, oggi rosso TT; `--mint` = accento, oggi oro), è cambiato solo il valore |
| `icons.js` + `icons/sprite.svg` | Icone Lucide via sprite (aggiunte `i-bike` e `i-shopping-bag` rispetto a tg-guida) |
| `assets/` | `tt-logo.png` (logo ufficiale a colori, per fondi chiari), `tt-logo-white.png` (per fondi scuri), `tt-emblema.png` (solo simbolo rosso) |
| `gpx/` | Qui vanno i GPX ufficiali quando arrivano (oggi vuota) |
| `manifest.webmanifest`, `sw.js` | PWA + service worker network-first. **Bumpare `CACHE` in `sw.js` a ogni modifica dei file** |
| `scripts/gen_tracks.py` | GPX → `tracks.js` (semplificazione Douglas-Peucker inclusa) |
| `scripts/gen_poi.py` | OpenStreetMap → `poi.js` (identico a tg-guida, route-agnostico) |

## Stato attuale (15 agosto 2026) — prototipo, non ancora inviato ai partecipanti

Fatto: contenuti 2027 bilingui IT/EN (fonte: bozza copy sito 2027 del 10/8), palette e loghi ufficiali TT, tre percorsi (**Originale** 440 km / 5.300 m D+ · **Newbie** 160 km · **Detour Isola d'Elba**), sezione **"Arriva preparato"** in Home, mappa Stay22 su Venturina, tab Live con meteo delle località dell'evento.

Le tracce non ci sono ancora e l'app lo dichiara — bottoni "Traccia GPX in arrivo", minimappa spenta, Live che spiega quando si accende. Non è uno stato rotto, è lo stato comunicato.

### In sospeso, con la dipendenza che li blocca

| Cosa | Chi sblocca |
|---|---|
| Tracce GPX dei tre percorsi | Andrea (quando l'organizzazione le chiude) → procedura sotto |
| Km e D+ ufficiali di Newbie (D+) e Detour Elba | Andrea — **mai ricalcolarli dal GPX** |
| Link shop + codici sconto per "Arriva preparato" (Vittoria, Miss Grape, Selle Italia, Northwave, Abus, Enervit, RH+, Sportler) | Andrea/Francesca → si mettono in `content.js → preparazione.acquisti.voci[]` (`url` e `codice`, in IT **e** EN) |
| Codice di accesso reale (oggi `TUSCANY27` ✱) | Andrea |
| Indirizzo esatto del villaggio evento (oggi coordinate fiera Venturina 43.0302,10.6055 ✱) | Andrea |
| Orari di dettaglio (ritiro pacco, accoglienza arrivo) | organizzazione |
| Foto dei percorsi (`ROUTE_PHOTOS` in `index.html` + `assets/percorsi/`) | Andrea/Alessio |
| Card auto/parcheggi in Info (volutamente assente: niente informazioni non decise) | organizzazione |
| Dominio dedicato + analytics Umami | come per tg-guida |

I dati con ✱ nei commenti di `content.js`/`index.html` sono segnaposto da confermare: `grep -n '✱' content.js index.html` per l'elenco.

## Quando arrivano i GPX

1. Copia i file in `gpx/` (nome consigliato `tuscany-trail-2027-<id>.gpx`).
2. Genera le tracce — una riga per percorso, le chiavi sono gli id di `content.js`:
   ```bash
   python scripts/gen_tracks.py originale="gpx/tuscany-trail-2027-originale.gpx"
   python scripts/gen_tracks.py newbie="gpx/..." detour="gpx/..."
   ```
3. In `content.js` imposta `percorsi[].gpx` al percorso del file (es. `"gpx/tuscany-trail-2027-originale.gpx"`) — in **tutte e due le lingue**. Da qui si accendono da soli bottone GPX, vista percorso, minimappa, pill in Dormire (la traccia compare anche nella mappa Stay22, ma solo dal sito pubblicato: da localhost Stay22 non può leggere il file) e GPS live.
4. Genera i POI: **prima leggi `docs/generazione-poi.md`**, poi `python scripts/gen_poi.py originale="gpx/..."` ecc. La verifica finale della checklist non è opzionale.
5. Bumpa `CACHE` in `sw.js`.
6. Verifica in locale, poi branch → merge su `main`.

## Regole di scrittura dei testi (decisioni di Andrea)

- **Mai i due punti `:` nella prosa**, in nessuna lingua (ok solo negli orari tipo 17:00) — i testi devono sembrare scritti dal team.
- Nell'app c'è **solo quello che è stato comunicato** ai partecipanti. Niente informazioni non decise, niente segnaposto visibili.
- Bilingue: ogni testo nuovo va aggiunto in **entrambe** le lingue in `content.js`.
- **Airbnb non si mette.** O comparirà dentro la mappa Stay22 accanto a Booking (modo ancora da trovare — chiedere a Francesco/supporto Stay22), oppure niente. Nessun pulsante o link esterno verso Airbnb, mai (regola del 15/8/2026, vale per tutti i progetti).

## Stay22

Mappa in Dormire con AID aziendale **`adventurelabsrl`** (quello che incassa le commissioni — non cambiarlo) e campagna **`ttapp2027`**, centrata sulle Fiere di Venturina, check-in 18→19 maggio 2027, `maincolor A80030`.

## Notifiche push

Non sono in questa app. Il sistema di Francesco (opt-in Web Push + pannello staff + Edge Function) vive in `advlabbik/tg-guida` (`index.html`, `sw.js`, `staff.html`, `supabase/`): quando servirà qui, si riprende da lì con un progetto Supabase dedicato al Tuscany Trail — **non** riusare il progetto Supabase del Trentino, mescolerebbe gli iscritti dei due eventi.

## Deploy e metodo di lavoro

- Deploy automatico su **GitHub Pages da `main`** (produzione). Verificare **sempre in locale prima** di pushare.
- **Branch di vita breve → verifica → merge su `main`**, mai commit diretti a lavoro in corso. Prima di ogni pubblicazione grossa, mettere una **tag di ritorno** su `main` (rollback = push della tag vecchia su main con force).
- Fare `git pull` prima di pushare: Francesco lavora sugli stessi repo in parallelo.
- La build di Pages ogni tanto non parte da sola dopo un push: se dopo qualche minuto il sito serve ancora la versione vecchia, un commit vuoto la risveglia.
- Issue GitHub per tracciare i problemi; README e issue si aggiornano **come parte del lavoro**, non dopo.

## Trappole note (ereditate da tg-guida, valgono anche qui)

- La traccia di `tracks.js` è semplificata e misura il 2-3% in meno del GPX completo; i km dei POI vengono dal GPX completo. `routeGeom()` in `index.html` riallinea usando i POI con coordinate come ancore. **Km e D+ ufficiali non si ricalcolano mai dal GPX.**
- `percorsi[].dplus` in `content.js` è **testo formattato** che cambia con la lingua ("5.300" IT / "5,300" EN), non un numero. `p.km` invece è un numero (o `null` finché il dato non è ufficiale — l'interfaccia mostra "in arrivo" da sola).
- `fitBounds` sulla mappa della vista percorso va chiamato con `animate:false`, altrimenti i segni si calcolano sulla vista di passaggio e spariscono POI.
- Il km del Live si prende da `routeGeom().kmAt`, mai sommando la traccia semplificata.
- Bumpare sempre `CACHE` in `sw.js` quando si modificano i file, altrimenti chi ha l'app installata resta indietro di una versione.
- Le chiavi `localStorage` sono prefissate **`tt-`**: tg-guida e questa app condividono l'origin `advlabbik.github.io`, con lo stesso prefisso si pesterebbero i piedi.
- Frecce direzionali dentro la mappa Stay22: già provate e scartate su tg-guida (Stay22 le rende come pallini) — non rifarle senza un'idea diversa.
