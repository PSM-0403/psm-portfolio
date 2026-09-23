// =========================================================
// Portfolio interactions
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  initReveal();
  initNavScroll();
  initMobileMenu();
  initTilt();
  initCursorGlow();
  initEmailCopy();
  initBackToTop();
  initScrollSpy();
  initSkillTooltips();
  initLightbox();
});

// ---------------------------------------------------------
// Reveal-on-scroll + scroll progress bar
// ---------------------------------------------------------
function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  const progressBar = document.getElementById('progressBar');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 40);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(t => io.observe(t));

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// ---------------------------------------------------------
// Nav background on scroll
// ---------------------------------------------------------
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ---------------------------------------------------------
// Mobile menu toggle
// ---------------------------------------------------------
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

// ---------------------------------------------------------
// Scroll-spy for active nav link
// ---------------------------------------------------------
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  if (!sections.length || !links.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(s => io.observe(s));
}

// ---------------------------------------------------------
// Tilt effect on project cards
// ---------------------------------------------------------
function initTilt() {
  const cards = document.querySelectorAll('.tilt');
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (isTouch) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ---------------------------------------------------------
// Cursor glow follow
// ---------------------------------------------------------
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  const isTouch = window.matchMedia('(hover: none)').matches;
  if (isTouch) { glow.style.display = 'none'; return; }

  window.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  }, { passive: true });
}

// ---------------------------------------------------------
// Copy email to clipboard
// ---------------------------------------------------------
function initEmailCopy() {
  document.querySelectorAll('.email-copy').forEach(btn => {
    const hint = btn.querySelector('.copy-hint');
    const emailText = btn.querySelector('.email-text');
    if (!hint || !emailText) return;

    btn.addEventListener('click', async () => {
      const email = emailText.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        hint.textContent = '복사됨!';
        hint.classList.add('copied');
      } catch {
        hint.textContent = '복사 실패, 직접 복사해주세요';
      }
      setTimeout(() => {
        hint.textContent = '클릭해서 복사';
        hint.classList.remove('copied');
      }, 1800);
    });
  });
}

// ---------------------------------------------------------
// Skill tag tooltips (tap-to-toggle for touch devices)
// ---------------------------------------------------------
function initSkillTooltips() {
  const tags = document.querySelectorAll('.skill-tag');
  if (!tags.length) return;

  tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
      const wasActive = tag.classList.contains('active');
      tags.forEach(t => t.classList.remove('active'));
      if (!wasActive) tag.classList.add('active');
      e.stopPropagation();
    });
  });

  document.addEventListener('click', () => {
    tags.forEach(t => t.classList.remove('active'));
  });
}

// ---------------------------------------------------------
// Lightbox for project screenshots
// ---------------------------------------------------------
function initLightbox() {
  const figures = document.querySelectorAll('.pd-shot');
  if (!figures.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button class="lightbox-close" aria-label="닫기">✕</button><div class="lightbox-stack"></div>';
  document.body.appendChild(overlay);

  const stack = overlay.querySelector('.lightbox-stack');
  const closeBtn = overlay.querySelector('.lightbox-close');

  function open(images) {
    stack.innerHTML = '';
    images.forEach(img => {
      const clone = document.createElement('img');
      clone.className = 'lightbox-img';
      clone.src = img.src;
      clone.alt = img.alt || '';
      stack.appendChild(clone);
    });
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  figures.forEach(figure => {
    const images = Array.from(figure.querySelectorAll('img'));
    images.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => open(images));
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === closeBtn) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

// ---------------------------------------------------------
// Back to top button
// ---------------------------------------------------------
function initBackToTop() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
