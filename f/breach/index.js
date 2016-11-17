const hibp = require('hibp');

module.exports = (params, callback) => {
  const name = params.args.length ? params.args[0] : params.kwargs.breachName;

  if (name === undefined) {
    callback('You must specify a breach name.');
  } else {
    hibp
      .breach(name)
      .then(data => callback(null, data))
      .catch(callback);
  }
};
