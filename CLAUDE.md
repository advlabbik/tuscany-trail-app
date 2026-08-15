# Istruzioni per le sessioni Claude Code su questo repo

Questa app è derivata da `advlabbik/tg-guida` e ne eredita metodo di lavoro e trappole. Le regole sotto sono già costate tempo reale su quel repo: qui si applicano dal giorno uno.

## Tenere README.md e issue GitHub aggiornati — non è opzionale

Ogni volta che una sessione su questo repo:

- **finisce una feature, un fix o un merge rilevante** → aggiorna `README.md` (sezione `Struttura` se sono cambiati file, `Stato attuale` se è cambiato cosa c'è/cosa manca, `Deploy` se è cambiato lo stato di branch/deploy). Fallo come parte del lavoro, nello stesso commit o in uno immediatamente successivo.
- **apre, chiude o rende obsoleta un'issue GitHub** → aggiorna lo stato reale invece di lasciarla ambigua.
- **sblocca un ✱** (dato segnaposto confermato da Andrea) → togli il ✱ dal codice e la riga dalla tabella "In sospeso" del README.

Prima di dichiarare un branch "pronto per il merge", verifica lo stato reale con `git log`/`git diff` contro `origin/main` aggiornato — non fidarti di un README/issue non toccati da un po'.

## Verificare in locale prima di pushare

`main` fa deploy automatico su GitHub Pages (produzione). Non serve pushare per "vedere se funziona": basta un server statico locale (`python -m http.server 8000`), il risultato è identico. Branch di vita breve → verifica locale → merge. Prima di una pubblicazione grossa, tag di ritorno su `main`. `git pull` sempre prima di pushare (Francesco lavora in parallelo).

## Regole editoriali dei contenuti (decisioni di Andrea — bloccanti)

1. **Mai i due punti `:` nella prosa** dei testi rivolti ai partecipanti, in nessuna lingua (ok negli orari tipo 17:00). Rileggere ogni testo cercando `:` prima di consegnare.
2. Nell'app c'è **solo quello che è stato comunicato**. Niente informazioni non decise, niente segnaposto visibili — i dati da confermare stanno nei commenti con ✱.
3. Ogni testo va scritto in **entrambe le lingue** (`content.js → it` e `en`).
4. **Niente link o pulsanti verso Airbnb**, in nessuna forma (regola 15/8/2026). Se un domani si troverà il modo di integrarlo DENTRO l'embed Stay22, se ne riparla.
5. L'AID Stay22 è `adventurelabsrl` e non si cambia: è quello che incassa le commissioni.

## Trappole tecniche

- Km e D+ ufficiali **non si ricalcolano mai dal GPX** (la traccia in `tracks.js` è semplificata, misura il 2-3% in meno).
- `percorsi[].dplus` è testo formattato per lingua, non un numero; `km` può essere `null` finché il dato non è ufficiale (l'interfaccia gestisce da sola).
- Bumpare `CACHE` in `sw.js` a ogni modifica dei file dell'app.
- Chiavi `localStorage` prefissate `tt-` (stesso origin GitHub Pages di tg-guida: prefissi diversi o si pestano i piedi).
- Prima di generare i POI leggere `docs/generazione-poi.md` — la checklist di verifica finale non è opzionale.
