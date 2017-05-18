const hibp = require('hibp');

module.exports = async (params) => {
  const { domain } = params.kwargs;
  return hibp.breaches({ domain });
};
