// Dynamic translations works during build: Uses embedded JSON imports
// Embeds all translations directly into the bundle, so Astro’s static build can pre-render everything
import i18next from 'i18next';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import es from './locales/es/translation.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
};

export async function initI18n(lang = 'en') {
  if (i18next.isInitialized) {
    i18next.changeLanguage(lang);
  } else {
    await i18next.init({
      resources, // Embeds all translations directly into the bundle, so Astro’s static build can pre-render everything
      lng: lang,
      fallbackLng: 'en', // Default language
      interpolation: { escapeValue: false },
    });
  }

  return i18next;
}
