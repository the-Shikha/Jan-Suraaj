import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  LinearProgress,
  MenuItem,
  Select,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

// ----- i18n setup -----
const resources = {
  en: {
    translation: {
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
      Cast_Vote_Your_Vote: "अपना वोट डालें",
      supportQuestion: "क्या आप जन सूरज पार्टी की पहल का समर्थन करते हैं?",
      support: "समर्थन",
      notSupport: "समर्थन नहीं",
      youChose: "आपने चुना",
      supportLevel: "समर्थन स्तर",
      notSupportLevel: "समर्थन नहीं",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});




const VotePage = () => {
  const { t } = useTranslation();
  const [vote, setVote] = useState(null);
  const [supportCount, setSupportCount] = useState(60);
  const [notSupportCount, setNotSupportCount] = useState(40);
  const [language, setLanguage] = useState("en");
useEffect(() => {
  i18n.changeLanguage(language);
}, []);
  const handleVote = (choice) => {
    if (!vote) {
      setVote(choice);
      if (choice === "support") setSupportCount(supportCount + 1);
      else setNotSupportCount(notSupportCount + 1);
    }
  };

  const totalVotes = supportCount + notSupportCount;
  const supportPercentage = Math.round((supportCount / totalVotes) * 100);
  const notSupportPercentage = 100 - supportPercentage;

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
useEffect(() => {
  i18n.changeLanguage(language);
}, []);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Card sx={{ maxWidth: 500, width: "100%", borderRadius: 3, boxShadow: 6 }}>
        <CardContent sx={{ textAlign: "center" }}>
         

          {/* Title */}
          <Typography variant="h4" component="h1" gutterBottom>
            {t("castVote")}
          </Typography>

          {/* Question */}
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {t("supportQuestion")}
          </Typography>

          {/* Always visible support line */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" gutterBottom>
              {t("supportLevel")}: {supportPercentage}% | {t("notSupportLevel")}: {notSupportPercentage}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={supportPercentage}
              sx={{
                height: 15,
                borderRadius: 5,
                backgroundColor: "#FFEBC1",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#2E7D32",
                },
              }}
            />
          </Box>
        </CardContent>

        {/* Voting buttons */}
        <CardActions sx={{ justifyContent: "center", gap: 2, mt: 2 }}>
          <Button
            variant={vote === "support" ? "contained" : "outlined"}
            color="success"
            startIcon={<ThumbUpIcon />}
            onClick={() => handleVote("support")}
          >
            {t("support")}
          </Button>
          <Button
            variant={vote === "notSupport" ? "contained" : "outlined"}
            color="error"
            startIcon={<ThumbDownIcon />}
            onClick={() => handleVote("notSupport")}
          >
            {t("notSupport")}
          </Button>
        </CardActions>

        {/* Vote feedback */}
        {vote && (
          <CardContent sx={{ textAlign: "center", mt: 3 }}>
            <CheckCircleIcon
              color="primary"
              sx={{ fontSize: 50, mb: 1, animation: "bounce 1s infinite" }}
            />
            <Typography variant="h6">
              {t("youChose")}:{" "}
              <span style={{ color: vote === "support" ? "#2E7D32" : "#D32F2F" }}>
                {vote === "support" ? `${t("support")} ✅` : `${t("notSupport")} ❌`}
              </span>
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
};

export default VotePage;
