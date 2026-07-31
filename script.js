// 1. Dark Mode / Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Set tema awal jika ada di local storage
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeToggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

themeToggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggleBtn.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.textContent = '☀️';
  }
});

// 2. Filter Kategori Proyek
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Hilangkan class active dari semua button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});