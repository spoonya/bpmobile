
function calcWindowVh() {
  const vh = Math.ceil(window.innerHeight * 0.01);

  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
