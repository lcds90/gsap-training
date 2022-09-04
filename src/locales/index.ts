import { createI18n } from "vue-i18n";
import en from "./en";
import pt from "./pt";
export const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "en", // set fallback locale
  messages: {
    en,
    pt,
    "pt-BR": pt,
  },
});
