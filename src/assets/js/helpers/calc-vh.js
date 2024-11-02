export function calcWindowVh() {
  const vh = Math.ceil(window.innerHeight * 0.01);

  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
