const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  rules: {
    ...fabric.prettier.rules,
  },
};
