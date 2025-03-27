let currentPage = 'home';

  function navigateTo(pageId) {
    if (currentPage === pageId) return; 
    const current = document.getElementById(currentPage);
    const next = document.getElementById(pageId);

    if (current) {
      current.classList.add('slide-out'); 
      setTimeout(() => {
        current.classList.remove('active', 'slide-out');
        current.style.display = 'none';
      }, 1000);
    }

    if (next) {
      next.style.display = 'block';
      setTimeout(() => {
        next.classList.add('active'); 
      }, 1000);
    }

    currentPage = pageId; 
  }

  window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.replace('#', '') || 'home';
    navigateTo(pageId);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const pageId = window.location.hash.replace('#', '') || 'home';
    navigateTo(pageId);
  });