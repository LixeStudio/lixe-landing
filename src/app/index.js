import { MotionPlugin } from '@vueuse/motion';
import { createApp } from 'vue';
import { i18n } from './providers/i18n';
import App from './App.vue';

export const app = createApp(App).use(MotionPlugin).use(i18n);
