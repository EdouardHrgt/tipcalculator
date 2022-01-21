// Mode Sombre / Clair
const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');
const main = document.querySelector('main');
const title = document.querySelector('.mode-test');

darkMode.addEventListener('click', () => {
  main.classList = 'dark-active';
  title.classList = 'dark-active';
});

lightMode.addEventListener('click', () => {
  main.classList.remove('dark-active');
  title.classList.remove('dark-active');
});
