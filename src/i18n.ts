import { createI18n } from "vue-i18n";
import ru from "./locales/ru-RU.json";

function loadLocaleMessages() {
  const locales = [{ ru: ru }];
  const messages = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  });
  return messages;
}

export default createI18n({
  locale: localStorage.getItem("lang") || "ru",
  fallbackLocale: "ru",
  legacy: false,
  messages: loadLocaleMessages(),
});
