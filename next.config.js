const withFonts = require('next-fonts');
const withImages = require('next-images');
const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');

const withTM = require('next-transpile-modules')([
  "tailwindcss-react-native",
  "@react-native-community/hooks",
  'react-native-web',
  'solito',
], {
  reactStrictMode: true
})

module.exports = withPlugins([
  withTM,
  [withExpo, { projectRoot: __dirname, webpack5: true }],
  withFonts,
  withImages,
], {
  images: {
    disableStaticImages: true
  }
});