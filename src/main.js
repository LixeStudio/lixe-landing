import './assets/scss/main.scss';
import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';

import { createApp } from 'vue';
const app = createApp(App);
app.use(MotionPlugin);

app.mount('#app');
