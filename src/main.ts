import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import "@vant/touch-emulator";
import { Locale } from "vant";
import ruRU from "vant/es/locale/lang/ru-RU";
import "vant/lib/index.css";
import "vant/es/dialog/style";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

Locale.use("ru-RU", ruRU);
app.use(createPinia());
app.use(router);

app.mount("#app");
