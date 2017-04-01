const hibp = require('hibp');

module.exports = (params, callback) => {
  const domain = params.kwargs.domain;

  hibp
    .breaches({ domain })
    .then(data => callback(null, data))
    .catch(callback);
};
