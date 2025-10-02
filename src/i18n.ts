import i18next from "i18next";
import HttpBackend from "i18next-http-backend";

i18next
	.use(HttpBackend)
	.init({
		lng: "en",            // default language
		fallbackLng: "en",    // fallback
		interpolation: {
			escapeValue: false
		},
		debug: true, // logs loading process in console
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json", // path to JSON files
		},
		resources: {
			en: {
				translation: {
					key1: "Hello World",
					key2: "english",
					welcome: "Welcome",
					hello: "Hello World"
				}
			},
			es: {
				translation: {
					key1: "Hola Mundo",
					key2: "español"
				}
			},
			fr: {
				translation: {
					key1: "Bonjour Monde",
					key2: "français",
					welcome: "Bienvenue",
					hello: "Bonjour le monde"
				}
			},
		},
	});

export default i18next;
