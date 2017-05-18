const hibp = require('hibp');

module.exports = async (params) => {
  const account = params.args.length ? params.args[0] : params.kwargs.account;
  const { domain, truncate } = params.kwargs;

  if (account === undefined) {
    throw new Error('You must specify an account or email address.');
  }

  return hibp.breachedAccount(account, { domain, truncate });
};
