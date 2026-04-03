# Developed with Claude Sonnet 4.6

\\


# Underground Cult Production — Sito Web

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-yellow?style=flat-square)](https://tuonome.github.io/underground-cult-production)

Sito web/blog del canale YouTube [Underground Cult Production](https://www.youtube.com/@undergroundcultproduction).
Cinema, recensioni, interviste, top e flop.

## Struttura del progetto

```
ucp-site/
├── index.html          # Homepage pubblica
├── post.html           # Pagina singolo articolo
├── recensioni.html     # Archivio recensioni (da creare)
├── about.html          # Chi siamo (da creare)
├── privacy.html        # Privacy policy (da creare)
├── css/
│   └── style.css       # Foglio di stile principale
├── js/
│   ├── posts.js        # ← DATABASE DEI POST
│   ├── main.js         # JS homepage
│   └── post-page.js    # JS pagina post
├── images/             # Immagini di copertina post
└── admin/              # ← PANNELLO ADMIN (solo locale, non su GitHub)
    └── index.html
```

## Come aggiungere/modificare articoli

1. Apri `admin/index.html` nel browser (file locale)
2. Clicca "Nuovo Articolo" e compila il form
3. Salva e poi vai su "Esporta per GitHub"
4. Copia il codice generato in `js/posts.js`
5. Fai commit e push su GitHub:
   ```bash
   git add js/posts.js
   git commit -m "Nuovo post: titolo articolo"
   git push
   ```
6. GitHub Pages aggiorna il sito in ~2 minuti ✓

## Setup GitHub Pages

1. Crea un repository su GitHub
2. Carica tutti i file (ESCLUDI la cartella `admin/`)
3. Settings → Pages → Source: main branch
4. Il sito è live su `https://username.github.io/repository`

Per dominio personalizzato aggiungi un file `CNAME` con:
```
tuodominio.it
```

## Newsletter Mailchimp

1. Crea account su [mailchimp.com](https://mailchimp.com)
2. Crea una Audience
3. Audience → Signup forms → Embedded forms
4. Copia l'URL action del form
5. Incollalo in `index.html` e `post.html` dove c'è `MAILCHIMP_ACTION_URL`
6. Aggiorna il campo hidden anti-bot con i tuoi codici

## Stile

- **Ispirazione**: Factory Records (Tony Wilson) + Fanzine anni '80
- **Colori**: Giallo `#FFE600`, Nero `#0A0A0A`, Bianco sporco `#F5F5F0`
- **Font**: Anton (display) + Space Mono (corpo/UI)
- **Framework**: Zero dipendenze — HTML, CSS, JS vanilla

## Licenza

Contenuti © Underground Cult Production.
Codice rilasciato sotto licenza MIT — libero di essere riutilizzato, modificato, condiviso.
