calcWindowVh();
useResizeDebounce(calcWindowVh, 200);
controlSubscriptionOptions();

function controlSubscriptionOptions() {
  const subscriptionOptions = document.querySelectorAll('.js_subscrip-option');
  const continueButton = document.querySelector('.js_subscrip-continue');

  continueButton.addEventListener('click', () => {
    const selectedOption = [...subscriptionOptions].find(option => option.checked);

    if (selectedOption) {
      const url = selectedOption.value;
      window.location.href = url;
    } else {
      console.error('No subscription option selected.');
    }
  });
}

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

function useResizeDebounce(func, delay) {
  const debouncedResize = debounce(() => {
    func();
  }, delay);

  window.addEventListener('resize', debouncedResize);

  return () => {
    window.removeEventListener('resize', debouncedResize);
  };
}
