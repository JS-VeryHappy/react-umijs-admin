const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.eslint,
  rules: {
    ...fabric.eslint.rules,
  },
};

// module.exports = {
//   extends: [require.resolve('@umijs/fabric/dist/eslint')],
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
//   rules: {
//     'react-hooks/rules-of-hooks': 0,
//   },
//   globals: {},
// };
