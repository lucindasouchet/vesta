import i18next from "i18next";

i18next.init({
	resources: {
		en: { 
			translation: { 
				key1: "Hello World",
				key2: "english",
				welcome: "Welcome",
				hello: "Hello World"
		}},
		es: { 
			translation: { 
				key1: "Hola Mundo",
				key2: "español"
		}},
		fr: { 
			translation: { 
				key1: "Bonjour Monde",
				key2: "français",
				welcome: "Bienvenue",
				hello: "Bonjour le monde"
		}},
	},
	lng: "en",            // default language
	fallbackLng: "en",    // fallback
	interpolation: { escapeValue: false },
});

export default i18next;
