import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // General
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

      // Help Janta
      pastAchievements: "Jan Suraj Party - Past Achievements for the Janta",

      // Voting Section
      castVote: "Cast Your Vote",
      supportQuestion: "Do you support the initiative of Jan Suraj Party?",
      support: "Support",
      notSupport: "Not Support",
      youChose: "You chose",
      supportLevel: "Support Level",
      notSupportLevel: "Not Support",
    },
  },
  hi: {
    translation: {
      // General
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

      // Help Janta
      pastAchievements: "जन सूरज पार्टी - जनता के लिए पिछली उपलब्धियाँ",

      // Voting Section
      castVote: "अपना वोट डालें",
      supportQuestion: "क्या आप जन सूरज पार्टी की पहल का समर्थन करते हैं?",
      support: "समर्थन",
      notSupport: "समर्थन नहीं",
      youChose: "आपने चुना",
      supportLevel: "समर्थन स्तर",
      notSupportLevel: "समर्थन नहीं",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
