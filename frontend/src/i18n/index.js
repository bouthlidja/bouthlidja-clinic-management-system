import { createI18n } from 'vue-i18n'

import ar from './locales/ar'
import en from './locales/en'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'ar',

  messages: {
    ar,
    en,
  },
})

export default i18n
