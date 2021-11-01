import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from "firebase";

Vue.config.productionTip = false

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD--ixoiBcgGKVeYqN7n-v0oEtOh9bxSsA",
  authDomain: "msj-fbla.firebaseapp.com",
  projectId: "msj-fbla",
  storageBucket: "msj-fbla.appspot.com",
  messagingSenderId: "61641158806",
  appId: "1:61641158806:web:04a1759886be9463ac12b7",
  measurementId: "G-809B0HFH65"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
