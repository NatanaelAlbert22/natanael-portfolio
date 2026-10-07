import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  // false = selalu mulai di /id, tidak menebak dari bahasa browser
  localeDetection: false
});