import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json';
import translationES from './es.json';
import translationHI from './hi.json';
import translationPT from './pt.json';
import translationZH from './zh.json';
import translationFR from './fr.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  hi: { translation: translationHI },
  pt: { translation: translationPT },
  zh: { translation: translationZH },
  fr: { translation: translationFR },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
