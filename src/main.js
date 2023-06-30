import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
