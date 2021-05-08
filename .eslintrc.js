module.exports = {
  parser: 'babel-eslint',
  root: true,
  extends: ['@react-native-community', 'standard'],
  plugins: ['react', 'react-native'],
  rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
  parserOptions: {
    ecmaVersion: 2018,
  },
};
