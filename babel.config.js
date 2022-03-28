module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/components': './src/components',
          '@/navigator': './src/navigator',
          '@/modules': './src/modules',
          '@/config': './src/config',
          '@/assets': './src/assets',
        },
      },
    ],
  ],
};
