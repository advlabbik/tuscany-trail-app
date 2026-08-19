// Contenuti della guida in due lingue — CONTENT.it e CONTENT.en.
// L'italiano comanda. Ogni modifica ai testi va fatta in TUTTE E DUE le lingue.
//
// REGOLE EDITORIALI (decisioni di Andrea)
// 1. Mai i due punti ":" nella prosa, in nessuna lingua (ok solo negli orari tipo 17:00).
// 2. Qui c'è SOLO quello che è stato comunicato ai partecipanti. Niente
//    informazioni non decise, niente segnaposto visibili.
// 3. La sezione `ui` contiene le scritte dell'interfaccia (bottoni, messaggi,
//    etichette). Le etichette dei servizi POI (`poiSub`) traducono i dati.
//
// I dati marcati ✱ nei commenti sono da confermare prima dell'invio reale
// (fonte attuale: bozza copy sito 2027 del 10 agosto 2026).
window.CONTENT = {

// ============================================================ ITALIANO
it: {

meta: {
  titolo: "Tuscany Trail",
  kicker: "Tuscany Trail 2027",
  sottotitolo: "19–25 maggio 2027 · Campiglia Marittima",
  hub: "Venturina Terme (Campiglia Marittima)",
  hubMaps: "https://maps.google.com/?q=43.0302,10.6055", // ✱ indirizzo esatto del villaggio evento da confermare
  partenza: "Ritiro pacco il 19, 20 o 21 maggio · si parte nella propria giornata",
  dataPartenza: "2027-05-19T08:00:00", // ✱ orario simbolico per il countdown, la partenza è libera
  fasi: { prima: "2027-05-17", durante: "2027-05-18", dopo: "2027-05-26" }
},

intro: {
  titolo: "Benvenuto sul Trail.",
  testo: "Sei uno dei 6.000. Il Tuscany Trail è il più grande evento bikepacking del mondo — nessun cronometro, nessuna classifica. Una traccia, la bici carica di quello che ti serve e una settimana di finestra per pedalare la Toscana al tuo ritmo. Questa guida è il tuo punto di riferimento unico prima, durante e dopo l'evento."
},

avvisi: [
  { testo: "Le tracce GPX 2027 sono in preparazione. Appena pronte le troverai qui nella guida, con mappa, altimetria e download — intanto puoi già prenotare le notti e preparare bici e gambe." }
],

checklist: [
  { id: "studia", testo: "1. Scopri i tre percorsi",
    dettaglio: "Originale, Newbie o Detour Isola d'Elba. Le tracce GPX sono in preparazione — intanto leggi le schede e scegli il viaggio che fa per te.",
    tab: "percorso" },
  { id: "preparato", testo: "2. Arriva preparato",
    dettaglio: "Gambe, bici e attrezzatura. Qui sotto trovi anche la lista della spesa con gli sconti degli sponsor dedicati ai partecipanti.",
    prep: 1 },
  { id: "prima-notte", testo: "3. Prenota la prima notte vicino alla partenza",
    dettaglio: "Sarete in 6.000 tra Venturina e Campiglia Marittima negli stessi giorni, e le strutture migliori finiscono presto. Prenotala ora dalla mappa.",
    tab: "dormire" },
  { id: "certificato", testo: "4. Carica il certificato medico",
    dettaglio: "Si carica nella tua area personale su bikeadventureseries.com a partire dal 10 dicembre. Non aspettare l'ultima settimana.",
    url: "https://www.bikeadventureseries.com/my-account/", cta: "Vai all'area personale" },
  { id: "viaggio", testo: "5. Organizza il viaggio",
    dettaglio: "In treno fino a Campiglia Marittima o in auto. Nella sezione Info trovi come arrivare.",
    tab: "info" }
],

// La sezione "Arriva preparato" — decisa da Andrea il 15/8/2026, si costruisce
// prima qui e se funziona si estende a tutti gli eventi. url/codice a null
// mostrano "in arrivo": si riempiono quando Andrea/Francesca passano link
// shop e codici sconto. ✱ tutti i link e i codici
preparazione: {
  titolo: "Arriva preparato",
  intro: "Il Tuscany Trail non è una gara, ma nemmeno una passeggiata. I finisher 2026 hanno dato alla durezza un voto di 3,6 su 5 — salite lunghe, sterrati tecnici, giornate piene. Non serve essere atleti. Serve arrivare pronti, e prepararsi è già parte del viaggio.",
  blocchi: [
    { icona: "route", titolo: "Allena le gambe",
      testo: "Nei mesi prima dell'evento porta la bici sullo sterrato almeno una volta a settimana e allunga gradualmente le uscite, anche in giorni consecutivi. Il percorso Originale si chiude in media in 4 giorni — la cosa più utile è abituarsi a pedalare con la bici carica, un giorno dopo l'altro. E se non ti senti pronto c'è la Newbie, pensata apposta per iniziare." },
    { icona: "bike", titolo: "Metti in ordine la bici",
      testo: "Gravel o MTB, l'importante è che sia revisionata — freni, trasmissione, gomme adatte allo sterrato. Porta la bici dal meccanico per tempo, non l'ultima settimana. E impara a riparare una foratura prima di partire, non durante." }
  ],
  acquisti: {
    titolo: "La lista della spesa",
    testo: "Quello che potrebbe servirti, voce per voce. Ogni voce ha lo sponsor del circuito con lo sconto dedicato ai partecipanti — link agli shop e codici arrivano qui a breve.",
    voci: [
      { id: "gomme", voce: "Gomme", sponsor: "Vittoria", url: null, codice: null },
      { id: "borse", voce: "Borse da bikepacking", sponsor: "Miss Grape", url: null, codice: null },
      { id: "sella", voce: "Sella", sponsor: "Selle Italia", url: null, codice: null },
      { id: "scarpe", voce: "Scarpe", sponsor: "Northwave", url: null, codice: null },
      { id: "casco", voce: "Casco e antifurto", sponsor: "Abus", url: null, codice: null },
      { id: "nutrizione", voce: "Nutrizione", sponsor: "Enervit", url: null, codice: null },
      { id: "abbigliamento", voce: "Abbigliamento", sponsor: "RH+", url: null, codice: null },
      { id: "resto", voce: "Tutto il resto", sponsor: "Sportler", url: null, codice: null }
    ]
  }
},

// km e D+ ufficiali dell'Originale dal copy 2027 ("un solo numero ovunque: 440").
// Newbie e Detour senza dati finché non arrivano i numeri ufficiali — mai
// ricalcolarli dal GPX. `gpx` a null = traccia non ancora caricata (bottoni
// mappa/GPX nascosti da soli). ✱ dati Newbie/Detour
percorsi: [
  { id: "originale", nome: "Percorso Originale", breve: "Originale", colore: "#a80030", km: 440, dplus: "5.300",
    livello: "Impegnativo", gpx: null,
    desc: "L'anello del Tuscany Trail — le strade bianche del Chianti e della Val d'Orcia, i boschi della Maremma, Siena, Monteriggioni, Pienza e il mare della Costa degli Etruschi. Con tratti privati aperti solo per i partecipanti, una volta l'anno.",
    note: ["I finisher 2026 hanno votato la durezza 3,6 su 5 — salite lunghe e tratti sterrati tecnici. In media si chiude in 4 giorni, ma il tempo lo decidi tu"] },
  { id: "newbie", nome: "Percorso Newbie", breve: "Newbie", colore: "#b45309", km: 160, dplus: null,
    livello: "Accessibile", gpx: null,
    desc: "160 km in due giorni, pensati per chi comincia. Il primo giorno pedali insieme al gruppo del percorso Originale, il secondo su una traccia panoramica dedicata.",
    note: ["Nel 2026 il 55% dei partecipanti era al primo evento bikepacking della propria vita. Qui è dove si comincia"] },
  { id: "detour", nome: "Detour Isola d'Elba", breve: "Detour Elba", colore: "#0f766e", km: null, dplus: null,
    livello: "Variante opzionale", gpx: null,
    desc: "Ogni anno il Detour porta la traccia in un angolo nuovo di Toscana, e nel 2027 sale sull'Isola d'Elba. Lo indichi all'iscrizione, ma la scelta vera la fai sulla strada — le tracce le ricevi comunque tutte.",
    note: ["Il Detour non è un obbligo, è un regalo"] }
],

/* Live tracking WHIP. Embed identico a quello della home di northcape4000.com
   (iframe verso www.whip.live/event-tracking/<CODICE>, nessun X-Frame-Options).
   Stringa vuota = la finestra non compare per niente. */
whipUrl: "",

infoCards: [
  { id: "certificato", tema: "Prima di partire", icona: "🩺", titolo: "Certificato medico",
    corpo: "Non serve al momento dell'iscrizione. Si carica nella tua area personale su bikeadventureseries.com a partire dal 10 dicembre, nella sezione Certificati.",
    link: { testo: "Vai all'area personale", url: "https://www.bikeadventureseries.com/my-account/" },
    cerca: "certificato medico obbligatorio caricare scadenza visita area personale dicembre" },
  { id: "gpsguide", tema: "Prima di partire", icona: "🛰️", titolo: "Le tracce ufficiali",
    corpo: "La traccia GPS ufficiale la fornisce l'organizzazione e viene aggiornata ogni anno. Le tracce 2027 sono in preparazione — appena pronte le troverai qui nella guida, con mappa, altimetria e download. All'iscrizione indichi un percorso, ma le tracce le ricevi tutte.",
    cerca: "gps traccia gpx caricare navigazione scaricare download quando ufficiale" },
  { id: "bici", tema: "Prima di partire", icona: "🚲", titolo: "Che bici serve",
    corpo: "Gravel o MTB, in ordine e revisionata. La gravel è la scelta del 77% dei partecipanti. Le bici da corsa sono sconsigliate. Le e-bike sono ammesse — pianifica le ricariche in autonomia nelle strutture dove dormi.",
    cerca: "bici bicicletta gravel mtb corsa ebike e-bike elettrica ricarica quale ammesse" },
  { id: "cambio", tema: "Prima di partire", icona: "🔁", titolo: "Cambiare percorso",
    corpo: "Puoi cambiare idea anche durante l'evento. All'iscrizione indichi un percorso, ma ricevi le tracce di tutti — Originale, Newbie e Detour — e decidi sulla strada. Solo la data e la fascia di partenza sono vincolanti.",
    cerca: "cambiare percorso cambio scelta originale newbie detour idea vincolante" },
  { id: "luogo", tema: "Arrivare alla partenza", icona: "📍", titolo: "Un luogo solo per tutto",
    corpo: "Ritiro del pacco evento, partenza e arrivo sono a Venturina Terme, nel comune di Campiglia Marittima. Tocca il bottone, si apre Google Maps e lo metti sul navigatore.",
    link: { testo: "Apri in Google Maps", url: "https://maps.google.com/?q=43.0302,10.6055" },
    cerca: "sede indirizzo venturina campiglia marittima dove partenza arrivo luogo mappa navigatore villaggio" },
  { id: "pacco", tema: "Arrivare alla partenza", icona: "🎒", titolo: "Ritiro pacco e giornata di partenza",
    corpo: "Il ritiro del pacco evento è il 19, 20 o 21 maggio, nella giornata scelta all'iscrizione. Si parte lo stesso giorno o quello dopo, all'ora che vuoi tu. Data e fascia di partenza sono vincolanti — gli orari di dettaglio arrivano più avanti.",
    cerca: "pacco evento ritiro consegna giornata partenza fascia orario quando si parte" },
  { id: "treno", tema: "Arrivare alla partenza", icona: "🚆", titolo: "Arrivare in treno (consigliato)",
    corpo: "La stazione di Campiglia Marittima è sulla linea tirrenica, con collegamenti da Pisa, Livorno, Grosseto e Roma e cambi comodi da Firenze. Dalla stazione si arriva al villaggio evento con pochi minuti di bici. Con la bici già montata e nessun parcheggio da cercare è la soluzione più semplice.",
    cerca: "treno stazione tirrenica arrivare come si arriva pisa livorno roma firenze" },
  { id: "durezza", tema: "Sul percorso", icona: "⛰️", titolo: "Quanto è duro davvero",
    corpo: "Non è una gara, ma nemmeno una passeggiata. I finisher 2026 hanno dato alla durezza un voto di 3,6 su 5 — salite lunghe, tratti sterrati tecnici, giornate piene. Non serve essere atleti. Serve una bici in ordine, un po' di allenamento sullo sterrato e la voglia di guadagnarti ogni panorama. La ricompensa è proporzionale — il percorso ha preso 4,6 su 5, il voto più alto del questionario insieme all'atmosfera. Se non ti senti pronto, la Newbie esiste esattamente per questo.",
    cerca: "durezza difficolta duro difficile quanto allenamento pronto salite sterrato tecnico" },
  { id: "sicurezza", tema: "Sul percorso", icona: "🛡️", titolo: "Le regole d'oro della sicurezza",
    corpo: "Non è una gara, non prendere rischi inutili. Le strade sono aperte al traffico e vale il Codice della Strada. Evita di pedalare di notte e se devi farlo usa luci potenti. Non pedalare se sei troppo stanco, cerca di non restare mai da solo e aiuta chi è in difficoltà. Se un tratto ti sembra pericoloso scendi e cammina.",
    cerca: "sicurezza regole codice strada notte traffico prudenza stanchezza aiuto" },
  { id: "dotazione", tema: "Sul percorso", icona: "🦺", titolo: "Cosa portare con te",
    corpo: "Luci e campanello li chiede il Codice della Strada, e il casco tienilo sempre allacciato. Porta un power bank per GPS e telefono e un kit riparazione — e impara a usarlo prima di partire. La lista completa di quello che potrebbe servirti è nella sezione Arriva preparato, in Home.",
    cerca: "materiale casco luci campanello equipaggiamento cosa portare kit riparazione power bank" },
  { id: "acqua", tema: "Sul percorso", icona: "⛲", titolo: "Acqua e rifornimenti",
    corpo: "Riparti sempre con le borracce piene, soprattutto nelle ore calde. L'elenco dei punti acqua e rifornimento, chilometro per chilometro, arriverà qui nella guida insieme alle tracce definitive.",
    cerca: "acqua fontane ristoro rifornimento mangiare negozi borracce" },
  { id: "meteo", tema: "Sul percorso", icona: "🌦️", titolo: "Sole, caldo e temporali",
    corpo: "Maggio in Toscana regala giornate lunghe e tanta luce, ma il sole picchia e un temporale può sempre arrivare. Crema solare, borracce piene e uno strato antipioggia leggero. Il meteo aggiornato e l'orario del tramonto li trovi nella sezione Live.",
    cerca: "meteo caldo sole pioggia temporale crema solare abbigliamento temperatura tramonto" },
  { id: "animali", tema: "Sul percorso", icona: "🐄", titolo: "Animali al pascolo",
    corpo: "In Maremma può capitare di incontrare greggi al pascolo, a volte con cani da guardiania. Rallenta, se serve scendi dalla bici e tienila tra te e l'animale, passa con calma senza gesti bruschi. Se attraversi un recinto di pascolo richiudi sempre il cancello dietro di te.",
    cerca: "animali cani pastore maremmano gregge pascolo cancelli recinti cinghiali incontro" },
  { id: "emergenze", tema: "Durante l'evento", icona: "🆘", titolo: "Emergenze",
    corpo: "Per un'emergenza sanitaria chiama subito il 112, il numero unico che funziona sempre. L'evento è in autonomia, non c'è un mezzo scopa. Dalla sezione Live puoi condividere la tua posizione esatta con un tocco.",
    cerca: "emergenza 112 soccorso aiuto telefono incidente posizione" },
  { id: "arrivo", tema: "Durante l'evento", icona: "🏁", titolo: "Arrivo e finestra evento",
    corpo: "La finestra dell'evento si chiude il 25 maggio. I dettagli sull'accoglienza all'arrivo e sugli orari arrivano più avanti, qui nella guida.",
    cerca: "arrivo accoglienza orari fino quando 25 maggio finestra finisher" },
  { id: "foto", tema: "Durante l'evento", icona: "📷", titolo: "Fotografi lungo il percorso",
    corpo: "Fotografi, videomaker e droni raccontano il tuo viaggio. A fine evento ricevi una selezione di immagini da rivivere e condividere.",
    cerca: "foto fotografi video droni immagini ricordo selezione" },
  { id: "social", tema: "Durante l'evento", icona: "📣", titolo: "Racconta il viaggio",
    corpo: "Usa l'hashtag #tuscanytrail nelle foto e nelle storie, chi è a casa vive l'evento attraverso di te.",
    cerca: "social hashtag instagram foto condividere storie" },
  { id: "dovedormire", tema: "Dormire", icona: "🛏️", titolo: "Dall'hotel al prato sotto le stelle",
    corpo: "Nessuna tappa obbligata, dormi dove vuoi. Il 55% dei partecipanti sceglie solo hotel e B&B, altri mescolano — una notte in tenda, una in un borgo, una in agriturismo. Nella sezione Dormire trovi la mappa con prezzi e disponibilità reali, prenotabile da subito.",
    cerca: "dormire hotel b&b tenda agriturismo notte dove libertà prenotare" },
  { id: "basecamp", tema: "Dormire", icona: "⛺", titolo: "I Basecamp",
    corpo: "Punti tenda organizzati dalle comunità locali lungo il percorso — servizi essenziali, cucina del posto e l'atmosfera attorno al fuoco che è diventata leggenda. È il cuore sociale del Trail, con lo spirito e i comfort del bivacco, non del campeggio organizzato. I dettagli dei Basecamp 2027 arrivano più avanti.",
    cerca: "basecamp base camp tenda campo comunità fuoco docce bagni dormire" }
],

live: {
  whip: {
    titolo: "Dove sono gli altri",
    testo: "La mappa del live tracking ufficiale. Vedi in tempo reale dove sono i partecipanti lungo il percorso.",
    nota: "",
    apri: "Apri a schermo intero"
  },
  gps: {
    titolo: "Dove sono?",
    testo: "Attiva il GPS del telefono e la guida ti dice a che chilometro sei, cosa hai davanti — acqua, cibo, alloggi — che tempo fa dove sei, e ti fa condividere la posizione con un tocco."
  }
},

dormire: {
  titolo: "Arrivare e dormire",
  intro: "Ti consigliamo di prenotare presto la prima notte vicino alla partenza — sarete in 6.000 tra Venturina e Campiglia Marittima negli stessi giorni. Le altre notti, se preferisci, prenotale già ora dalla mappa qui sotto.",
  stay22: {
    titolo: "Prenota dalla mappa",
    testo: "Hotel, B&B e campeggi intorno alla partenza per la notte prima del via. Muovi la mappa lungo il percorso per prenotare anche le tappe successive — quello che vedi è prenotabile. Quando le tracce saranno pronte, sulla mappa comparirà anche la linea del percorso.",
    aid: "adventurelabsrl",
    campaign: "ttapp2027",
    venue: "Venturina Terme",
    lat: 43.0302, lng: 10.6055,
    checkin: "2027-05-18", checkout: "2027-05-19"
  },
  consigli: []
},

dopo: {
  titolo: "Ce l'hai fatta. La Toscana adesso è anche un po' tua.",
  testo: "Le informazioni su foto, questionario e prossimi eventi arrivano qui a fine evento.",
  azioni: [],
  prossimo: null
},

sponsor: { titolo: "", lista: [] },

meteo: {
  localita: [
    { nome: "Venturina Terme", lat: 43.029, lng: 10.601 },
    { nome: "San Vincenzo", lat: 43.095, lng: 10.538 },
    { nome: "Siena", lat: 43.319, lng: 11.331 },
    { nome: "Monteriggioni", lat: 43.390, lng: 11.224 },
    { nome: "Pienza (V. d'Orcia)", lat: 43.077, lng: 11.679 }
  ],
  giorniEvento: ["2027-05-19", "2027-05-20", "2027-05-21", "2027-05-22", "2027-05-23", "2027-05-24", "2027-05-25"]
},

ui: {
  stay22lang: "it",
  giorniSett: ["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],
  countdown: { giorni: "giorni", ore: "ore", minuti: "minuti" },
  tabs: { home: "Home", percorso: "Percorso", info: "Info", dormire: "Dormire", live: "Live" },
  gate: {
    testo: "Questa guida è riservata ai partecipanti.|Inserisci il codice che trovi nell'email di conferma.",
    placeholder: "CODICE", bottone: "Entra",
    errore: "Codice non valido. Controlla l'email di conferma."
  },
  installa: {
    titolo: "Tieni la guida a portata di mano",
    testo: "Salvala sulla schermata Home. Diventa un'icona sul telefono — un tocco e sei dentro, anche senza segnale.",
    salva: "Salva sul telefono", dopo: "Più tardi",
    iosTitolo: "Salva la guida sull'iPhone",
    iosPassi: ["Tocca il tasto <b>Condividi</b> in basso in Safari (il quadrato con la freccia verso l'alto)",
               "Scorri e scegli <b>\"Aggiungi alla schermata Home\"</b>",
               "Tocca <b>Aggiungi</b> e da quel momento la guida è un'icona sul telefono, un tocco e sei dentro"],
    iosFatto: "Fatto"
  },
  avvisiTitolo: "Da sapere adesso",
  checklistTitolo: "Le cose da fare, in ordine",
  checklistSotto: "Segui l'ordine e spunta quello che completi. La lista si ricorda di te.",
  vai: "Vai",
  trePercorsi: "I tre percorsi", vaiPercorsi: "Vai ai percorsi",
  durante: {
    liveSotto: "Tocca qui e scopri dove sei, a che km, cosa hai davanti da mangiare e da dormire",
    emergenze: "Emergenze · 112", condividi: "Condividi posizione",
    meteo: "Meteo e tramonto", dormire: "Dormire stanotte", info: "Tutte le info"
  },
  cercaGlobale: "Cerca fra tutte le informazioni…",
  cercaNulla: "Nessun risultato. Prova con un'altra parola.",
  cercaInfo: "Cerca nelle informazioni…",
  percorsoScegli: "Scegli il tuo percorso",
  percorsoIntro: "Partenza e arrivo per tutti da |. All'iscrizione indichi un percorso, ma ricevi le tracce di tutti e puoi cambiare idea anche sulla strada.",
  mappaAltimetria: "Mappa + altimetria", gpx: "↓ GPX",
  inArrivo: {
    dati: "Km e dislivello in arrivo",
    traccia: "Traccia GPX in arrivo",
    mappa: "La mappa dei percorsi si accende appena carichiamo le tracce GPX.",
    live: "Il Live si accende quando le tracce GPX saranno caricate. Intanto qui sotto trovi già il meteo delle località dell'evento."
  },
  prep: { apri: "Apri lo shop", codice: "Codice", inArrivo: "Link e sconto in arrivo" },
  rv: {
    torna: "Percorsi",
    aiuto: "Trascina il dito sull'altimetria e vedi il punto muoversi sulla mappa. Sulla mappa ingrandisci per far comparire più punti.",
    partenza: "Partenza · Venturina Terme", arrivo: "Arrivo · Venturina Terme",
    mostrati: "| punti in vista, raggruppati in | segni — il numero sul segno dice quanti ce ne sono lì",
    quiCiSono: "Qui ci sono | punti", eAltri: "e altri |", altriQui: "e altri | qui",
    prossimi: "Prossimi | km", tuttoIlPercorso: "Tutto il percorso",
    seiQui: "Sei al km | · quota | m",
    lontanoKm: "Punto più vicino del percorso al km | · quota | m",
    nessunPunto: "Nessun punto di questo tipo su questo percorso.",
    quota: "quota",
    daQui: "Da qui all'arrivo | km e | m di dislivello"
  },
  insieme: "I tre percorsi insieme",
  partenzaArrivo: "Partenza / Arrivo · Venturina Terme",
  servizi: "Servizi lungo il percorso",
  serviziIntro: "Acqua, cibo e alloggi entro 500 metri dalla traccia. La lista dice che un posto esiste, non che è aperto — per gli alloggi premi <b>Prenota</b> e vedi prezzi e disponibilità reali sulla mappa. Sulla mappa acqua e cibo sono segnati al loro chilometro di percorso, quindi la posizione è indicativa entro qualche centinaio di metri.",
  filtri: { tutti: "Tutto", a: "Acqua", m: "Mangiare", d: "Dormire" },
  conteggi: { m: "mangiare", d: "alloggi", a: "fontane" },
  prenota: "Prenota",
  buco: "km senza acqua né cibo", bucoDettaglio: "dal km | al km | — fai scorta prima",
  serviziInArrivo: "La lista servizi di questo percorso è in preparazione, arriva a breve.",
  mappaTraccia: "La mappa mostra la traccia del tuo percorso",
  caricamentoAlloggi: "Caricamento mappa alloggi…",
  mioPercorso: "Il mio percorso",
  attivaGps: "Attiva il GPS",
  gpsCerco: "Ricerca posizione…",
  gpsNo: "GPS non disponibile su questo dispositivo.",
  gpsNegato: "Non riesco a leggere la posizione. Controlla i permessi del telefono.",
  gpsLontano: "Sei a | km dal percorso |. Il punto più vicino è al km |.",
  gpsPosizione: "Sei circa al km | di | del | — mancano | km all'arrivo. Forza! 💪",
  gpsQui: "Sei qui",
  condividiPos: "Condividi la posizione",
  condividiTesto: "La mia posizione al Tuscany Trail",
  davanti: "Davanti a te", tra: "tra", km: "km", fontana: "fontana", fontane: "fontane", posti: "posti", alloggi: "alloggi",
  meteoTitolo: "Meteo", meteoDoveSono: "Meteo dove sono", meteoLocalita: "Le località dell'evento",
  meteoNota: "Anteprima con i prossimi giorni — durante l'evento questa tabella mostra il 19–25 maggio.",
  meteoAdesso: "dove sei adesso", vento: "vento", pioggia: "pioggia nelle prossime ore",
  tramontaQui: "🌇 Il sole qui tramonta alle",
  tramonto: "🌇 <b>Tramonto oggi a Venturina alle |</b> — pianifica di arrivare a destinazione prima del buio.",
  tramontoOffline: "🌇 Tramonto non disponibile offline.",
  meteoOffline: "Meteo non raggiungibile, serve connessione.",
  legenda: "Tuscany Trail · Guida in versione beta — la miglioriamo ogni settimana",
  searchExtra: {
    dormire: { t: "Arrivare e dormire", s: "La mappa alloggi con prezzi e disponibilità", k: "dormire prenotare hotel alloggio notte mappa campeggio booking prenotazione basecamp" },
    live: { t: "Dove sono / Meteo", s: "GPS sul percorso, meteo e tramonto", k: "live gps dove sono posizione meteo tramonto davanti" },
    prep: { t: "Arriva preparato", s: "Allenamento, bici e la lista della spesa con gli sconti", k: "preparazione arriva preparato allenamento sconti sponsor acquisti lista spesa gomme borse sella scarpe casco antifurto nutrizione abbigliamento vittoria miss grape selle italia northwave abus enervit rh sportler" }
  },
  poiSub: {}
},

}, // fine it

// ============================================================ ENGLISH
en: {

meta: {
  titolo: "Tuscany Trail",
  kicker: "Tuscany Trail 2027",
  sottotitolo: "19–25 May 2027 · Campiglia Marittima, Tuscany",
  hub: "Venturina Terme (Campiglia Marittima)",
  hubMaps: "https://maps.google.com/?q=43.0302,10.6055", // ✱ da confermare, vedi IT
  partenza: "Pack pickup on 19, 20 or 21 May · you start on your chosen day",
  dataPartenza: "2027-05-19T08:00:00",
  fasi: { prima: "2027-05-17", durante: "2027-05-18", dopo: "2027-05-26" }
},

intro: {
  titolo: "Welcome to the Trail.",
  testo: "You are one of the 6,000. The Tuscany Trail is the world's biggest bikepacking event — no stopwatch, no ranking. One track, your loaded bike and a full week's window to ride Tuscany at your own pace. This guide is your single point of reference before, during and after the event."
},

avvisi: [
  { testo: "The 2027 GPX tracks are in the making. As soon as they are ready you will find them here in the guide, with map, elevation profile and download — meanwhile you can already book your nights and get bike and legs ready." }
],

checklist: [
  { id: "studia", testo: "1. Discover the three routes",
    dettaglio: "Original, Newbie or the Elba Island Detour. The GPX tracks are in the making — meanwhile read the route cards and pick the ride that suits you.",
    tab: "percorso" },
  { id: "preparato", testo: "2. Arrive prepared",
    dettaglio: "Legs, bike and gear. Below you will also find the shopping list with the sponsor discounts dedicated to participants.",
    prep: 1 },
  { id: "prima-notte", testo: "3. Book your first night near the start",
    dettaglio: "There will be 6,000 of you around Venturina and Campiglia Marittima on the same days, and the best places go fast. Book it now from the map.",
    tab: "dormire" },
  { id: "certificato", testo: "4. Upload your medical certificate",
    dettaglio: "You upload it in your personal area on bikeadventureseries.com starting 10 December. Do not leave it to the last week.",
    url: "https://www.bikeadventureseries.com/my-account/", cta: "Go to your personal area" },
  { id: "viaggio", testo: "5. Plan your trip",
    dettaglio: "By train to Campiglia Marittima or by car. The Info section tells you how to get there.",
    tab: "info" }
],

preparazione: {
  titolo: "Arrive prepared",
  intro: "The Tuscany Trail is not a race, but it is not a Sunday ride either. The 2026 finishers rated its toughness 3.6 out of 5 — long climbs, technical gravel, full days on the bike. You do not need to be an athlete. You need to arrive ready, and getting ready is already part of the journey.",
  blocchi: [
    { icona: "route", titolo: "Train your legs",
      testo: "In the months before the event take your bike onto gravel at least once a week and gradually stretch your rides, back-to-back days included. The Original route takes 4 days on average — the most useful training is getting used to riding a loaded bike, day after day. And if you do not feel ready, the Newbie exists exactly for starting out." },
    { icona: "bike", titolo: "Get your bike in shape",
      testo: "Gravel or MTB, what matters is that it is fully serviced — brakes, drivetrain, tyres that can handle gravel. Take it to the mechanic early, not in the final week. And learn to fix a puncture before you leave, not during." }
  ],
  acquisti: {
    titolo: "The shopping list",
    testo: "What you might need, item by item. Each one comes with the series sponsor and a discount dedicated to participants — shop links and codes are coming here soon.",
    voci: [
      { id: "gomme", voce: "Tyres", sponsor: "Vittoria", url: null, codice: null },
      { id: "borse", voce: "Bikepacking bags", sponsor: "Miss Grape", url: null, codice: null },
      { id: "sella", voce: "Saddle", sponsor: "Selle Italia", url: null, codice: null },
      { id: "scarpe", voce: "Shoes", sponsor: "Northwave", url: null, codice: null },
      { id: "casco", voce: "Helmet and lock", sponsor: "Abus", url: null, codice: null },
      { id: "nutrizione", voce: "Nutrition", sponsor: "Enervit", url: null, codice: null },
      { id: "abbigliamento", voce: "Clothing", sponsor: "RH+", url: null, codice: null },
      { id: "resto", voce: "Everything else", sponsor: "Sportler", url: null, codice: null }
    ]
  }
},

percorsi: [
  { id: "originale", nome: "Original Route", breve: "Original", colore: "#a80030", km: 440, dplus: "5,300",
    livello: "Demanding", gpx: null,
    desc: "The Tuscany Trail loop — the white roads of Chianti and Val d'Orcia, Maremma's forests, Siena, Monteriggioni, Pienza and the sea of the Etruscan Coast. Including private sections opened only for participants, once a year.",
    note: ["The 2026 finishers rated its toughness 3.6 out of 5 — long climbs and technical gravel sections. Most riders finish in 4 days, but the clock is yours"] },
  { id: "newbie", nome: "Newbie Route", breve: "Newbie", colore: "#b45309", km: 160, dplus: null,
    livello: "Accessible", gpx: null,
    desc: "160 km over two days, made for those starting out. On day one you ride with the Original route group, on day two on a dedicated scenic track.",
    note: ["In 2026, 55% of participants were riding their first bikepacking event ever. This is where people start"] },
  { id: "detour", nome: "Elba Island Detour", breve: "Elba Detour", colore: "#0f766e", km: null, dplus: null,
    livello: "Optional variant", gpx: null,
    desc: "Every year the Detour takes the track to a new corner of Tuscany, and in 2027 it climbs onto Elba Island. You pick it at registration, but the real choice happens on the road — you receive all the tracks anyway.",
    note: ["The Detour is not an obligation, it is a gift"] }
],

/* Live tracking WHIP. Embed identico a quello della home di northcape4000.com
   (iframe verso www.whip.live/event-tracking/<CODICE>, nessun X-Frame-Options).
   Stringa vuota = la finestra non compare per niente. */
whipUrl: "",

infoCards: [
  { id: "certificato", tema: "Before you leave", icona: "🩺", titolo: "Medical certificate",
    corpo: "You do not need it to register. You upload it in your personal area on bikeadventureseries.com starting 10 December, in the Certificates section.",
    link: { testo: "Go to your personal area", url: "https://www.bikeadventureseries.com/my-account/" },
    cerca: "medical certificate mandatory upload deadline december personal area" },
  { id: "gpsguide", tema: "Before you leave", icona: "🛰️", titolo: "The official tracks",
    corpo: "The official GPS track is provided by the organisation and updated every year. The 2027 tracks are in the making — as soon as they are ready you will find them here in the guide, with map, elevation profile and download. At registration you pick one route, but you receive all the tracks.",
    cerca: "gps track gpx load navigation download when official" },
  { id: "bici", tema: "Before you leave", icona: "🚲", titolo: "What bike you need",
    corpo: "Gravel or MTB, serviced and in good shape. Gravel is the choice of 77% of participants. Road bikes are not recommended. E-bikes are allowed — plan your charging independently at the places where you sleep.",
    cerca: "bike bicycle gravel mtb road ebike e-bike electric charging which allowed" },
  { id: "cambio", tema: "Before you leave", icona: "🔁", titolo: "Changing route",
    corpo: "You can change your mind even during the event. At registration you pick one route, but you receive the tracks of all of them — Original, Newbie and Detour — and decide on the road. Only your start date and start slot are binding.",
    cerca: "change route switch choice original newbie detour mind binding" },
  { id: "luogo", tema: "Getting to the start", icona: "📍", titolo: "One place for everything",
    corpo: "Event pack pickup, start and finish all happen in Venturina Terme, in the municipality of Campiglia Marittima. Tap the button, Google Maps opens and you can set your navigation.",
    link: { testo: "Open in Google Maps", url: "https://maps.google.com/?q=43.0302,10.6055" },
    cerca: "venue address venturina campiglia marittima where start finish place map navigation village" },
  { id: "pacco", tema: "Getting to the start", icona: "🎒", titolo: "Pack pickup and start day",
    corpo: "Event pack pickup is on 19, 20 or 21 May, on the day chosen at registration. You start the same day or the day after, at whatever time you like. Start date and slot are binding — detailed times will follow.",
    cerca: "event pack pickup collection start day slot time when" },
  { id: "treno", tema: "Getting to the start", icona: "🚆", titolo: "Arriving by train (recommended)",
    corpo: "Campiglia Marittima station sits on the Tyrrhenian line, with connections from Pisa, Livorno, Grosseto and Rome and easy changes from Florence. From the station the event village is a few minutes by bike. With your bike already assembled and no parking to hunt for, it is by far the simplest option.",
    cerca: "train station tyrrhenian arrive how to get pisa livorno rome florence" },
  { id: "durezza", tema: "On the route", icona: "⛰️", titolo: "How hard it really is",
    corpo: "It is not a race, but it is not a Sunday ride either. The 2026 finishers rated its toughness 3.6 out of 5 — long climbs, technical gravel sections, full days on the bike. You do not need to be an athlete. You need a well-prepped bike, some off-road training and the will to earn every view. The reward matches the effort — riders rated the route 4.6 out of 5, the highest score in the survey together with the atmosphere. If you do not feel ready, the Newbie exists exactly for that.",
    cerca: "toughness difficulty hard how much training ready climbs gravel technical" },
  { id: "sicurezza", tema: "On the route", icona: "🛡️", titolo: "The golden rules of safety",
    corpo: "This is not a race, take no unnecessary risks. Roads are open to traffic and the highway code applies. Avoid riding at night, and if you must, use powerful lights. Do not ride when you are too tired, try never to be alone, and help anyone in difficulty. If a section feels dangerous, get off and walk.",
    cerca: "safety rules highway code night traffic caution fatigue help" },
  { id: "dotazione", tema: "On the route", icona: "🦺", titolo: "What to bring",
    corpo: "Lights and a bell are required by the highway code, and keep your helmet fastened at all times. Bring a power bank for GPS and phone and a repair kit — and learn to use it before you leave. The full list of what you might need is in the Arrive prepared section, on the Home tab.",
    cerca: "gear helmet lights bell equipment what to bring repair kit power bank" },
  { id: "acqua", tema: "On the route", icona: "⛲", titolo: "Water and resupply",
    corpo: "Always set off with full bottles, especially in the hot hours. The list of water and resupply points, kilometre by kilometre, will arrive here in the guide together with the final tracks.",
    cerca: "water fountains resupply refill food shops bottles" },
  { id: "meteo", tema: "On the route", icona: "🌦️", titolo: "Sun, heat and storms",
    corpo: "May in Tuscany brings long days and plenty of light, but the sun hits hard and a storm can always roll in. Sunscreen, full bottles and a light rain layer. The updated forecast and sunset time are in the Live section.",
    cerca: "weather heat sun rain storm sunscreen clothing temperature sunset" },
  { id: "animali", tema: "On the route", icona: "🐄", titolo: "Grazing animals",
    corpo: "In Maremma you may come across flocks at pasture, sometimes with guardian dogs. Slow down, get off the bike if needed and keep it between you and the animal, pass calmly without sudden moves. If you cross a pasture fence, always close the gate behind you.",
    cerca: "animals dogs shepherd maremmano flock pasture gates fences boars encounter" },
  { id: "emergenze", tema: "During the event", icona: "🆘", titolo: "Emergencies",
    corpo: "For a medical emergency call 112 right away, the single European number that always works. The event is self-supported, there is no sweep vehicle. From the Live section you can share your exact position with one tap.",
    cerca: "emergency 112 rescue help phone accident position" },
  { id: "arrivo", tema: "During the event", icona: "🏁", titolo: "Finish and event window",
    corpo: "The event window closes on 25 May. Details about the welcome at the finish and its times will follow, here in the guide.",
    cerca: "finish welcome times until when 25 may window finisher" },
  { id: "foto", tema: "During the event", icona: "📷", titolo: "Photographers along the route",
    corpo: "Photographers, videomakers and drones tell your story. After the event you receive a selection of images to relive and share.",
    cerca: "photos photographers video drones images memory selection" },
  { id: "social", tema: "During the event", icona: "📣", titolo: "Tell the story",
    corpo: "Use the hashtag #tuscanytrail in your photos and stories, so the people back home live the event through you.",
    cerca: "social hashtag instagram photos share stories" },
  { id: "dovedormire", tema: "Sleeping", icona: "🛏️", titolo: "From hotels to a field under the stars",
    corpo: "No fixed stages, you sleep where you like. 55% of participants choose only hotels and B&Bs, others mix it up — one night in a tent, one in a village, one on a farm stay. In the Sleep section you find the map with real prices and availability, bookable right away.",
    cerca: "sleep hotel b&b tent farm stay night where freedom book" },
  { id: "basecamp", tema: "Sleeping", icona: "⛺", titolo: "The Basecamps",
    corpo: "Tent spots run by local communities along the route — essential services, local food and the campfire atmosphere that has become legend. It is the social heart of the Trail, with the spirit and comforts of a bivouac, not of a holiday campsite. Details of the 2027 Basecamps will follow.",
    cerca: "basecamp base camp tent field communities campfire showers toilets sleep" }
],

live: {
  whip: {
    titolo: "Where everyone else is",
    testo: "The official live tracking map. See in real time where the riders are along the route.",
    nota: "",
    apri: "Open full screen"
  },
  gps: {
    titolo: "Where am I?",
    testo: "Turn on your phone's GPS and the guide tells you which kilometre you are at, what lies ahead — water, food, places to sleep — the weather where you are, and lets you share your position with one tap."
  }
},

dormire: {
  titolo: "Getting there and sleeping",
  intro: "We recommend booking your first night near the start early — there will be 6,000 of you around Venturina and Campiglia Marittima on the same days. If you like, book the other nights now too from the map below.",
  stay22: {
    titolo: "Book from the map",
    testo: "Hotels, B&Bs and campsites around the start for the night before you set off. Move the map along the route to book your next stops too — what you see is bookable. When the tracks are ready, the route line will appear on the map as well.",
    aid: "adventurelabsrl",
    campaign: "ttapp2027",
    venue: "Venturina Terme",
    lat: 43.0302, lng: 10.6055,
    checkin: "2027-05-18", checkout: "2027-05-19"
  },
  consigli: []
},

dopo: {
  titolo: "You made it. A piece of Tuscany is yours now.",
  testo: "Information about photos, the survey and upcoming events will arrive here after the event.",
  azioni: [],
  prossimo: null
},

sponsor: { titolo: "", lista: [] },

meteo: {
  localita: [
    { nome: "Venturina Terme", lat: 43.029, lng: 10.601 },
    { nome: "San Vincenzo", lat: 43.095, lng: 10.538 },
    { nome: "Siena", lat: 43.319, lng: 11.331 },
    { nome: "Monteriggioni", lat: 43.390, lng: 11.224 },
    { nome: "Pienza (V. d'Orcia)", lat: 43.077, lng: 11.679 }
  ],
  giorniEvento: ["2027-05-19", "2027-05-20", "2027-05-21", "2027-05-22", "2027-05-23", "2027-05-24", "2027-05-25"]
},

ui: {
  stay22lang: "en",
  giorniSett: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
  countdown: { giorni: "days", ore: "hours", minuti: "minutes" },
  tabs: { home: "Home", percorso: "Route", info: "Info", dormire: "Sleep", live: "Live" },
  gate: {
    testo: "This guide is for participants only.|Enter the code you received in your confirmation email.",
    placeholder: "CODE", bottone: "Enter",
    errore: "Invalid code. Check your confirmation email."
  },
  installa: {
    titolo: "Keep the guide within reach",
    testo: "Save it to your Home screen. It becomes an icon on your phone — one tap and you are in, even with no signal.",
    salva: "Save to phone", dopo: "Later",
    iosTitolo: "Save the guide on your iPhone",
    iosPassi: ["Tap the <b>Share</b> button at the bottom of Safari (the square with the arrow pointing up)",
               "Scroll and choose <b>\"Add to Home Screen\"</b>",
               "Tap <b>Add</b> and from then on the guide is an icon on your phone, one tap and you are in"],
    iosFatto: "Done"
  },
  avvisiTitolo: "Good to know right now",
  checklistTitolo: "Things to do, in order",
  checklistSotto: "Follow the order and tick what you complete. The list remembers you.",
  vai: "Go",
  trePercorsi: "The three routes", vaiPercorsi: "Go to the routes",
  durante: {
    liveSotto: "Tap here to see where you are, at which km, and what lies ahead to eat and sleep",
    emergenze: "Emergency · 112", condividi: "Share position",
    meteo: "Weather and sunset", dormire: "Sleep tonight", info: "All the info"
  },
  cercaGlobale: "Search all the information…",
  cercaNulla: "No results. Try another word.",
  cercaInfo: "Search the information…",
  percorsoScegli: "Choose your route",
  percorsoIntro: "Start and finish for everyone at |. At registration you pick one route, but you receive all the tracks and can change your mind on the road.",
  mappaAltimetria: "Map + elevation", gpx: "↓ GPX",
  inArrivo: {
    dati: "Km and elevation coming soon",
    traccia: "GPX track coming soon",
    mappa: "The route map lights up as soon as we load the GPX tracks.",
    live: "Live turns on when the GPX tracks are loaded. Meanwhile you can already check the weather of the event locations below."
  },
  prep: { apri: "Open the shop", codice: "Code", inArrivo: "Link and discount coming soon" },
  rv: {
    torna: "Routes",
    aiuto: "Drag your finger along the elevation profile and watch the point move on the map. Zoom in on the map to make more points appear.",
    partenza: "Start · Venturina Terme", arrivo: "Finish · Venturina Terme",
    mostrati: "| points shown, grouped into | markers — the number on a marker says how many are there",
    quiCiSono: "| points here", eAltri: "and | more", altriQui: "and | more here",
    prossimi: "Next | km", tuttoIlPercorso: "Whole route",
    seiQui: "You are at km | · elevation | m",
    lontanoKm: "Nearest point of the route at km | · elevation | m",
    nessunPunto: "No points of this kind on this route.",
    quota: "elevation",
    daQui: "From here to the finish | km and | m of climbing"
  },
  insieme: "The three routes together",
  partenzaArrivo: "Start / Finish · Venturina Terme",
  servizi: "Services along the route",
  serviziIntro: "Water, food and places to sleep within 500 metres of the route. The list says a place exists, not that it is open — for accommodation press <b>Book</b> and see real prices and availability on the map. On the map, water and food are marked at their kilometre along the route, so the position is approximate within a few hundred metres.",
  filtri: { tutti: "All", a: "Water", m: "Food", d: "Sleep" },
  conteggi: { m: "food", d: "stays", a: "fountains" },
  prenota: "Book",
  buco: "km with no water or food", bucoDettaglio: "from km | to km | — stock up before",
  serviziInArrivo: "The services list for this route is being prepared, coming soon.",
  mappaTraccia: "The map shows your route line",
  caricamentoAlloggi: "Loading accommodation map…",
  mioPercorso: "My route",
  attivaGps: "Turn on GPS",
  gpsCerco: "Finding your position…",
  gpsNo: "GPS not available on this device.",
  gpsNegato: "Cannot read your position. Check your phone permissions.",
  gpsLontano: "You are | km from the | route. The nearest point is at km |.",
  gpsPosizione: "You are around km | of | on the | — | km to go to the finish. Keep going! 💪",
  gpsQui: "You are here",
  condividiPos: "Share my position",
  condividiTesto: "My position at the Tuscany Trail",
  davanti: "Ahead of you", tra: "in", km: "km", fontana: "fountain", fontane: "fountains", posti: "places", alloggi: "stays",
  meteoTitolo: "Weather", meteoDoveSono: "Weather where I am", meteoLocalita: "The event locations",
  meteoNota: "Preview with the coming days — during the event this table shows 19–25 May.",
  meteoAdesso: "where you are now", vento: "wind", pioggia: "rain in the next hours",
  tramontaQui: "🌇 The sun sets here at",
  tramonto: "🌇 <b>Sunset today in Venturina at |</b> — plan to reach your destination before dark.",
  tramontoOffline: "🌇 Sunset not available offline.",
  meteoOffline: "Weather unavailable, connection needed.",
  legenda: "Tuscany Trail · Beta guide — we improve it every week",
  searchExtra: {
    dormire: { t: "Getting there and sleeping", s: "The accommodation map with prices and availability", k: "sleep book hotel stay night map campsite booking basecamp" },
    live: { t: "Where am I / Weather", s: "GPS on the route, weather and sunset", k: "live gps where am i position weather sunset ahead" },
    prep: { t: "Arrive prepared", s: "Training, bike and the shopping list with discounts", k: "preparation arrive prepared training discounts sponsors shopping list tyres bags saddle shoes helmet lock nutrition clothing vittoria miss grape selle italia northwave abus enervit rh sportler" }
  },
  poiSub: { ristorante: "restaurant", bar: "bar", "fast food": "fast food", pub: "pub",
            gelateria: "ice cream shop", supermercato: "supermarket", alimentari: "grocery",
            panificio: "bakery", fontana: "fountain", hotel: "hotel", "B&B": "B&B",
            ostello: "hostel", motel: "motel", rifugio: "mountain hut", bivacco: "bivouac hut",
            campeggio: "campsite", chalet: "chalet", appartamenti: "apartments" }
}

} // fine en

};
