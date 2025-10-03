import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { motion } from "framer-motion";

// 🌍 Translations
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        pastAchievements: "Jan Suraj Party - Past Achievements for the Janta",
      },
    },
    hi: {
      translation: {
        pastAchievements: "जन सूरज पार्टी - जनता के लिए पिछली उपलब्धियाँ",
      },
    },
  },
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

// 📊 Data
const achievementsData = {
  en: [
    {
      description:
        "Jan Suraj Party organized community health camps across multiple rural districts, providing free medical checkups, medicines, and health awareness sessions. Thousands of families benefited from preventive health measures, vaccination drives, and consultations with expert doctors, significantly improving local healthcare standards.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvINeU3CxzQg02bpNdzYv4IdR9vhUq9Om1Bbe9pLbjjPQPFyniOxigj79A0vCWoGBQKqM&usqp=CAU",
    },
    {
      description:
        "Through extensive educational initiatives, the party established new schools, offered scholarships to underprivileged students, and implemented literacy programs for children and adults. These efforts led to higher literacy rates, improved school attendance, and greater opportunities for youth in remote communities.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4nLZuwDlVAzXKUoPiQIG76mMQlqEzeV4xbxS3n4MULH9jizad-Qzf7CusvX4L6_SBak&usqp=CAU",
    },
    {
      description:
        "Infrastructure development projects included construction of durable roads, clean drinking water systems, and electrification of villages. By enhancing accessibility and providing essential utilities, these projects transformed living conditions and supported economic growth in underserved areas.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkkYCkmzhv2EiuWAx-yWTRn0H0qrFkZTJZEjbeO2Zz3mThqFZTwz-mKX00FDPR7Usv_4&usqp=CAU",
    },
  ],
  hi: [
    {
      description:
        "जन सूरज पार्टी ने कई ग्रामीण जिलों में स्वास्थ्य शिविर आयोजित किए, जिनमें मुफ्त मेडिकल जांच, दवाएँ और स्वास्थ्य जागरूकता सत्र शामिल थे। हजारों परिवारों ने रोग निवारक उपायों, टीकाकरण अभियानों और विशेषज्ञ डॉक्टरों से परामर्श के लाभ उठाए, जिससे स्थानीय स्वास्थ्य मानकों में सुधार हुआ।",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvINeU3CxzQg02bpNdzYv4IdR9vhUq9Om1Bbe9pLbjjPQPFyniOxigj79A0vCWoGBQKqM&usqp=CAU",
    },
    {
      description:
        "शैक्षिक पहलों के माध्यम से पार्टी ने नए स्कूल स्थापित किए, वंचित छात्रों को छात्रवृत्ति दी, और बच्चों और वयस्कों के लिए साक्षरता कार्यक्रम लागू किए। इन प्रयासों से साक्षरता दर बढ़ी, स्कूल उपस्थिति में सुधार हुआ और दूरदराज के समुदायों में युवाओं के लिए अवसर बढ़े।",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4nLZuwDlVAzXKUoPiQIG76mMQlqEzeV4xbxS3n4MULH9jizad-Qzf7CusvX4L6_SBak&usqp=CAU",
    },
    {
      description:
        "इन्फ्रास्ट्रक्चर विकास परियोजनाओं में मजबूत सड़कें, स्वच्छ पेयजल प्रणाली और गांवों का विद्युतीकरण शामिल था। इन परियोजनाओं ने जीवन स्तर में सुधार किया और ग्रामीण क्षेत्रों में आर्थिक विकास को बढ़ावा दिया।",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkkYCkmzhv2EiuWAx-yWTRn0H0qrFkZTJZEjbeO2Zz3mThqFZTwz-mKX00FDPR7Usv_4&usqp=CAU",
    },
  ],
};

const HelpJanta = ({ children }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";
  const achievements = achievementsData[lang] || achievementsData["en"];

  return (
    <div className="min-h-screen p-6">
      {/* Title */}
      <motion.h1
        className="text-4xl font-extrabold text-center text-blue-700 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("pastAchievements")}
      </motion.h1>

      {/* Achievements + Children */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {achievements.map(({ url, description }, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.img
                src={url}
                alt={`Achievement ${index + 1}`}
                className="w-full md:w-1/2 h-80 object-cover rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Text */}
              <motion.div
                className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: isEven ? 120 : -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <p className="text-gray-700 text-lg leading-relaxed">
                  {description}
                </p>
              </motion.div>
              
            </div>
          );
        })}
{/* Children placed neatly */}
        {children && (
          <div className="mt-0.5">
            {children}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default HelpJanta;
