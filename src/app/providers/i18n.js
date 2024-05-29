import { createI18n } from 'vue-i18n';
import { translationEng } from '@/shared/config/i18n/eng/translation';
import { translationEsp } from '@/shared/config/i18n/esp/translation';
import { translationRus } from '@/shared/config/i18n/rus/translation';

export const i18n = createI18n({
  locale: 'eng',
  fallbackLocale: 'eng',
  messages: {
    eng: {
      translation: translationEng
    },
    esp: {
      translation: translationEsp
    },
    rus: {
      translation: translationRus
    }
  }
});
