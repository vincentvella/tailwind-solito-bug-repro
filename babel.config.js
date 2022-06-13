
const presets = ['@expo/next-adapter/babel']
const plugins = ['tailwindcss-react-native/babel', 'react-native-reanimated/plugin']
presets.unshift('next/babel')
plugins.unshift(
  'inline-react-svg',
  'transform-flow-strip-types',
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel/plugin-proposal-private-methods', { loose: true }],
  ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
)

// console.log('plugins', plugins)
// console.log('presets', presets)

module.exports = {
  plugins,
  presets,
};
