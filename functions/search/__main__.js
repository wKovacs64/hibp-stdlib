const { search } = require('hibp');

/**
 * Fetches all breaches and all pastes associated with the provided account.
 *
 * @param {string} account a username or email address
 * @param {string} domain a domain by which to filter breach results (default:
 * all domains)
 * @param {boolean} truncate truncate the results to only include the name of
 * each breach (default: false)
 * @returns {any} a JSON object with a breaches key and a pastes key
 */
module.exports = async (account, domain = '', truncate = false) =>
  search(account, { domain, truncate });
