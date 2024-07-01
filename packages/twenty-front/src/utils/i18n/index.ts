import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from './locales/en-US.json';
import he from './locales/he-IL.json';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const languages = ['en', 'he', 'fr'];

const resources = {
  en: {
    translation: en,
  },
  he: {
    translation: he,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    //whitelist: languages,
    //saveMissing: true,
    //loadPath: '/locales/{{lng}}/{{ns}}.json',
    // namespace: 'translation',
    lng: 'en-US', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
