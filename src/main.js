import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import i18n from "./language/index";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.mount("#app");
