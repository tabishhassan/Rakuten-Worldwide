var I18n = require("react-native-i18n");

I18n.fallbacks = true;
I18n.locale = "fr";
I18n.translations = {
  en: {
    instruction1: "Welcome to React Native!",
    instruction2: "To get started, edit index.js",
    instruction3: "Press Cmd+R to reload \n Cmd+D or shake for dev menu"
  },
  fr: {
    instruction1: "Bienvenue sur React Native!",
    instruction2: "Pour commencer, éditez index.js",
    instruction3:
      "Appuyez sur Cmd+R pour recharger \n Cmd+D ou agitez pour le menu dev"
  }
};

const AppString = {
  //screens Title
  instruction1: I18n.t("instruction1"),
  instruction2: I18n.t("instruction2"),
  instruction3: I18n.t("instruction3")
};
export default AppString;
