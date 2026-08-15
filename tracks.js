// window.TRACKS — le tracce dei percorsi, usate per mappe, altimetria e GPS live.
// OGGI È VUOTO: le tracce 2027 non sono ancora state caricate. L'app lo sa e
// mostra "Traccia GPX in arrivo" al posto di mappa e bottoni.
//
// COME SI CARICA UNA TRACCIA (procedura completa nel README, sezione
// "Quando arrivano i GPX"):
//   1. metti il file GPX in gpx/ (es. gpx/tuscany-trail-2027-originale.gpx)
//   2. genera l'entrata qui dentro:  python scripts/gen_tracks.py originale="gpx/....gpx"
//   3. in content.js imposta percorsi[].gpx al percorso del file (in TUTTE E DUE le lingue)
//   4. (dopo) genera i POI con scripts/gen_poi.py — prima leggi docs/generazione-poi.md
//
// Formato di ogni percorso: { coords: [[lng,lat], ...], ele: [m, ...] }
// coords e ele hanno la stessa lunghezza. La traccia è semplificata: i km
// "veri" li tiene in riga routeGeom() in index.html ancorandosi ai POI.
window.TRACKS = {};
