import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    /* resources would be bundled with webpack
    resources: {
      en: {
        translation: {
          title: 'title...',//...
          description: {
            part1: 'First part',
            part2: 'Second part'
          }
        }
      }
    },*/
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    // order and from where user language should be detected
  order: ['navigator']

  // keys or params to lookup language from
  // lookupNagigator: 'language',
  // lookupQuerystring: 'lng',
  // lookupCookie: 'i18next',
  // lookupLocalStorage: 'i18nextLng',
  // lookupFromPathIndex: 0,
  // lookupFromSubdomainIndex: 0,

  // cache user language on
  // caches: ['localStorage', 'cookie'],
  // excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain',

  });

export default i18n;
