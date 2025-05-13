import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "zh",
    resources: {
      zh: {
        translation: {
          home: "首頁",
          about: "關於我們",
          contact: "聯絡我們",
          customers: "客戶案例",
        },
      },
      en: {
        translation: {
          home: "Home",
          about: "About",
          contact: "Contact",
          customers: "Customers",
        },
      },
    },
  });

export default i18n;
