import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function initI18n(lang = 'en') {
  await i18next
    .use(Backend)
    .init({
      lng: lang,
      fallbackLng: 'en',
      backend: {
        loadPath: path.resolve(__dirname, './locales/{{lng}}/{{ns}}.json'),
      },
      interpolation: {
        escapeValue: false,
      },
    });

  return i18next;
}
