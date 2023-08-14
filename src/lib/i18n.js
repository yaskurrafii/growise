import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          scraper: {
            type: {
              title: "Create a scraper on this page",
              single: {
                name: "Single Page",
                description:
                  "Retrieve data from a single page ex: user profiles or article pages",
              },
              list: {
                name: "List",
                description:
                  "Scrape multiple items from a list, with the ability to paginate ex: Scrape a list of products or configuration files from a search",
              },
            },
          },
          button: {
            text: {
              cancel: "cancel",
            },
          },
        },
      },
      tw: {
        translation: {
          scraper: {
            type: {
              title: "在本頁建立網頁爬蟲",
              single: {
                name: "單頁",
                description: "從單個頁面獲取數據例如：用戶個人資料或文章頁面",
              },
              list: {
                name: "列表",
                description:
                  "從列表中抓取多個項目、可換頁抓取例如：從搜索中獲取產品或配置文件列表",
              },
            },
          },
          button: {
            text: {
              cancel: "取消",
            },
          },
        },
      },
    },
  });

export default i18n;
