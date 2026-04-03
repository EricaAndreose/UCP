// ============================================
// UNDERGROUND CULT PRODUCTION — POSTS DATABASE
// File: js/posts.js
//
// COME FUNZIONA:
// Questo file è il "database" del sito.
// I post vengono scritti qui manualmente o
// tramite il pannello admin locale.
// La versione GitHub Pages legge solo i post
// con status: "published".
// ============================================

const UCP_POSTS = [
  {
    id: "io-capitano-recensione",
    title: "IO CAPITANO: UN FILM NECESSARIO",
    excerpt: "Garrone riesce a dipingere, senza stereotipi e pietismi, un periodo storico drammatico che ci riguarda da vicino. Una storia di formazione potente e scomoda.",
    content: `
      <p>Matteo Garrone torna al cinema con un film che è insieme una storia di formazione e un atto politico. <em>Io Capitano</em> segue Seydou e Moussa, due cugini senegalesi che decidono di lasciare Dakar per raggiungere l'Europa, convinti dalla retorica dei social media che il viaggio sia avventuroso e il successo assicurato.</p>
      <h2>La regia di Garrone</h2>
      <p>Ciò che colpisce immediatamente è la scelta di Garrone di non ricorrere all'estetica del documentario, pur parlando di un tema che lo richiederebbe. La macchina da presa è presente, viva, ma non voyeuristica. Ogni inquadratura è pensata per restituire dignità ai protagonisti, non per esibirne la sofferenza.</p>
      <blockquote>"Non volevo fare un film sulla migrazione. Volevo fare un film su un ragazzo che sogna." — Matteo Garrone</blockquote>
      <h2>Seydou Sarr: una rivelazione</h2>
      <p>L'attore protagonista, Seydou Sarr, è una rivelazione assoluta. Non recita, <em>vive</em> il personaggio. I suoi occhi portano tutto il peso del film — la speranza ingenua dell'inizio, la graduale scoperta dell'orrore, la determinazione che nasce dalla disperazione.</p>
      <div class="rating">★★★★☆ 8/10</div>
      <p>Un film che ti cambia qualcosa dentro. Non perché sia facile guardarlo — non lo è — ma perché è onesto. E l'onestà, al cinema, è tutto.</p>
    `,
    category: "recensione",
    date: "2025-03-15",
    dateFormatted: "15 MARZO 2025",
    image: null,
    youtubeId: "dQw4w9WgXcQ", // esempio — sostituire
    tags: ["recensione", "garrone", "italia", "migrazione"],
    status: "published",
    featured: true
  },
  {
    id: "top-5-film-anni-70",
    title: "TOP 5 FILM DEGLI ANNI '70 CHE DEVI VEDERE",
    excerpt: "Il decennio più rivoluzionario della storia del cinema. Cinque titoli imprescindibili che hanno cambiato per sempre il linguaggio cinematografico.",
    content: `
      <p>Gli anni '70 sono stati un decennio straordinario per il cinema mondiale. La Nouvelle Vague aveva già seminato i suoi frutti in Europa; negli Stati Uniti la New Hollywood stava ridefinendo le regole del gioco. In Italia il genere si faceva autore. Ecco cinque film che ogni cinefilo deve conoscere.</p>
      <h2>1. Chinatown (1974)</h2>
      <p>Roman Polanski costruisce un noir perfetto. Jack Nicholson è irresistibile. La sceneggiatura di Robert Towne è probabilmente la più studiata nelle scuole di cinema. Il finale rimane uno dei più devastanti della storia.</p>
      <h2>2. Il padrino — Parte II (1974)</h2>
      <p>Coppola supera il primo capitolo. La struttura narrativa intrecciata — il giovane Vito Corleone e il decaduto Michael — è un capolavoro di montaggio e regia.</p>
      <h2>3. Apocalypse Now (1979)</h2>
      <p>Un viaggio nell'orrore e nella follia umana. Coppola impazzisce sul set e ne esce con qualcosa di immortale. L'odore del napalm al mattino non si dimentica.</p>
      <h2>4. Profondo rosso (1975)</h2>
      <p>Dario Argento al culmine della sua arte. Le musiche dei Goblin, la fotografia ossessiva, la struttura del giallo che diventa quasi astratta. Un'opera sensoriale.</p>
      <h2>5. Aguirre, furore di Dio (1972)</h2>
      <p>Werner Herzog e Klaus Kinski creano qualcosa di unico. Un film girato in condizioni impossibili sull'Amazzonia, che parla della follia del potere con una lucidità terrificante.</p>
    `,
    category: "top-flop",
    date: "2025-02-28",
    dateFormatted: "28 FEBBRAIO 2025",
    image: null,
    youtubeId: null,
    tags: ["top5", "anni70", "classici"],
    status: "published",
    featured: false
  },
  {
    id: "intervista-regista-esordiente",
    title: "«HO GIRATO IL MIO PRIMO FILM CON 8000 EURO»",
    excerpt: "Incontriamo un regista esordiente che ha portato il suo cortometraggio in tre festival internazionali. La storia di come si fa cinema oggi senza budget.",
    content: `
      <p>Alessandro ha 28 anni, una camera mirrorless e una determinazione che farebbe invidia a Herzog. Il suo cortometraggio <em>Deriva</em> è stato selezionato al Torino Film Festival, a Clermont-Ferrand e a Tribeca Short Film. Lo abbiamo incontrato dopo la proiezione romana.</p>
      <h2>Come nasce Deriva?</h2>
      <p>"Nasce da una perdita. Non voglio essere più specifico di così. Ma quando perdi qualcosa di importante capisci che hai pochissimo tempo per raccontare quello che vuoi raccontare. Ho scritto la sceneggiatura in tre giorni, con quella urgenza."</p>
      <h2>Il budget di 8000 euro: come li hai usati?</h2>
      <p>"Il 40% è andato in attrezzatura che non avevo — nello specifico un obiettivo anamorphic che volevo assolutamente. Il resto in catering, in piccoli compensi agli attori, in post-produzione. Il montatore ha lavorato con me per quasi tre mesi."</p>
      <blockquote>"Il budget non è il problema. Il problema è sapere cosa vuoi dire. Se lo sai, trovi il modo."</blockquote>
    `,
    category: "intervista",
    date: "2025-02-10",
    dateFormatted: "10 FEBBRAIO 2025",
    image: null,
    youtubeId: null,
    tags: ["intervista", "cortometraggio", "cinema-indipendente"],
    status: "published",
    featured: false
  },
  {
    id: "cineforum-febbraio",
    title: "CINEFORUM: ABBIAMO GUARDATO BABYLON",
    excerpt: "Diretta di tre ore, 60 spettatori in chat, discussioni feroci. Il nostro cineforum mensile ha analizzato l'ultimo film di Damien Chazelle. Ecco cosa è emerso.",
    content: `
      <p>Ogni mese organizziamo una diretta streaming in cui guardiamo insieme un film e poi ne discutiamo. Febbraio è stato il mese di <em>Babylon</em>, l'ambizioso — e divisivo — film di Damien Chazelle sull'Hollywood degli anni '20.</p>
      <h2>La discussione</h2>
      <p>Tre ore di commenti, 60 persone in chat. I pareri si sono divisi nettamente. C'è chi ha trovato il film magnificamente caotico, fedele al periodo che racconta. Chi lo ha trovato eccessivo, sopra le righe, indulgente.</p>
      <p>La nostra posizione: Babylon è un film che ti può stancare, ma non ti lascia indifferente. E al cinema — almeno per noi — questo conta moltissimo.</p>
    `,
    category: "rubrica",
    date: "2025-01-30",
    dateFormatted: "30 GENNAIO 2025",
    image: null,
    youtubeId: null,
    tags: ["cineforum", "live", "chazelle", "babylon"],
    status: "published",
    featured: false
  },
  {
    id: "flop-blockbuster-2024",
    title: "I FLOP PIÙ CLAMOROSI DEL 2024",
    excerpt: "Un anno ricco di delusioni. Dai sequel inutili ai franchise esauriti: analizziamo i film che avrebbero dovuto essere qualcosa e non lo sono stati.",
    content: `
      <p>Il 2024 è stato un anno interessante per l'industria cinematografica — e non sempre nel senso positivo. Accanto a film ottimi, abbiamo assistito a flop clamorosi, sia di critica che di pubblico. Eccone una selezione ragionata.</p>
      <h2>Madame Web</h2>
      <p>Sony Pictures ha costruito un universo Spider-Man senza Spider-Man e senza idee. <em>Madame Web</em> ne è il punto più basso. Dialoghi imbarazzanti, regia scadente, performance svogliate. Un disastro completo.</p>
      <h2>Joker: Folie à Deux</h2>
      <p>Il sequel più atteso — e più inutile — dell'anno. Todd Phillips trasforma il cinecomic in un musical e ottiene il peggio dei due generi. Flop al botteghino, fischi in sala.</p>
    `,
    category: "top-flop",
    date: "2025-01-08",
    dateFormatted: "8 GENNAIO 2025",
    image: null,
    youtubeId: null,
    tags: ["flop", "2024", "blockbuster"],
    status: "published",
    featured: false
  }
];

// ============================================
// UTILITY: Formattazione data
// ============================================
function formatDate(dateStr) {
  const months = ['GENNAIO','FEBBRAIO','MARZO','APRILE','MAGGIO','GIUGNO',
                  'LUGLIO','AGOSTO','SETTEMBRE','OTTOBRE','NOVEMBRE','DICEMBRE'];
  const d = new Date(dateStr);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// ============================================
// UTILITY: Ottieni post pubblicati
// ============================================
function getPublishedPosts() {
  return UCP_POSTS
    .filter(p => p.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getFeaturedPost() {
  return UCP_POSTS.find(p => p.status === 'published' && p.featured)
      || getPublishedPosts()[0];
}

function getPostById(id) {
  return UCP_POSTS.find(p => p.id === id);
}
