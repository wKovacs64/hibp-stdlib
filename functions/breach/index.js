const hibp = require('hibp');

module.exports = async (params) => {
  const name = params.args.length ? params.args[0] : params.kwargs.breachName;

  if (name === undefined) {
    throw new Error('You must specify a breach name.');
  }

  return hibp.breach(name);
};
