import { MotionPlugin } from '@vueuse/motion';
import { createApp } from 'vue';
import App from './App.vue';

export const app = createApp(App).use(MotionPlugin);
