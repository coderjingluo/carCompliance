import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入ElementUI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 导入全局样式
import "@/assets/css/global-style.css";
// 引入iconfont
import "@/assets/iconfont/iconfont.css";
// 导入electron
// import { app } from "electron";
const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount("#app");
