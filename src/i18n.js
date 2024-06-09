import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import english from '../translations/english.json';
import icelandic from '../translations/icelandic.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'is_IS',
    debug: true,
    resources: {
      is_IS: {
        translation: icelandic,
      },
      en: {
        translation: english,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
