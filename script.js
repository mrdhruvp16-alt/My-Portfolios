const ICONS = {
  tshirt:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/></svg>`,
  website: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  book:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
};

// ════════════════════════════════════════════════
//  WARDROBE DATA — 6 images per category
// ════════════════════════════════════════════════
const WARDROBE = {
  tshirt: {
    label: 'Clothes', icon: 'tshirt',
    images: [
      { src: 'images/dhruv.png', title: 'loveisHate' },
      { src: 'images/dhruv1.png', title: 'lastRide'},
      { src: 'images/dhruv2.png', title: 'Void Tee' },
      { src: 'images/dhruv3.png', title: 'Atlas Fit' },
      { src: 'images/dhruv4.png', title: 'Night Run' },
      { src: 'images/dhruv5.png', title: 'Ember Logo' },
    ]
  },
  website: {
    label: 'Website Design', icon: 'website',
    images: [
      { src: 'https://picsum.photos/seed/wb1/400/', title: 'Nature Site',      siteUrl: 'subcode/site1-nature-1.html' },
      { src: 'https://picsum.photos/seed/wb2/400/500', title: 'Perfume Site',  siteUrl: 'subcode/site2-perfume.html' },
      { src: 'https://picsum.photos/seed/wb3/400/500', title: 'Agency Site',   siteUrl: 'subcode/site3-agency.html' },
      { src: 'https://picsum.photos/seed/wb4/400/500', title: 'AI Site',       siteUrl: 'subcode/site4-ai.html' },
      { src: 'https://picsum.photos/seed/wb5/400/500', title: 'Restaurant',    siteUrl: 'subcode/site5-restaurant.html' },
      { src: 'https://picsum.photos/seed/wb6/400/500', title: 'Fashion Site',  siteUrl: 'subcode/site6-fashion.html' },
    ]
  },
  book: {
    label: 'Book Design', icon: 'book',
    images: [
      { src: 'images/book.jpg', title: 'hateyou' },
      { src: 'images/book2.png', title: 'love4you' },
      { src: 'images/book3.png', title: 'romu' },
      { src: 'images/book4.png', title: 'coffee' },
      { src: 'images/book5.png', title: 'lastnight' },
      { src: 'images/book6.png', title: 'withyou' },
    ]
  },
};

let activeCat = 'tshirt';

// ── BUILD SIDEBAR ──
function buildSidebar() {
  const sidebar = document.getElementById('workSidebar');
  const label = document.createElement('div');
  label.className = 'sidebar-label';
  label.textContent = 'Categories';
  sidebar.appendChild(label);

  Object.entries(WARDROBE).forEach(([key, data]) => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (key === activeCat ? ' active' : '');
    btn.dataset.cat = key;
    btn.innerHTML = `
      <span class="cat-icon">${ICONS[data.icon]}</span>
      <span class="cat-info">
        <span class="cat-name">${data.label}</span>
        <span class="cat-count">${data.images.length} designs</span>
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
  const data = WARDROBE[cat];
  document.getElementById('galTitle').textContent = data.label;
  document.getElementById('galSub').textContent = `Showing ${data.images.length} designs — 3 × 2`;
  buildGallery(data);
}

// ── BUILD GALLERY (3×2 = 6 items) ──
function buildGallery(data) {
  const grid = document.getElementById('galGrid');
  grid.innerHTML = '';

  data.images.slice(0, 6).forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'g-item';

    const hasImg = item.src && item.src !== '';
    const isSite = !!item.siteUrl;

    if (isSite) {
      el.innerHTML = `
        <div class="g-site-card">
          <div class="g-site-num">0${i + 1}</div>
          <div class="g-site-content">
            <div class="g-site-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <div class="g-site-name">${item.title}</div>
            <div class="g-site-tag">Website Design</div>
          </div>
          <div class="g-site-arrow">↗</div>
        </div>`;
      el.addEventListener('click', () => openSiteViewer(item.siteUrl, item.title));
    } else if (hasImg) {
      el.innerHTML = `<img class="g-img" src="${item.src}" alt="${item.title}" loading="lazy">
         <div class="g-overlay">
           <div class="g-name">${item.title}</div>
           <div class="g-sub">${data.label}</div>
         </div>`;
      el.addEventListener('click', () => openLB(item.src, item.title));
    } else {
      el.innerHTML = `<div class="g-ph">
           <div class="g-ph-icon">${ICONS[data.icon]}</div>
           <div class="g-ph-label">Design ${i + 1}<br>Add image in code</div>
         </div>
         <div class="g-overlay">
           <div class="g-name">${item.title}</div>
           <div class="g-sub">${data.label}</div>
         </div>`;
    }

    grid.appendChild(el);

    // Always mark visible; observer adds class for animated entry if js-ready
    el.classList.add('vis');
    io.observe(el);
  });
}

// ── LIGHTBOX ──
function openLB(src, title) {
  document.getElementById('lbImg').src = src;
  document.getElementById('lbTitle').textContent = title;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLB() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeLB(); closeSiteViewer(); } });

// ── SITE VIEWER ──
function openSiteViewer(url, title) {
  document.getElementById('svIframe').src = url;
  document.getElementById('svTitle').textContent = title;
  document.getElementById('siteViewer').classList.add('open');
  document.getElementById('app').style.overflow = 'hidden';
}
function closeSiteViewer() {
  document.getElementById('siteViewer').classList.remove('open');
  document.getElementById('svIframe').src = '';
  document.getElementById('app').style.overflow = '';
}

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

// Allow Ctrl+Enter to send from textarea
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
// ════════════════════════════════════════════════

const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';

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

// ── Load & display reviews ──
async function loadReviews() {
  const list = document.getElementById('rvTrack');
  const avgNum = document.getElementById('rvAvgNum');
  const avgStars = document.getElementById('rvAvgStars');
  const avgCount = document.getElementById('rvAvgCount');
  const dotsWrap = document.getElementById('rvDots');

  if (list) list.innerHTML = '<div class="reviews-loading">Loading reviews…</div>';

  try {
    const res = await fetch(APPS_SCRIPT_URL + '?action=get', { method: 'GET' });
    const data = await res.json();

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
    const list = document.getElementById('rvTrack');
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

// Init gallery on load
buildSidebar();
switchCat('tshirt');

// Init reviews
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('msgInput').addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.ctrlKey) sendWhatsApp();
  });
  initReviews();
});
