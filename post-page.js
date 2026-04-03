// ============================================
// POST PAGE — JS
// Legge ?id=... dall'URL e renderizza il post
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');
  const container = document.getElementById('postPage');

  if (!postId || !container) {
    renderNotFound(container);
    return;
  }

  const post = getPostById(postId);

  if (!post || post.status !== 'published') {
    renderNotFound(container);
    return;
  }

  // Aggiorna titolo pagina e meta
  document.title = `${post.title} — Underground Cult Production`;
  const metaDesc = document.getElementById('pageDesc');
  if (metaDesc) metaDesc.content = post.excerpt;

  // Render contenuto
  container.innerHTML = `
    <a href="index.html" class="back-link">← TORNA ALLA HOME</a>

    <header class="post-page-header">
      <div class="post-page-meta">
        <span class="tag" data-cat="${post.category}">${post.category.toUpperCase().replace('-',' & ')}</span>
        <span class="post-page-date">${post.dateFormatted || formatDate(post.date)}</span>
      </div>
      <h1 class="post-page-title">${escapeHtml(post.title)}</h1>
      ${post.excerpt ? `<p class="post-page-excerpt">${escapeHtml(post.excerpt)}</p>` : ''}
    </header>

    ${post.image ? `<img src="${post.image}" alt="${escapeHtml(post.title)}" class="post-page-image">` : ''}

    ${post.youtubeId ? `
    <div class="post-page-content">
      <div class="video-embed">
        <iframe src="https://www.youtube.com/embed/${post.youtubeId}" 
          title="Video YouTube" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
    ` : ''}

    <div class="post-page-content">
      ${post.content}
    </div>

    ${post.tags && post.tags.length ? `
    <div class="post-tags" style="margin-top:3rem; padding-top:1rem; border-top:2px solid var(--black); display:flex; gap:8px; flex-wrap:wrap;">
      ${post.tags.map(t => `<span style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.08em;padding:3px 8px;border:2px solid var(--grey-mid);color:var(--grey-mid);">#${t}</span>`).join('')}
    </div>
    ` : ''}

    <div class="post-share" style="margin-top:3rem; padding:1.5rem; background:var(--black); color:var(--yellow); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
      <span style="font-family:var(--font-display);font-size:1.5rem;letter-spacing:0.05em;">CONDIVIDI QUESTO ARTICOLO</span>
      <div style="display:flex;gap:8px;">
        <a href="https://wa.me/?text=${encodeURIComponent(post.title + ' — ' + window.location.href)}" 
           target="_blank" rel="noopener" class="btn-primary" style="font-size:11px;">WHATSAPP</a>
        <button onclick="navigator.clipboard.writeText(window.location.href).then(()=>alert('Link copiato!'))" 
           class="btn-primary" style="font-size:11px;cursor:pointer;border:none;">COPIA LINK</button>
      </div>
    </div>
  `;

  // ARTICOLI CORRELATI
  renderRelated(post);
});

function renderRelated(currentPost) {
  const relatedSection = document.getElementById('relatedSection');
  const relatedGrid    = document.getElementById('relatedGrid');

  if (!relatedSection || !relatedGrid) return;

  const related = getPublishedPosts()
    .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
    .slice(0, 3);

  if (related.length === 0) return;

  relatedSection.style.display = 'block';

  related.forEach(post => {
    const imgHTML = post.image
      ? `<img src="${post.image}" alt="${escapeHtml(post.title)}" loading="lazy">`
      : `<div class="post-img-placeholder" style="height:140px;display:flex;align-items:center;justify-content:center;background:var(--black);font-family:var(--font-display);font-size:3rem;color:var(--yellow);">◉</div>`;

    const card = document.createElement('article');
    card.className = 'post-card';
    card.innerHTML = `
      <div class="post-img-wrap" style="aspect-ratio:16/9;">${imgHTML}</div>
      <div class="post-body">
        <div class="post-meta">
          <span class="tag" data-cat="${post.category}">${post.category.toUpperCase().replace('-',' & ')}</span>
          <span class="post-date">${post.dateFormatted || formatDate(post.date)}</span>
        </div>
        <h3 class="post-title">${escapeHtml(post.title)}</h3>
      </div>
      <div class="post-footer">
        <a href="post.html?id=${post.id}" class="post-read-link">LEGGI TUTTO →</a>
      </div>
    `;
    card.addEventListener('click', () => window.location.href = `post.html?id=${post.id}`);
    relatedGrid.appendChild(card);
  });
}

function renderNotFound(container) {
  if (!container) return;
  container.innerHTML = `
    <div style="text-align:center;padding:5rem 2rem;">
      <div style="font-family:var(--font-display);font-size:6rem;color:var(--yellow);">404</div>
      <p style="font-family:var(--font-mono);font-size:14px;margin:1rem 0 2rem;">Articolo non trovato o non più disponibile.</p>
      <a href="index.html" class="btn-primary">← TORNA ALLA HOME</a>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
