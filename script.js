const ICONS = {
  bolt:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>`,
  play:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3"/><path d="M10.5 8.5l4 2.2-4 2.2v-4.4z"/></svg>`,
  spark:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.9L12 3z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"/></svg>`,
  clapper: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 7v11a1 1 0 001 1h14a1 1 0 001-1V7M4 7l2-4h12l2 4M9 3v4M15 3v4"/><path d="M9.5 12.5l4 2.2-4 2.2v-4.4z"/></svg>`,
};

// ════════════════════════════════════════════════
//  VIDEO PORTFOLIO DATA
//
//  HOW TO ADD YOUR OWN VIDEOS:
//  Find the category below (or add a new one) and add an
//  object to its `items` array with this shape:
//
//  {
//    title: "Project Name",              // shown on the card. For YouTube
//                                          // links you can leave this "" —
//                                          // it auto-fills from the video's
//                                          // real YouTube title.
//    tag: "Instagram Reel",               // small category label
//    description: "One or two sentences about the edit.",
//    videoUrl: "videos/my-clip.mp4",      // local file path, OR a
//                                          // full YouTube URL (both work)
//    thumbnail: "",                       // optional image path.
//                                          // Leave "" to auto-preview:
//                                          //  - local mp4 -> silent looping preview
//                                          //  - YouTube link -> auto thumbnail
//    tools: ["Premiere Pro", "After Effects"]  // optional, shown as tags
//  }
//
//  FOR A YOUTUBE VIDEO (recommended — no file size limit, full quality):
//  Upload the video to YouTube as "Unlisted" (not Private), copy its link,
//  and paste it as videoUrl below. Leave title: "" — thumbnail AND title
//  both fill in automatically. It plays right here on your site in the
//  popup player, visitors never leave the page.
//
//  Leave videoUrl "" to show a placeholder card reminding you
//  to fill it in later — nothing breaks, nothing needs redesigning.
//  New items appear automatically, no other code changes needed.
// ════════════════════════════════════════════════
const VIDEOS = {
  shortform: {
    label: 'Short-Form & Reels', icon: 'bolt',
    items: [
      {
        title: 'Vertical Showreel Cut',
        tag: 'Instagram Reel',
        description: 'A fast-paced vertical edit built for retention — quick cuts, punchy pacing and a beat-synced rhythm.',
        videoUrl: 'videos/sample-reel.mp4',
        thumbnail: '',
        tools: ['Premiere Pro', 'CapCut']
      },
      {
        title: 'Add Your Next Reel',
        tag: 'YouTube Short',
        description: 'Add a title, description and video path in script.js — it appears here automatically.',
        videoUrl: '',
        thumbnail: '',
        tools: []
      },
      {
        title: 'Add A Third Reel',
        tag: 'Instagram Reel',
        description: 'This card appears after clicking "Show More" — proof the pagination works. Replace or delete it anytime.',
        videoUrl: '',
        thumbnail: '',
        tools: []
      },
    ]
  },
  clipping: {
    label: 'Clipping', icon: 'play',
    items: [
      {
        title: 'Add Your Clipping Edit',
        tag: 'Clip',
        description: 'Highlight clips pulled from longer footage — trimmed, captioned and paced to hook fast.',
        videoUrl: '',
        thumbnail: '',
        tools: []
      },
      {
        title: 'Add Another Clip',
        tag: 'Clip',
        description: 'Show off your clipping/editing style — add a title, description and video path in script.js.',
        videoUrl: '',
        thumbnail: '',
        tools: []
      },
    ]
  },
  ai: {
    label: 'AI-Generated & AI-Assisted', icon: 'spark',
    items: [
      {
        title: 'Add Your AI Video',
        tag: 'AI-Generated',
        description: 'AI-generated visuals edited and finished into a polished, publish-ready video.',
        videoUrl: '',
        thumbnail: '',
        tools: []
      },
      {
        title: 'Add Your AI Video',
        tag: 'AI-Generated',
        description: 'AI-generated visuals edited and finished into a polished, publish-ready video.',
        videoUrl: 'https://youtube.com/shorts/5VHdWbplWz4?feature=share',
        thumbnail: '',
        tools: []
      },
    ]
  },
  cinematic: {
    label: 'Cinematic & Promotional', icon: 'clapper',
    items: [
      {
        title: 'Showreel — Cinematic Cut',
        tag: 'Promo Video',
        description: 'A cinematic pass on the same source footage — mood-driven pacing, grade and sound design.',
        videoUrl: 'videos/sample-reel.mp4',
        thumbnail: '',
        tools: ['DaVinci Resolve', 'After Effects']
      },
      {
        title: 'Add Your Promo Edit',
        tag: 'Promotional',
        description: 'Brand or product promos — motion-forward edits built to sell in seconds.',
        videoUrl: '',
        thumbnail: '',
        tools: []
      },
    ]
  },
};

let activeCat = 'shortform';
const VIDEOS_PER_PAGE = 2; // how many videos show on the main portfolio section before "Show More" opens the full category page

// ── HELPERS: recognize YouTube links, build embed/thumbnail URLs ──
function getYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}
function isLocalVideo(url) {
  return !!url && !getYouTubeId(url);
}

// ── AUTO-FETCH YOUTUBE TITLE (oEmbed) ──
// Leave `title: ''` on any YouTube item in VIDEOS and this fills it in
// automatically from the YouTube link, so you only ever need to paste the URL.
const ytTitleCache = {};
async function getYouTubeTitle(url) {
  const yid = getYouTubeId(url);
  if (!yid) return null;
  if (ytTitleCache[yid]) return ytTitleCache[yid];
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
    if (!res.ok) return null;
    const data = await res.json();
    ytTitleCache[yid] = data.title;
    return data.title;
  } catch (e) {
    return null;
  }
}

// ── BUILD A SINGLE VIDEO CARD (shared by main grid + full category page) ──
// Aspect ratio is set dynamically once the real video/image dimensions are known:
// portrait footage (e.g. Reels/Shorts, ~9:16) gets a tall box, landscape footage
// (e.g. YouTube/promo, ~16:9) gets a wide box — no fixed/forced crop.
function buildVideoCard(item, data) {
  const el = document.createElement('div');
  const hasVideo = !!(item.videoUrl && item.videoUrl.trim());
  el.className = 'video-card' + (hasVideo ? '' : ' is-placeholder');

  let thumbInner = '';
  if (item.thumbnail) {
    thumbInner = `<img src="${item.thumbnail}" alt="${item.title}" loading="lazy">`;
  } else if (hasVideo && isLocalVideo(item.videoUrl)) {
    thumbInner = `<video src="${item.videoUrl}" autoplay muted loop playsinline></video>`;
  } else if (hasVideo && getYouTubeId(item.videoUrl)) {
    const yid = getYouTubeId(item.videoUrl);
    thumbInner = `<img src="https://img.youtube.com/vi/${yid}/hqdefault.jpg" alt="${item.title}" loading="lazy">`;
  } else {
    thumbInner = `<div class="video-placeholder">
        <div class="video-placeholder-icon">${ICONS[data.icon]}</div>
        <div class="video-placeholder-label">Add video in script.js</div>
      </div>`;
  }

  el.innerHTML = `
    <div class="video-thumb-wrap${hasVideo ? '' : ' is-empty'}">
      <div class="video-cat-chip">${item.tag || data.label}</div>
      ${thumbInner}
      ${hasVideo ? `<div class="video-play-btn"><div class="video-play-circle"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>` : ''}
    </div>
    <div class="video-info">
      <div class="video-title">${item.title || (hasVideo && getYouTubeId(item.videoUrl) ? 'Loading title…' : '')}</div>
      <div class="video-desc">${item.description || ''}</div>
      ${item.tools && item.tools.length ? `<div class="video-tools">${item.tools.map(t => `<span class="video-tool-tag">${t}</span>`).join('')}</div>` : ''}
    </div>`;

  if (hasVideo) {
    el.addEventListener('click', () => openVideoModal(item, data.label));
  }

  // If it's a YouTube link with no title typed in, fetch the real title
  // automatically and fill it in once it loads (also caches it onto the
  // item so the modal shows the correct title without re-fetching).
  if (hasVideo && getYouTubeId(item.videoUrl) && !item.title) {
    getYouTubeTitle(item.videoUrl).then(t => {
      if (t) {
        item.title = t;
        const titleEl = el.querySelector('.video-title');
        if (titleEl) titleEl.textContent = t;
      }
    });
  }

  // ── DYNAMIC ASPECT RATIO ──
  const thumbWrap = el.querySelector('.video-thumb-wrap');
  const applyRatio = (w, h) => {
    if (!w || !h || !thumbWrap) return;
    thumbWrap.style.aspectRatio = (w / h < 1) ? '9 / 16' : '16 / 9';
  };

  const localVideoEl = el.querySelector('.video-thumb-wrap video');
  if (localVideoEl) {
    localVideoEl.addEventListener('loadedmetadata', () => {
      applyRatio(localVideoEl.videoWidth, localVideoEl.videoHeight);
    });
  } else if (item.thumbnail) {
    const imgEl = el.querySelector('.video-thumb-wrap img');
    if (imgEl) {
      if (imgEl.complete && imgEl.naturalWidth) {
        applyRatio(imgEl.naturalWidth, imgEl.naturalHeight);
      } else {
        imgEl.addEventListener('load', () => applyRatio(imgEl.naturalWidth, imgEl.naturalHeight));
      }
    }
  } else if (hasVideo && getYouTubeId(item.videoUrl)) {
    // YouTube: Shorts links are portrait, regular videos are landscape
    const isShort = /\/shorts\//.test(item.videoUrl);
    if (thumbWrap) thumbWrap.style.aspectRatio = isShort ? '9 / 16' : '16 / 9';
  }

  return el;
}

// ── BUILD SIDEBAR ──
function buildSidebar() {
  const sidebar = document.getElementById('workSidebar');
  sidebar.innerHTML = '';
  const label = document.createElement('div');
  label.className = 'sidebar-label';
  label.textContent = 'Categories';
  sidebar.appendChild(label);

  Object.entries(VIDEOS).forEach(([key, data]) => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (key === activeCat ? ' active' : '');
    btn.dataset.cat = key;
    btn.innerHTML = `
      <span class="cat-icon">${ICONS[data.icon]}</span>
      <span class="cat-info">
        <span class="cat-name">${data.label}</span>
        <span class="cat-count">${data.items.length} video${data.items.length === 1 ? '' : 's'}</span>
      </span>`;
    btn.addEventListener('click', () => switchCat(key));
    sidebar.appendChild(btn);
  });
}

// ── SWITCH CATEGORY ──
function switchCat(cat) {
  activeCat = cat;
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  const data = VIDEOS[cat];
  document.getElementById('galTitle').textContent = data.label;
  document.getElementById('galSub').textContent = `Showing ${Math.min(VIDEOS_PER_PAGE, data.items.length)} of ${data.items.length} video${data.items.length === 1 ? '' : 's'}`;
  buildVideoGrid(data, cat);
}

// ── BUILD VIDEO GRID (main portfolio preview, capped at VIDEOS_PER_PAGE) ──
// This grid — and its Show More button — belongs to whichever category is active.
// Each category has its own button; switching categories swaps which one is shown.
function buildVideoGrid(data, cat) {
  const grid = document.getElementById('galGrid');
  grid.innerHTML = '';

  const itemsToShow = data.items.slice(0, VIDEOS_PER_PAGE);

  itemsToShow.forEach((item) => {
    const el = buildVideoCard(item, data);
    grid.appendChild(el);
    el.classList.add('vis');
    io.observe(el);
  });

  // ── SHOW MORE BUTTON → opens this category's full page ──
  const hasMore = data.items.length > VIDEOS_PER_PAGE;
  const oldBtn = document.getElementById('showMoreBtn');
  if (oldBtn) oldBtn.remove();

  if (hasMore) {
    const btnWrap = document.createElement('div');
    btnWrap.className = 'show-more-wrap';
    btnWrap.id = 'showMoreBtn';
    btnWrap.innerHTML = `<button class="show-more-btn">Show More ${data.label} ↓</button>`;
    btnWrap.querySelector('button').addEventListener('click', () => openCategoryPage(cat));
    grid.insertAdjacentElement('afterend', btnWrap);
  }
}

// ── FULL CATEGORY PAGE (2-column, scrollable, own back button, unique per category) ──
function openCategoryPage(cat) {
  const data = VIDEOS[cat];
  const page = document.getElementById('categoryPage');

  document.getElementById('catPageTitle').textContent = data.label;
  document.getElementById('catPageSub').textContent = `${data.items.length} video${data.items.length === 1 ? '' : 's'}`;

  const grid = document.getElementById('catPageGrid');
  grid.innerHTML = '';
  data.items.forEach((item) => {
    const el = buildVideoCard(item, data);
    el.classList.add('vis');
    grid.appendChild(el);
  });

  page.classList.add('open');
  document.body.style.overflow = 'hidden';
  page.scrollTop = 0;
}

function closeCategoryPage() {
  document.getElementById('categoryPage').classList.remove('open');
  document.body.style.overflow = '';
}

// ── VIDEO MODAL (player) ──
function openVideoModal(item, fallbackTag) {
  const player = document.getElementById('videoModalPlayer');
  const title = document.getElementById('videoModalTitle');
  const tag = document.getElementById('videoModalTag');
  const desc = document.getElementById('videoModalDesc');
  const tools = document.getElementById('videoModalTools');

  const yid = getYouTubeId(item.videoUrl);
  const isShort = /\/shorts\//.test(item.videoUrl);
  if (player) {
    if (yid && isShort) {
      player.style.aspectRatio = '9 / 16';
      player.style.width = 'min(100%, calc(58vh * 9 / 16))';
    } else {
      player.style.aspectRatio = '16 / 9';
      player.style.width = '100%';
    }
  }
  if (yid) {
    // youtube-nocookie.com + modestbranding/rel/iv_load_policy/fs=0/disablekb/enablejsapi=0
    // minimizes YouTube's own UI (logo, related videos, fullscreen handoff) so the
    // video plays inline on this page instead of handing off to the YouTube app.
    player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${yid}?autoplay=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&enablejsapi=0&controls=1" title="${item.title || 'video'}" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  } else {
    player.innerHTML = `<video src="${item.videoUrl}" controls autoplay playsinline></video>`;
  }

  title.textContent = item.title || (yid ? 'Loading title…' : '');
  tag.textContent = item.tag || fallbackTag || '';
  desc.textContent = item.description || '';
  tools.innerHTML = (item.tools || []).map(t => `<span class="video-tool-tag">${t}</span>`).join('');

  document.getElementById('videoModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Auto-fill the modal title too if it hasn't been fetched yet
  if (yid && !item.title) {
    getYouTubeTitle(item.videoUrl).then(t => {
      if (t) {
        item.title = t;
        title.textContent = t;
      }
    });
  }
}
function closeVideoModal(e) {
  if (e) e.stopPropagation();
  document.getElementById('videoModal').classList.remove('open');
  document.getElementById('videoModalPlayer').innerHTML = '';
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideoModal(); });

// ── WHATSAPP — formatted message with name + need + message ──
const WA_NUMBER = '+916367961603';

function sendWhatsApp() {
  const name = document.getElementById('msgName').value.trim();
  const need = document.getElementById('msgNeed').value;
  const msg  = document.getElementById('msgInput').value.trim();

  // Validate — name and need are required
  if (!name) {
    document.getElementById('msgName').focus();
    document.getElementById('msgName').style.borderColor = 'var(--accent)';
    setTimeout(() => document.getElementById('msgName').style.borderColor = '', 1400);
    return;
  }
  if (!need) {
    document.getElementById('msgNeed').style.borderColor = 'var(--accent)';
    setTimeout(() => document.getElementById('msgNeed').style.borderColor = '', 1400);
    return;
  }

  // Build a clean, formatted message
  const formatted =
`Hey Dhruv!

Name: ${name}
I need: ${need}
${msg ? `\nDetails:\n${msg}` : ''}

Looking forward to hearing from you!`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(formatted)}`;
  window.open(url, '_blank');
}

// ── MOBILE MENU ──
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mobMenu').classList.toggle('open', menuOpen);
  const [b1,b2,b3] = ['b1','b2','b3'].map(id => document.getElementById(id));
  if (menuOpen) {
    b1.style.cssText = 'transform:translateY(6.5px) rotate(45deg)';
    b2.style.opacity = '0';
    b3.style.cssText = 'transform:translateY(-6.5px) rotate(-45deg)';
  } else {
    b1.style.cssText = b2.style.cssText = b3.style.cssText = '';
  }
}

// ════════════════════════════════════════════════
//  REVIEWS — Google Sheets via Apps Script
//  (Same backend the original site used. If this is your
//  own Google Sheet, it will keep working as-is. If not,
//  replace APPS_SCRIPT_URL with your own Apps Script
//  web-app URL that reads/writes a reviews sheet.)
// ════════════════════════════════════════════════

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxstYKeZMiZhYpjyenVKdJZdSHjSCAeZwFsIvKMfNkv0Kh3pUyFEJdxyAjGj0a5zMk/exec';

let selectedStars = 0;
let carouselIndex = 0;
let carouselReviews = [];

// ── Star picker ──
function initStarPicker() {
  const stars = document.querySelectorAll('#starPicker span');
  stars.forEach(s => {
    s.addEventListener('click', () => {
      selectedStars = parseInt(s.dataset.v);
      updateStarDisplay();
    });
    s.addEventListener('mouseenter', () => {
      const v = parseInt(s.dataset.v);
      stars.forEach(x => x.style.color = parseInt(x.dataset.v) <= v ? '#ff4500' : 'var(--line)');
    });
    s.addEventListener('mouseleave', updateStarDisplay);
  });
}

function updateStarDisplay() {
  document.querySelectorAll('#starPicker span').forEach(x => {
    x.classList.toggle('active', parseInt(x.dataset.v) <= selectedStars);
    x.style.color = '';
  });
}

function starsHTML(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }

function escapeHTML(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Carousel controls ──
function updateCarousel() {
  const track = document.getElementById('rvTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('rvPrev');
  const nextBtn = document.getElementById('rvNext');
  if (!track) return;

  const cardWidth = track.parentElement.offsetWidth;
  track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;

  const maxIndex = Math.max(0, carouselReviews.length - 1);
  if (prevBtn) prevBtn.disabled = carouselIndex === 0;
  if (nextBtn) nextBtn.disabled = carouselIndex >= maxIndex;

  dots.forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
}

function carouselPrev() {
  if (carouselIndex > 0) { carouselIndex--; updateCarousel(); }
}

function carouselNext() {
  const max = Math.max(0, carouselReviews.length - 1);
  if (carouselIndex < max) { carouselIndex++; updateCarousel(); }
}

window.addEventListener('resize', updateCarousel);

// ── Swipe support ──
function initSwipe() {
  const outer = document.getElementById('rvTrackOuter');
  if (!outer) return;
  let startX = 0;
  outer.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, {passive: true});
  outer.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? carouselNext() : carouselPrev(); }
  }, {passive: true});
}

function toggleReadMore(btn) {
  const textEl = btn.previousElementSibling;
  if (textEl.classList.contains('expanded')) {
    textEl.classList.remove('expanded');
    btn.textContent = 'Read more →';
  } else {
    textEl.classList.add('expanded');
    btn.textContent = '↑ Read less';
  }
}

// ── Load & display reviews ──
async function loadReviews() {
  const list = document.getElementById('rvTrack');
  const avgNum = document.getElementById('rvAvgNum');
  const avgStars = document.getElementById('rvAvgStars');
  const avgCount = document.getElementById('rvAvgCount');
  const dotsWrap = document.getElementById('rvDots');
  if (list) list.innerHTML = '<div class="reviews-loading">Loading reviews…</div>';

  try {
    const res = await fetch(APPS_SCRIPT_URL + '?action=get');
    const text = await res.text();
    // Strip JSONP wrapper if present
    let data;
    const match = text.match(/^[^(]+\((.+)\)$/s);
    if (match) {
      data = JSON.parse(match[1]);
    } else {
      data = JSON.parse(text);
    }

    if (!data.reviews || data.reviews.length === 0) {
      if (avgNum) avgNum.textContent = '—';
      if (avgStars) avgStars.textContent = '';
      if (avgCount) avgCount.textContent = 'No reviews yet';
      if (list) list.innerHTML = '<div class="reviews-empty"><div class="reviews-empty-icon">✦</div>Be the first to leave a review</div>';
      return;
    }

    const sort = document.getElementById('rvSort') ? document.getElementById('rvSort').value : 'newest';
    carouselReviews = [...data.reviews].sort((a, b) => {
      if (sort === 'highest') return b.stars - a.stars;
      if (sort === 'lowest')  return a.stars - b.stars;
      return new Date(b.date) - new Date(a.date);
    });

    // Aggregate
    const avg = carouselReviews.reduce((s, r) => s + Number(r.stars), 0) / carouselReviews.length;
    if (avgNum) avgNum.textContent = avg.toFixed(1);
    if (avgStars) avgStars.textContent = starsHTML(Math.round(avg));
    if (avgCount) avgCount.textContent = `${carouselReviews.length} review${carouselReviews.length > 1 ? 's' : ''}`;

    // Build cards
    if (list) {
      list.innerHTML = carouselReviews.map(r => {
        const initials = String(r.name).split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
        const d = new Date(r.date);
        const dateStr = isNaN(d) ? r.date : d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        return `<div class="review-card">
          <div class="review-card-top">
            <div class="review-author">
              <div class="review-avatar">${initials}</div>
              <div>
                <div class="review-name">${escapeHTML(r.name)}</div>
                <div class="review-service">${escapeHTML(r.service)}</div>
              </div>
            </div>
            <div class="review-stars-row">
              <span class="review-stars">${starsHTML(Number(r.stars))}</span>
              <span class="review-date">${dateStr}</span>
            </div>
          </div>
          <div class="review-text">${escapeHTML(r.text)}</div>
          ${String(r.text).length > 180 ? '<button class="read-more-btn" onclick="toggleReadMore(this)">Read more →</button>' : ''}
        </div>`;
      }).join('');
    }

    // Build dots
    if (dotsWrap) {
      dotsWrap.innerHTML = carouselReviews.map((_, i) =>
        `<button class="carousel-dot${i === 0 ? ' active' : ''}" onclick="carouselIndex=${i};updateCarousel()"></button>`
      ).join('');
    }

    carouselIndex = 0;
    setTimeout(updateCarousel, 50);
    initSwipe();

  } catch (err) {
    if (list) list.innerHTML = '<div class="reviews-empty"><div class="reviews-empty-icon">!</div>Could not load reviews.</div>';
    console.error('Reviews load error:', err);
  }
}

// ── Submit review ──
async function submitReview() {
  const name    = document.getElementById('rvName').value.trim();
  const service = document.getElementById('rvService').value;
  const text    = document.getElementById('rvText').value.trim();

  const highlight = el => {
    el.style.borderColor = 'var(--accent)';
    setTimeout(() => el.style.borderColor = '', 1400);
  };

  if (!name)    { highlight(document.getElementById('rvName'));    return; }
  if (!service) { highlight(document.getElementById('rvService')); return; }
  if (selectedStars === 0) {
    document.querySelectorAll('#starPicker span').forEach(s => {
      s.style.color = 'var(--accent)';
      setTimeout(() => { s.style.color = ''; updateStarDisplay(); }, 900);
    });
    return;
  }
  if (!text) { highlight(document.getElementById('rvText')); return; }

  const btn = document.querySelector('.review-submit-btn');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    const payload = { action: 'post', name, service, stars: selectedStars, text, date: new Date().toISOString().slice(0, 10) };
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    document.getElementById('rvName').value = '';
    document.getElementById('rvService').value = '';
    document.getElementById('rvText').value = '';
    selectedStars = 0;
    updateStarDisplay();

    const success = document.getElementById('rvSuccess');
    success.style.display = 'block';
    setTimeout(() => success.style.display = 'none', 3500);
    setTimeout(loadReviews, 2000);

  } catch (err) {
    alert('Could not submit. Check your connection.');
  } finally {
    btn.disabled = false;
    btn.innerHTML = '✓ Submit Review';
  }
}

function initReviews() {
  initStarPicker();
  loadReviews();
}

// ── INTERSECTION OBSERVER (scroll reveal) ──
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
}, { threshold: 0.08 });
// Mark JS as ready BEFORE observing — this enables the CSS opacity:0 hiding
document.documentElement.classList.add('js-ready');
document.querySelectorAll('.rev, .srv-card').forEach(el => io.observe(el));

// Init video portfolio on load
buildSidebar();
switchCat('shortform');

// Init reviews
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('msgInput').addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.ctrlKey) sendWhatsApp();
  });
  initReviews();
});
