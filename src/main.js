import { createApp } from 'vue';
import { auth } from '@/firebase/config';

import App from './App.vue';
import router from './router';
import './assets/main.css';

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount('#app');
  }
});
