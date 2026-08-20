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
//    videoUrl: "videos/my-clip.mp4",      // local file path, a full YouTube
//                                          // URL, or a Google Drive share link
//                                          // (all three work)
//    thumbnail: "",                       // ── THUMBNAIL IMAGE URL / GOOGLE DRIVE LINK ──
//                                          // Want a specific thumbnail? Paste an image
//                                          // URL or a Google Drive image share link here
//                                          // (e.g. https://drive.google.com/file/d/FILE_ID/view?usp=sharing —
//                                          // just share the image as "Anyone with the link").
//                                          // Leave "" to auto-preview instead:
//                                          //  - local mp4 -> silent looping preview
//                                          //  - YouTube link -> auto thumbnail
//                                          //  - Drive video link -> auto thumbnail
//    tools: ["Premiere Pro", "After Effects"]  // optional, shown as tags
//  }
//
//  FOR A YOUTUBE VIDEO (recommended — no file size limit, full quality):
//  Upload the video to YouTube as "Unlisted" (not Private), copy its link,
//  and paste it as videoUrl below. Leave title: "" — thumbnail AND title
//  both fill in automatically. It plays right here on your site in the
//  popup player, visitors never leave the page.
//
//  FOR A GOOGLE DRIVE VIDEO:
//  Upload the file to Drive, right-click -> Share -> set to "Anyone with
//  the link" (Viewer), then copy the link and paste it as videoUrl below.
//  It plays inline in the same popup player. Note: title does NOT
//  auto-fill from Drive (unlike YouTube) — type it in manually.
//
//  TO CHANGE JUST THE THUMBNAIL (no need to touch anything else):
//  Paste an image URL or Google Drive image share link into the
//  `thumbnail` field above — the design, sizing and card layout stay
//  exactly the same, only the picture changes.
//
//  Leave videoUrl "" to show a placeholder card reminding you
//  to fill it in later — nothing breaks, nothing needs redesigning.
//  New items appear automatically, no other code changes needed.
//
//  IF A GOOGLE DRIVE VIDEO LOOKS CROPPED IN THE POPUP:
//  Add aspectW / aspectH to that item with the video's real dimensions
//  (e.g. aspectW: 9, aspectH: 16 for a vertical phone video, or
//  aspectW: 16, aspectH: 9 for landscape). Drive's own preview player
//  crops instead of fitting when the box guess is even slightly off —
//  this tells it the exact shape so nothing gets cut off. Not needed
//  for YouTube links, which always fit correctly on their own.
// ════════════════════════════════════════════════
const VIDEOS = {
  shortform: {
    label: 'Short-Form & Reels', icon: 'bolt',
    items: [
      {
        title: 'Vertical Showreel Cut',
        tag: 'Instagram Reel',
        description: 'A fast-paced vertical edit built for retention — quick cuts, punchy pacing and a beat-synced rhythm.',
        videoUrl: 'https://drive.google.com/file/d/1RD-pS7RwvB3JuCeKIBlPNIrcR6v7UMAM/view?usp=drivesdk',
        // Most phones don't actually shoot true 9:16 — they shoot taller
        // (9:19.5 or 9:20), even though everyone calls it "9:16" by habit.
        // If this still crops, try aspectW: 9, aspectH: 20 next.
        aspectW: 9, aspectH: 19.5,
        thumbnail: '',
        tools: ['Premiere Pro', 'CapCut']
      },
      {
        title: 'Add Your Next Reel',
        tag: 'YouTube Short',
        description: 'Add a title, description and video path in script.js — it appears here automatically.',
        videoUrl: 'https://drive.google.com/file/d/1KtWIpcxaFUJdsAUx01fAZ3WwZksdpojC/view?usp=drivesdk',
        aspectW: 9, aspectH: 19.5, // try aspectW: 9, aspectH: 20 if this still crops
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

// Videos shown per carousel "page" — 2 on mobile/tablet, 3 on desktop (matches
// the .video-grid column-count breakpoint at 960px used elsewhere on the page).
function getPerPage() {
  return window.innerWidth > 960 ? 3 : 2;
}
let galleryPerPage = getPerPage();

// ── HELPERS: recognize YouTube / Google Drive links, build embed/thumbnail URLs ──
function getYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}
function getDriveId(url) {
  if (!url) return null;
  // Matches both share-link formats:
  //  https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  //  https://drive.google.com/open?id=FILE_ID
  const m = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)([A-Za-z0-9_-]{10,})/);
  return m ? m[1] : null;
}
function isLocalVideo(url) {
  return !!url && !getYouTubeId(url) && !getDriveId(url);
}

// Lets the `thumbnail` field accept a plain Google Drive share link
// (e.g. https://drive.google.com/file/d/FILE_ID/view?usp=sharing) and turns
// it into a directly-viewable image URL. Any other URL (local path or
// external image link) is used exactly as pasted.
function resolveThumbnail(url) {
  if (!url) return url;
  const did = getDriveId(url);
  return did ? `https://drive.google.com/thumbnail?id=${did}&sz=w1000` : url;
}

// ── AUTO-FETCH YOUTUBE TITLE + REAL ASPECT RATIO (oEmbed) ──
// Leave `title: ''` on any YouTube item in VIDEOS and this fills it in
// automatically from the YouTube link, so you only ever need to paste the URL.
// oEmbed also returns the real embed width/height, which gives an accurate
// aspect ratio (portrait Shorts vs. landscape videos) instead of guessing from the URL.
const ytMetaCache = {};
async function getYouTubeMeta(url) {
  const yid = getYouTubeId(url);
  if (!yid) return null;
  if (ytMetaCache[yid]) return ytMetaCache[yid];
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
    if (!res.ok) return null;
    const data = await res.json();
    const meta = { title: data.title, width: data.width, height: data.height };
    ytMetaCache[yid] = meta;
    return meta;
  } catch (e) {
    return null;
  }
}

// ── REAL VIDEO ASPECT RATIO CACHE ──
// Captures each video's true width/height (from its own file, its YouTube
// oEmbed data, or its Drive-generated thumbnail frame) so the popup player
// can size itself to the exact original shape — vertical stays vertical,
// horizontal stays horizontal, nothing is cropped or force-fit.
const videoRatioCache = {};
function cacheRatio(url, w, h) {
  if (!url || !w || !h) return;
  videoRatioCache[url] = { w, h };
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
    thumbInner = `<img src="${resolveThumbnail(item.thumbnail)}" alt="${item.title}" loading="lazy">`;
  } else if (hasVideo && isLocalVideo(item.videoUrl)) {
    thumbInner = `<video src="${item.videoUrl}" autoplay muted loop playsinline></video>`;
  } else if (hasVideo && getYouTubeId(item.videoUrl)) {
    const yid = getYouTubeId(item.videoUrl);
    thumbInner = `<img src="https://img.youtube.com/vi/${yid}/hqdefault.jpg" alt="${item.title}" loading="lazy">`;
  } else if (hasVideo && getDriveId(item.videoUrl)) {
    const did = getDriveId(item.videoUrl);
    thumbInner = `<img src="https://drive.google.com/thumbnail?id=${did}&sz=w640" alt="${item.title}" loading="lazy">`;
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
    </div>
    <div class="video-info">
      <div class="video-title">${item.title || (hasVideo && getYouTubeId(item.videoUrl) ? 'Loading title…' : '')}</div>
      <div class="video-desc">${item.description || ''}</div>
      ${item.tools && item.tools.length ? `<div class="video-tools">${item.tools.map(t => `<span class="video-tool-tag">${t}</span>`).join('')}</div>` : ''}
    </div>`;

  if (hasVideo) {
    el.addEventListener('click', () => {
      // Drive's embedded preview player crops non-standard aspect ratios no
      // matter what box size we give it — there's no reliable fix for that
      // from our side. So Drive videos open directly on drive.google.com in
      // a new tab instead, where Google's own full player shows them correctly.
      const did = getDriveId(item.videoUrl);
      if (did) {
        window.open(`https://drive.google.com/file/d/${did}/view`, '_blank', 'noopener');
        return;
      }
      openVideoModal(item, data.label);
    });
  }

  // If it's a YouTube link with no title typed in, fetch the real title +
  // real aspect ratio automatically (also caches both onto the item so the
  // modal shows the correct title/shape without re-fetching).
  if (hasVideo && getYouTubeId(item.videoUrl)) {
    getYouTubeMeta(item.videoUrl).then(meta => {
      if (!meta) return;
      if (meta.title && !item.title) {
        item.title = meta.title;
        const titleEl = el.querySelector('.video-title');
        if (titleEl) titleEl.textContent = meta.title;
      }
      if (meta.width && meta.height) {
        cacheRatio(item.videoUrl, meta.width, meta.height);
        applyRatio(meta.width, meta.height);
      }
    });
  }

  // ── DYNAMIC ASPECT RATIO ──
  // Reads the real width/height once known and sizes the thumbnail box to
  // match — vertical (9:16-ish) footage gets a tall box, horizontal
  // (16:9-ish) footage gets a wide box. Also cached for the popup player.
  const thumbWrap = el.querySelector('.video-thumb-wrap');
  const applyRatio = (w, h) => {
    if (!w || !h || !thumbWrap) return;
    thumbWrap.style.aspectRatio = `${w} / ${h}`;
    if (hasVideo) cacheRatio(item.videoUrl, w, h);
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
  } else if (hasVideo && getDriveId(item.videoUrl)) {
    // Drive thumbnail is a real frame from the video, so its natural size
    // (portrait or landscape) accurately reflects the video's own shape.
    const driveImgEl = el.querySelector('.video-thumb-wrap img');
    if (driveImgEl) {
      if (driveImgEl.complete && driveImgEl.naturalWidth) {
        applyRatio(driveImgEl.naturalWidth, driveImgEl.naturalHeight);
      } else {
        driveImgEl.addEventListener('load', () => applyRatio(driveImgEl.naturalWidth, driveImgEl.naturalHeight));
      }
    }
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
  document.getElementById('galSub').textContent = data.items.length > galleryPerPage
    ? `${data.items.length} videos — swipe for more`
    : `${data.items.length} video${data.items.length === 1 ? '' : 's'}`;
  buildVideoGrid(data, cat);
}

// ── BUILD VIDEO GRID as a swipeable carousel of pages ──
// 2 videos per page on mobile/tablet, 3 per page on desktop (getPerPage()).
// Replaces the old "Show More" pagination: every video in the category is
// still here, just reached by swiping (mobile) or the arrow buttons (desktop).
let galleryIndex = 0;
let galleryPageCount = 1;

function buildVideoGrid(data, cat) {
  const track = document.getElementById('galGridTrack');
  track.innerHTML = '';

  galleryPerPage = getPerPage();
  const pages = [];
  for (let i = 0; i < data.items.length; i += galleryPerPage) {
    pages.push(data.items.slice(i, i + galleryPerPage));
  }
  if (pages.length === 0) pages.push([]);

  pages.forEach((pageItems) => {
    const pageEl = document.createElement('div');
    pageEl.className = 'video-grid-page video-grid';
    pageItems.forEach((item) => {
      const el = buildVideoCard(item, data);
      pageEl.appendChild(el);
      el.classList.add('vis');
      io.observe(el);
    });
    track.appendChild(pageEl);
  });

  galleryPageCount = pages.length;
  galleryIndex = 0;

  const navControls = document.getElementById('galNavControls');
  if (navControls) navControls.style.display = galleryPageCount > 1 ? 'flex' : 'none';

  updateGalleryTrack();
}

// ── SWIPEABLE / CLICKABLE CAROUSEL CONTROLS ──
function updateGalleryTrack() {
  const track = document.getElementById('galGridTrack');
  const outer = document.getElementById('galGridOuter');
  if (!track || !outer) return;
  track.style.transform = `translateX(-${galleryIndex * outer.offsetWidth}px)`;

  const prevBtn = document.getElementById('galPrevBtn');
  const nextBtn = document.getElementById('galNextBtn');
  if (prevBtn) prevBtn.disabled = galleryIndex === 0;
  if (nextBtn) nextBtn.disabled = galleryIndex >= galleryPageCount - 1;
}

function galleryNext() {
  if (galleryIndex < galleryPageCount - 1) {
    galleryIndex++;
    updateGalleryTrack();
  } else {
    galleryEdgeBounce('end');
  }
}

function galleryPrev() {
  if (galleryIndex > 0) {
    galleryIndex--;
    updateGalleryTrack();
  } else {
    galleryEdgeBounce('start');
  }
}

// Subtle "can't go further" feedback at the first/last page instead of breaking the layout
function galleryEdgeBounce(dir) {
  const track = document.getElementById('galGridTrack');
  const outer = document.getElementById('galGridOuter');
  if (!track || !outer) return;
  const base = -galleryIndex * outer.offsetWidth;
  const nudge = dir === 'end' ? -16 : 16;
  track.style.transform = `translateX(${base + nudge}px)`;
  setTimeout(() => { track.style.transform = `translateX(${base}px)`; }, 180);
}

// ── SWIPE / TOUCH SUPPORT (bound once — the outer element persists across category switches) ──
function initGallerySwipe() {
  const outer = document.getElementById('galGridOuter');
  if (!outer || outer.dataset.swipeInit) return;
  outer.dataset.swipeInit = '1';
  let startX = 0, startY = 0, tracking = false;

  outer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    tracking = true;
  }, { passive: true });

  outer.addEventListener('touchend', (e) => {
    if (!tracking) return;
    tracking = false;
    const diffX = startX - e.changedTouches[0].clientX;
    const diffY = startY - e.changedTouches[0].clientY;
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      diffX > 0 ? galleryNext() : galleryPrev();
    }
  }, { passive: true });
}

// ── DESKTOP PREV/NEXT ARROW BUTTONS (bound once) ──
function initGalleryNav() {
  const prevBtn = document.getElementById('galPrevBtn');
  const nextBtn = document.getElementById('galNextBtn');
  if (prevBtn && !prevBtn.dataset.navInit) {
    prevBtn.dataset.navInit = '1';
    prevBtn.addEventListener('click', galleryPrev);
  }
  if (nextBtn && !nextBtn.dataset.navInit) {
    nextBtn.dataset.navInit = '1';
    nextBtn.addEventListener('click', galleryNext);
  }
}

// On resize: if crossing the mobile/desktop breakpoint changes how many
// videos fit per page (2 vs 3), rebuild the pages; otherwise just reposition.
let galleryResizeRAF = null;
window.addEventListener('resize', () => {
  if (galleryResizeRAF) return;
  galleryResizeRAF = requestAnimationFrame(() => {
    galleryResizeRAF = null;
    if (getPerPage() !== galleryPerPage) {
      buildVideoGrid(VIDEOS[activeCat], activeCat);
    } else {
      updateGalleryTrack();
    }
  });
});

// ── VIDEO MODAL (player) ──
// Sizes the player box to the video's real aspect ratio — using cached
// dimensions when known (from the card's own preview), refining them once
// the exact source confirms it (YouTube oEmbed / Drive thumbnail frame /
// the local <video> element's own metadata). Nothing is cropped or forced
// into a fixed shape: vertical stays vertical, horizontal stays horizontal.
function sizeModalPlayer(w, h) {
  const player = document.getElementById('videoModalPlayer');
  if (!player || !w || !h) return;
  const maxW = Math.min(560, window.innerWidth * 0.88);
  const maxH = window.innerHeight * 0.58;
  let width = maxW;
  let height = width * (h / w);
  if (height > maxH) {
    height = maxH;
    width = height * (w / h);
  }
  player.style.width = width + 'px';
  player.style.height = height + 'px';
  player.style.aspectRatio = `${w} / ${h}`;
}

let modalRatio = null;
window.addEventListener('resize', () => {
  if (modalRatio && document.getElementById('videoModal').classList.contains('open')) {
    sizeModalPlayer(modalRatio.w, modalRatio.h);
  }
});

function openVideoModal(item, fallbackTag) {
  const player = document.getElementById('videoModalPlayer');
  const title = document.getElementById('videoModalTitle');
  const tag = document.getElementById('videoModalTag');
  const desc = document.getElementById('videoModalDesc');
  const tools = document.getElementById('videoModalTools');

  const yid = getYouTubeId(item.videoUrl);
  const did = getDriveId(item.videoUrl);

  // Start from whatever ratio is already known (from the card thumbnail),
  // then refine it once the exact source confirms the real dimensions.
  const cached = videoRatioCache[item.videoUrl];
  modalRatio = cached || { w: 16, h: 9 };
  sizeModalPlayer(modalRatio.w, modalRatio.h);

  if (yid) {
    // youtube-nocookie.com + modestbranding/rel/iv_load_policy/fs=0/disablekb/enablejsapi=0
    // minimizes YouTube's own UI (logo, related videos, fullscreen handoff) so the
    // video plays inline on this page instead of handing off to the YouTube app.
    player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${yid}?autoplay=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&enablejsapi=0&controls=1" title="${item.title || 'video'}" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    if (!cached) {
      getYouTubeMeta(item.videoUrl).then(meta => {
        if (meta && meta.width && meta.height) {
          cacheRatio(item.videoUrl, meta.width, meta.height);
          modalRatio = { w: meta.width, h: meta.height };
          sizeModalPlayer(meta.width, meta.height);
        }
      });
    }
  } else if (did) {
    // Google Drive's own inline player — requires the file to be shared as
    // "Anyone with the link can view", otherwise it shows an access-denied screen.
    //
    // IMPORTANT: unlike YouTube, Drive's preview player does NOT letterbox —
    // if the box we give it doesn't exactly match the video's real shape, it
    // crops the picture to fill instead of fitting it. Drive's own thumbnail
    // endpoint isn't reliable for detecting that real shape, so if you see
    // cropping, set `aspectW`/`aspectH` on the video item in VIDEOS (below)
    // to the video's true dimensions (e.g. aspectW: 9, aspectH: 16 for a
    // vertical phone-shot clip) and that will be used instead of guessing.
    player.innerHTML = `<iframe src="https://drive.google.com/file/d/${did}/preview" title="${item.title || 'video'}" allow="autoplay" allowfullscreen></iframe>`;
    if (item.aspectW && item.aspectH) {
      cacheRatio(item.videoUrl, item.aspectW, item.aspectH);
      modalRatio = { w: item.aspectW, h: item.aspectH };
      sizeModalPlayer(item.aspectW, item.aspectH);
    } else if (!cached) {
      // Probe the Drive-generated thumbnail frame to learn the video's real shape.
      // Best-effort only — see note above if this guesses wrong.
      const probe = new Image();
      probe.onload = () => {
        if (!probe.naturalWidth || !probe.naturalHeight) return;
        cacheRatio(item.videoUrl, probe.naturalWidth, probe.naturalHeight);
        modalRatio = { w: probe.naturalWidth, h: probe.naturalHeight };
        sizeModalPlayer(probe.naturalWidth, probe.naturalHeight);
      };
      probe.onerror = () => {
        // Thumbnail probe failed — fall back to a safe vertical-reel guess
        // rather than leaving the wrong default 16:9 box (which is what
        // causes the worst cropping for portrait Shorts/Reels clips).
        cacheRatio(item.videoUrl, 9, 16);
        modalRatio = { w: 9, h: 16 };
        sizeModalPlayer(9, 16);
      };
      probe.src = `https://drive.google.com/thumbnail?id=${did}&sz=w1000`;
    }
  } else {
    player.innerHTML = `<video src="${item.videoUrl}" controls autoplay playsinline></video>`;
    const vEl = player.querySelector('video');
    if (vEl && !cached) {
      vEl.addEventListener('loadedmetadata', () => {
        if (!vEl.videoWidth || !vEl.videoHeight) return;
        cacheRatio(item.videoUrl, vEl.videoWidth, vEl.videoHeight);
        modalRatio = { w: vEl.videoWidth, h: vEl.videoHeight };
        sizeModalPlayer(vEl.videoWidth, vEl.videoHeight);
      });
    }
  }

  title.textContent = item.title || (yid ? 'Loading title…' : '');
  tag.textContent = item.tag || fallbackTag || '';
  desc.textContent = item.description || '';
  tools.innerHTML = (item.tools || []).map(t => `<span class="video-tool-tag">${t}</span>`).join('');

  document.getElementById('videoModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Auto-fill the modal title too if it hasn't been fetched yet
  if (yid && !item.title) {
    getYouTubeMeta(item.videoUrl).then(meta => {
      if (meta && meta.title) {
        item.title = meta.title;
        title.textContent = meta.title;
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
initGallerySwipe();
initGalleryNav();

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('msgInput').addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.ctrlKey) sendWhatsApp();
  });
});

