import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation strings (only plain text goes here)
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

// DATA: Separate from translation files for best practice and reliability
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
    {
      description:
        "The party launched social welfare programs targeting women, children, and the elderly. Initiatives included vocational training, financial assistance schemes, and healthcare programs, empowering women and providing better social security, healthcare, and quality of life for all vulnerable groups.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkkYCkmzhv2EiuWAx-yWTRn0H0qrFkZTJZEjbeO2Zz3mThqFZTwz-mKX00FDPR7Usv_4&usqp=CAU",
    },
    {
      description:
        "Environmental campaigns led by the party focused on afforestation, river clean-up drives, and sustainable farming practices. Thousands of trees were planted, and local communities were educated on eco-friendly practices, contributing to a greener, healthier, and more sustainable environment for future generations.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqtCZtybLnfZykAVqWSBjnZO0Ob342P1kHA&s",
    },
    {
      description:
        "Cultural and community events were organized to promote local arts, heritage, and traditions. These festivals and gatherings encouraged community participation, strengthened social bonds, and provided a platform for local artists to showcase their talents.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWmje7uSzEM3jsV946Jy70aeeeTeT8XN10A&s",
    },
    {
      description:
        "To bridge the digital divide, the party implemented initiatives providing computer literacy training, internet access points in villages, and support for students to use technology in education. This modern approach opened up new opportunities for learning and growth.",
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
    {
      description:
        "पार्टी ने महिलाओं, बच्चों और बुजुर्गों के लिए सामाजिक कल्याण कार्यक्रम शुरू किए। पहल में व्यावसायिक प्रशिक्षण, वित्तीय सहायता योजनाएँ और स्वास्थ्य कार्यक्रम शामिल थे, जिससे महिलाओं को सशक्त बनाया गया और कमजोर वर्गों के लिए जीवन की गुणवत्ता में सुधार हुआ।",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkkYCkmzhv2EiuWAx-yWTRn0H0qrFkZTJZEjbeO2Zz3mThqFZTwz-mKX00FDPR7Usv_4&usqp=CAU",
    },
    {
      description:
        "पार्टी के पर्यावरण अभियान में वनीकरण, नदी की सफाई और सतत कृषि प्रथाओं पर ध्यान केंद्रित किया गया। हजारों पेड़ लगाए गए और स्थानीय समुदायों को पर्यावरण-मैत्रीपूर्ण अभ्यासों के बारे में शिक्षित किया गया, जिससे भविष्य की पीढ़ियों के लिए हरा-भरा और स्वस्थ वातावरण बना।",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqtCZtybLnfZykAVqWSBjnZO0Ob342P1kHA&s",
    },
    {
      description:
        "सांस्कृतिक और सामुदायिक कार्यक्रम आयोजित किए गए ताकि स्थानीय कला, विरासत और परंपराओं को बढ़ावा दिया जा सके। इन त्योहारों और आयोजनों ने समुदाय की भागीदारी को प्रोत्साहित किया, सामाजिक संबंध मजबूत किए और स्थानीय कलाकारों को अपनी प्रतिभा दिखाने का मंच प्रदान किया।",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjWmje7uSzEM3jsV946Jy70aeeeTeT8XN10A&s",
    },
    {
      description:
        "डिजिटल डिवाइड को कम करने के लिए पार्टी ने कंप्यूटर साक्षरता प्रशिक्षण, गांवों में इंटरनेट एक्सेस पॉइंट और छात्रों को शिक्षा में तकनीक के उपयोग का समर्थन करने के लिए पहल की। इस आधुनिक दृष्टिकोण ने सीखने और विकास के नए अवसर खोले।",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkkYCkmzhv2EiuWAx-yWTRn0H0qrFkZTJZEjbeO2Zz3mThqFZTwz-mKX00FDPR7Usv_4&usqp=CAU",
    },
  ],
};

const HelpJanta = ({children}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";
  const achievements = achievementsData[lang] || achievementsData["en"];

  return (
    <div className="min-h-screen p-6">
      {/* Language Switch Buttons */}
      
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-16">
        {t("pastAchievements")}
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {achievements.map(({ url, description }, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={url}
              alt={`Achievement ${index + 1}`}
              className="w-full md:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl">
              <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default HelpJanta;
