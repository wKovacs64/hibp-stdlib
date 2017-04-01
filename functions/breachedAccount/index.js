const hibp = require('hibp');

module.exports = (params, callback) => {
  const account = params.args.length ? params.args[0] : params.kwargs.account;
  const domain = params.kwargs.domain;
  const truncate = params.kwargs.truncate;

  if (account === undefined) {
    callback('You must specify an account or email address.');
  } else {
    hibp
      .breachedAccount(account, { domain, truncate })
      .then(data => callback(null, data))
      .catch(callback);
  }
};
