import { createApp } from 'vue'
import App from './App.vue'
import VueFeather from 'vue-feather'
import store from './store/index';

// import Unicon from 'vue-unicons'
// import {  uniGlobe, uniPhone, uniEnvelope, uniUser, uniBag,uniGraduationCap } from 'vue-unicons/dist/icons'

// Unicon.add([ uniGlobe, uniPhone, uniEnvelope, uniUser, uniBag,uniGraduationCap])

import router from "./router";

createApp(App).use(router).use(store).component(VueFeather.name,VueFeather).mount('#app')


