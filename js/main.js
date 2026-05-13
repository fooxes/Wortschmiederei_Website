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
     ---------------------------------------- */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
      '.challenge-card, .service-card, .process-step, .testimonial-card, .offer-card, .workshop-card, .step-card'
    ).forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
      observer.observe(el);
    });

    document.addEventListener('animationstart', (e) => {
      if (e.target.classList.contains('visible')) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
      }
    });

    // Trigger visible class
    const styleSheet = document.createElement('style');
    styleSheet.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
    document.head.appendChild(styleSheet);
  }

});
