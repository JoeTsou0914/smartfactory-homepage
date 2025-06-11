// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // 透過 HTTP 載入翻譯 JSON 檔案
  .use(LanguageDetector) // 偵測瀏覽器語言
  .use(initReactI18next) // 初始化 React I18next
  .init({
    fallbackLng: 'zh',
    supportedLngs: ['zh', 'en', 'ja'],
    ns: [
      'common', 'navbar', 'footer', 'home', 'about', 'history', 'services', 'customers', 'contact', 'product'
    ],
    defaultNS: 'common',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // 語系檔案路徑
    },
    interpolation: {
      escapeValue: false // React 已自動防止 XSS
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage']
    },
    react: {
      useSuspense: true
    }
  });

export default i18n;
