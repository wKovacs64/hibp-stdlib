const hibp = require('hibp');

module.exports = async (params) => {
  const email = params.args.length ? params.args[0] : params.kwargs.account;

  if (email === undefined) {
    throw new Error('You must specify an email address.');
  }

  return hibp.pasteAccount(email);
};
