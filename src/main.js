import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutoSize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBrLIeC1GOOJEWypJh0xK8dIkuBROurIZc",
  authDomain: "vue-calender-app-cb6a3.firebaseapp.com",
  projectId: "vue-calender-app-cb6a3",
  storageBucket: "vue-calender-app-cb6a3.appspot.com",
  messagingSenderId: "495975198155",
  appId: "1:495975198155:web:2b706a2eac1e8ed433da4e",
});

export const db = firebase.firestore();

new Vue({
  VueTextareaAutoSize,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
