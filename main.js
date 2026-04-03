// ============================================
// UNDERGROUND CULT PRODUCTION — MAIN JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // HAMBURGER MENU
  // ==========================================
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
      }
    });
  }

  // ==========================================
  // HERO SECTION
  // ==========================================
  const featured = getFeaturedPost();
  if (featured) {
    const heroTitle   = document.getElementById('heroTitle');
    const heroExcerpt = document.getElementById('heroExcerpt');
    const heroDate    = document.getElementById('heroDate');
    const heroLink    = document.getElementById('heroLink');

    if (heroTitle)   heroTitle.textContent   = featured.title;
    if (heroExcerpt) heroExcerpt.textContent = featured.excerpt;
    if (heroDate)    heroDate.textContent    = featured.dateFormatted || formatDate(featured.date);
    if (heroLink)    heroLink.href           = `post.html?id=${featured.id}`;

    // Tag categoria nell'hero
    const tagEl = document.querySelector('.hero-meta .tag');
    if (tagEl) {
      tagEl.textContent        = featured.category.toUpperCase();
      tagEl.dataset.cat        = featured.category;
    }
  }

  // ==========================================
  // POSTS GRID
  // ==========================================
  const postsGrid    = document.getElementById('postsGrid');
  const loadMoreBtn  = document.getElementById('loadMoreBtn');
  const filterBtns   = document.querySelectorAll('.filter-btn');

  let allPosts       = getPublishedPosts();
  let currentFilter  = 'all';
  let visibleCount   = 6;

  function renderPosts() {
    if (!postsGrid) return;

    const filtered = currentFilter === 'all'
      ? allPosts
      : allPosts.filter(p => p.category === currentFilter);

    postsGrid.innerHTML = '';

    if (filtered.length === 0) {
      postsGrid.innerHTML = '<div class="loading-posts">NESSUN ARTICOLO IN QUESTA CATEGORIA.</div>';
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }

    const toShow = filtered.slice(0, visibleCount);

    toShow.forEach((post, i) => {
      const card = createPostCard(post, i);
      postsGrid.appendChild(card);
    });

    if (loadMoreBtn) {
      loadMoreBtn.style.display = filtered.length > visibleCount ? 'inline-block' : 'none';
    }
  }

  function createPostCard(post, index) {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.dataset.category = post.category;
    card.style.animationDelay = `${index * 0.06}s`;

    const imgHTML = post.image
      ? `<img src="${post.image}" alt="${escapeHtml(post.title)}" loading="lazy">`
      : `<div class="post-img-placeholder">${categoryIcon(post.category)}</div>`;

    card.innerHTML = `
      <div class="post-img-wrap">${imgHTML}</div>
      <div class="post-body">
        <div class="post-meta">
          <span class="tag" data-cat="${post.category}">${post.category.toUpperCase().replace('-',' & ')}</span>
          <span class="post-date">${post.dateFormatted || formatDate(post.date)}</span>
        </div>
        <h2 class="post-title">${escapeHtml(post.title)}</h2>
        <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
      </div>
      <div class="post-footer">
        <a href="post.html?id=${post.id}" class="post-read-link">LEGGI TUTTO →</a>
      </div>
    `;

    card.addEventListener('click', () => {
      window.location.href = `post.html?id=${post.id}`;
    });

    return card;
  }

  function categoryIcon(cat) {
    const icons = {
      'recensione': '🎬',
      'top-flop':   '★',
      'intervista': '🎙',
      'rubrica':    '📽',
      'live':       '🔴'
    };
    return icons[cat] || '◉';
  }

  // FILTRI
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        visibleCount  = 6;
        renderPosts();
      });
    });
  }

  // LOAD MORE
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += 6;
      renderPosts();
    });
  }

  renderPosts();

  // ==========================================
  // ACTIVE NAV LINK
  // ==========================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

});

// ============================================
// UTILITY
// ============================================
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
