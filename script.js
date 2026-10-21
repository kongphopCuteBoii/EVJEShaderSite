(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.querySelector('span').textContent = open ? '−' : '＋';
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false');
      menuButton.querySelector('span').textContent = '＋';
    }));
  }

  document.querySelectorAll('[data-compare]').forEach(frame => {
    const range = frame.querySelector('.compare-range');
    const overlay = frame.querySelector('.compare-overlay');
    const divider = frame.querySelector('.compare-divider');
    const setPosition = value => {
      frame.style.setProperty('--compare-width', `${value}%`);
      overlay.style.width = `${value}%`;
      divider.style.left = `${value}%`;
      overlay.querySelector('img').style.width = `${frame.clientWidth}px`;
      overlay.querySelector('img').style.height = `${frame.clientHeight}px`;
    };
    range.addEventListener('input', () => setPosition(range.value));
    window.addEventListener('resize', () => setPosition(range.value), { passive: true });
    setPosition(range.value);
  });

  const dialog = document.querySelector('.lightbox');
  if (dialog) {
    const dialogImage = dialog.querySelector('img');
    const dialogCaption = dialog.querySelector('p');
    document.querySelectorAll('.image-open').forEach(button => button.addEventListener('click', () => {
      dialogImage.src = button.dataset.image;
      dialogImage.alt = button.querySelector('img').alt;
      dialogCaption.textContent = button.dataset.caption || '';
      dialog.showModal();
    }));
    dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  }

  const revealTargets = document.querySelectorAll('.intro-copy,.intro-note,.section-heading,.shot,.compare-block,.comparison-pair,.notes-main,.cerulean-content,.download-copy');
  revealTargets.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealTargets.forEach(el => observer.observe(el));
  } else revealTargets.forEach(el => el.classList.add('is-visible'));
})();
