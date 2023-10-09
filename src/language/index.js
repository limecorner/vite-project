import { createI18n } from "vue-i18n";
import en from "./en.json";
import cn from "./zh-cn.json";
import tw from "./zh-tw.json";

let defalutLanguage = localStorage.getItem("lang") || "en";

const i18n = createI18n({
  legacy: false,
  locale: defalutLanguage,
  messages: { en, tw, cn },
});

export default i18n;
