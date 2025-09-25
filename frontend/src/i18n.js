import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Your translations
const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      gallery: "Gallery",
      language: "Language",

      // Hero Section
      leaderName: "Kumar Shivam",
      leaderTitle: "Youth Political Leader | District President",
      leaderDescription:
        "Dedicated to serving people with integrity, transparency, and a vision for a stronger community. Leading initiatives to empower youth and bring positive change in society.",
      knowMore: "Know More",
      connect: "Connect with Me",
    },
  },
  hi: {
    translation: {
      home: "होम",
      about: "हमारे बारे में",
      services: "सेवाएँ",
      contact: "संपर्क करें",
      gallery: "गैलरी",
      language: "भाषा",

      // Hero Section
      leaderName: "कुमार शिवम",
      leaderTitle: "युवा राजनीतिक नेता | जिला अध्यक्ष",
      leaderDescription:
        "ईमानदारी, पारदर्शिता और एक मजबूत समाज के दृष्टिकोण के साथ जनता की सेवा के लिए समर्पित। युवाओं को सशक्त बनाने और समाज में सकारात्मक बदलाव लाने की पहल का नेतृत्व।",
      knowMore: "और जानें",
      connect: "मुझसे जुड़ें",
    },
  },
};


i18n
  .use(LanguageDetector) // auto-detects user language
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "en", // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
