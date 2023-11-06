/** @type {import('next-i18next').UserConfig} */
const locales = ['en', 'it', 'de', 'fr'];
const defaultLocale = 'en';

module.exports = {
    i18n: {
        defaultLocale: defaultLocale,
        locales: locales,
    },
}
