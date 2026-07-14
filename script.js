const downloadConfig = {
  url: 'downloads/dream-league-live.apk',
  version: '2.3.1',
  size: '64 MB',
  android: '8.0+'
};

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const revealElements = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-count]');
const currentYear = document.getElementById('current-year');
const downloadButton = document.getElementById('download-button');

function updateDownloadInfo() {
  document.getElementById('apk-version').textContent = downloadConfig.version;
  document.getElementById('apk-size').textContent = downloadConfig.size;
  document.getElementById('apk-android').textContent = downloadConfig.android;
  downloadButton.href = downloadConfig.url;
}

function handleNavToggle() {
  siteNav.classList.toggle('open');
}

function handleScrollReveal() {
  const viewportHeight = window.innerHeight;
  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < viewportHeight - 120) {
      element.classList.add('visible');
    }
  });
}

function animateCounters() {
  counters.forEach((counter) => {
    if (counter.dataset.animated) return;
    const parent = counter.closest('.reveal');
    if (parent && !parent.classList.contains('visible')) return;
    const target = Number(counter.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
        counter.dataset.animated = 'true';
        clearInterval(interval);
      } else {
        counter.textContent = current;
      }
    }, 25);
  });
}

function setCurrentYear() {
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
}

navToggle?.addEventListener('click', handleNavToggle);
window.addEventListener('scroll', () => {
  handleScrollReveal();
  animateCounters();
});
window.addEventListener('load', () => {
  updateDownloadInfo();
  setCurrentYear();
  handleScrollReveal();
  animateCounters();
});
