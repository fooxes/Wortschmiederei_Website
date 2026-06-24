/* ============================================
   WORTSCHMIEDEREI — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------
     Sticky header on scroll
     ---------------------------------------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------
     Mobile navigation toggle
     ---------------------------------------- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && nav.classList.contains('open')) {
        toggle.classList.remove('open');
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ----------------------------------------
     Active nav link
     ---------------------------------------- */
  const currentPath = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-list a').forEach(link => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, '');
    if (linkPath === currentPath || (currentPath === '' && linkPath === '')) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------
     Logo carousel — duplicate for seamless loop
     ---------------------------------------- */
  const track = document.querySelector('.logo-track');
  if (track) {
    const items = track.innerHTML;
    track.innerHTML = items + items; // duplicate for seamless loop
  }

  /* ----------------------------------------
     Newsletter form — basic validation
     ---------------------------------------- */
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      if (email && email.includes('@')) {
        const btn = form.querySelector('button');
        const original = btn.textContent;
        btn.textContent = 'Danke! ✓';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          form.reset();
        }, 3000);
      }
    });
  });

  /* ----------------------------------------
     Contact form — basic validation & feedback
     ---------------------------------------- */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.textContent;

      btn.textContent = 'Wird gesendet...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Nachricht gesendet ✓';
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1000);
    });
  }

  /* ----------------------------------------
     Smooth entrance animations
     Content is visible by default; we only add a subtle
     fade-up when the element scrolls into view. We never
     leave anything permanently hidden (no JS = no problem).
     ---------------------------------------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !prefersReduced) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
      '.service-card, .process-step, .testimonial-card, .offer-card, .workshop-card, .step-card'
    ).forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  /* ----------------------------------------
     "Einfach mal machen" — YouTube video tabs
     Each tab shows a grid of video thumbnails; clicking a
     thumbnail plays that video inline.
     ---------------------------------------- */
  const videoTabs = document.querySelectorAll('.impulses .tag[role="tab"]');

  // Lazy-load thumbnails from YouTube and wire click-to-play
  document.querySelectorAll('.impulses .video-thumb').forEach(thumb => {
    const id = thumb.getAttribute('data-video');
    if (id) {
      thumb.style.backgroundImage = "url('https://i.ytimg.com/vi/" + id + "/hqdefault.jpg')";
    }
    thumb.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = 'YouTube-Video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      thumb.innerHTML = '';
      thumb.appendChild(iframe);
    });
  });

  if (videoTabs.length) {
    videoTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        videoTabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
          const p = document.getElementById(t.getAttribute('data-panel'));
          if (p) p.hidden = true;
        });
        tab.setAttribute('aria-selected', 'true');
        const panel = document.getElementById(tab.getAttribute('data-panel'));
        if (panel) panel.hidden = false;
      });
    });
  }

});
