module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:prettier/recommended', // ativa o plugin prettier e exibe erros do prettier como linter
   ],
   parser: '@babel/eslint-parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      babelOptions: {
         presets: ['@babel/preset-react'],
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      requireConfigFile: false,
   },
   plugins: ['react', 'react-hooks', 'prettier'],
   rules: {
      'prettier/prettier': 'error', // força erro se Prettier não for seguido
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off', // desnecessário com React 17+
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'eslintreact/jsx-no-bind': 'off',
      'eslintdefault-param-last': 'off',
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
};
