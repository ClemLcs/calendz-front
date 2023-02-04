module.exports = exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-useless-template-attributes': 'off'
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module'
  }
}
