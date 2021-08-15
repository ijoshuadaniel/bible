module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          components: './src/components',
          pages: '/src/pages',
          utils: './utils/',
          constants: './utils/constants',
          ui: './src/ui',
        },
      },
    ],
  ],
};
