import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import route from './router';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.use(route);
app.mount('#app');
