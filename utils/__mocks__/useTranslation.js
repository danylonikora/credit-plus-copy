function useTranslation() {
  return {
    ...require("../../translations/uk/home.json"),
    ...require("../../translations/uk/Layout.json"),
    ...require("../../translations/uk/about.json"),
    ...require("../../translations/uk/404.json"),
    ...require("../../translations/uk/PhoneInfo.json"),
  };
}

module.exports = useTranslation;
