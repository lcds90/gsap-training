import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";
import { router } from "./router/routes";
import { i18n } from "./locales";

createApp(App).use(createPinia()).use(router).use(i18n).mount("#app");
