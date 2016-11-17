const hibp = require('hibp');

module.exports = (params, callback) => {
  hibp
    .dataClasses()
    .then(data => callback(null, data))
    .catch(callback);
};
