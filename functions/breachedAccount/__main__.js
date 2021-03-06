const { breachedAccount } = require('hibp');

/**
 * Fetches breach data for the specified account.
 *
 * @param {string} account a username or email address
 * @param {string} domain a domain by which to filter the results (default: all
 * domains)
 * @param {boolean} truncate truncate the results to only include the name of
 * each breach (default: false)
 * @returns {any} an array of breach objects (or null if no breaches were found)
 */
module.exports = async (account, domain = '', truncate = false) =>
  breachedAccount(account, { domain, truncate });
