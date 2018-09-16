// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyCRxeC1zkloHg42bl9LX8q5-FQZd4u21IE',
  authDomain: 'm2c-project-4a2fe.firebaseapp.com',
  databaseURL: 'https://m2c-project-4a2fe.firebaseio.com',
  projectId: 'm2c-project-4a2fe',
  storageBucket: '',
  messagingSenderId: '483404546927'
}
// eslint-disable-next-line
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
