import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


i18next
	.use(HttpBackend)
	.use(LanguageDetector) // detect from localStorage, navigator, etc.
	.init({
		supportedLngs: ['en', 'fr', 'es'], // allows i18next to pick the best match from the list of detected languages
		// lng: "en", // default language
		fallbackLng: "en", // fallback
		debug: true, // logs loading process in console
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json", // path to JSON files
		},
		detection: {
			// order of detection
			order: ["navigator", "localStorage"],

			// where to save the language
			caches: ["localStorage"],
		},
		interpolation: {
			escapeValue: false
		},
	});

export default i18next;
