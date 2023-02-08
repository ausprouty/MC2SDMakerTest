import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";

import "./assets/styles/appGLOBAL.css";
import "./assets/styles/cardGLOBAL.css";
import "./assets/styles/mc2GLOBAL.css";

import { Capacitor } from "@capacitor/core";
import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite";

window.addEventListener("DOMContentLoaded", async () => {
  const app = createApp(App).use(router);
  localStorage.setItem('mc2NoteSource', 'localhost');
  router.isReady().then(() => {
      app.mount("#app");
    });
});
