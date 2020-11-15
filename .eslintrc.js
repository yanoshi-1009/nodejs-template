module.exports = {
  extends: '@cybozu/eslint-config/presets/node-prettier',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  globals: {
    kintone: false
  }
};
