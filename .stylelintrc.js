const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.stylelint,
  rules: {
    ...fabric.stylelint.rules,
  },
};
