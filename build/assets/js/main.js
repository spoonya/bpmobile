const supportedLocales = ['de', 'en', 'es', 'fr', 'ja', 'pt'];
const DEFAULT_LOCALE = 'en';
const LOCALE_DATA_ATTR = 'data-i18n';
const LOCALES_URL = 'assets/data/i18n';

function getUserLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');

  if (langParam && supportedLocales.includes(langParam)) {
    return langParam;
  }

  const systemLang = navigator.language.slice(0, 2);

  return supportedLocales.includes(systemLang) ? systemLang : DEFAULT_LOCALE;
}

async function loadLocalization(lang) {
  try {
    const response = await fetch(`${LOCALES_URL}/${lang}.json`);
    const translations = await response.json();

    applyTranslations(translations);
  } catch (error) {
    console.error('Error loading localization:', error);
  }
}

function applyTranslations(translations) {
  const elementsToTranslate = document.querySelectorAll(`[${LOCALE_DATA_ATTR}]`);

  elementsToTranslate.forEach(element => {
    const key = element.getAttribute(LOCALE_DATA_ATTR);
    const rawTranslation = translations[key];

    if (rawTranslation) {
      const processedText = replacePlaceholders(rawTranslation, {
        price: element.getAttribute('data-price') || ''
      });

      element.insertAdjacentHTML('afterbegin', processedText);
    }
  });
}

function replacePlaceholders(text, placeholders) {
  return text.replace(/{{(.*?)}}/g, (_, key) => placeholders[key] || '');
}

function initLocale() {
  const userLang = getUserLanguage();

  loadLocalization(userLang);
}

initLocale();
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
