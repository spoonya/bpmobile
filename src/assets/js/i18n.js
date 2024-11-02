import { supportedLocales, DEFAULT_LOCALE, LOCALE_DATA_ATTR, LOCALES_URL } from './constants.js';

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

export function initLocale() {
  const userLang = getUserLanguage();

  loadLocalization(userLang);
}
