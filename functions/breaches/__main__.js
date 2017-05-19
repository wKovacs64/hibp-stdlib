const hibp = require('hibp');

/**
 * Fetches all breached sites in the system.
 *
 * @param {string} domain a domain by which to filter the results (default: all
 * domains)
 * @returns {array} an array of breach objects (an empty array if no breaches
 * were found)
 */
module.exports = async (domain = '') => hibp.breaches({ domain });
