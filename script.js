const downloadConfig = {
  url: 'downloads/dream-league-live.apk',
  version: '2.3.1',
  size: '64 MB',
  android: '8.0+'
};

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const revealElements = document.querySelectorAll('.reveal');
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
    const offset = element.getBoundingClientRect().top;
    if (offset < viewportHeight - 120) {
      element.classList.add('visible');
    }
  });
}

function setCurrentYear() {
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
}

navToggle?.addEventListener('click', handleNavToggle);
window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', () => {
  updateDownloadInfo();
  setCurrentYear();
  handleScrollReveal();
});
