const hibp = require('hibp');

module.exports = (params, callback) => {
  const email = params.args.length ? params.args[0] : params.kwargs.account;

  if (email === undefined) {
    callback('You must specify an email address.');
  } else {
    hibp
      .pasteAccount(email)
      .then(data => callback(null, data))
      .catch(callback);
  }
};
