const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const {i18n} = require("./next-i18next.config")
const nextConfiguration = {
 i18n,
 react: { useSuspense: false },//this line
 images: {
  disableStaticImages: true
 }

};

module.exports = withPlugins([optimizedImages], nextConfiguration);
