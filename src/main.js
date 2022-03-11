import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import vuetify from './plugins/vuetify'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTId,
  storageBucket: process.env.STRAGEBUCKET,
  messagingSenderId: process.env.MESSINGSENDERId,
  appId: process.env.AOOID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router: router,
  store: store,
  vuetify: vuetify,
  render: h => h(App),
}).$mount('#app')
