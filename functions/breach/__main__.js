const hibp = require('hibp');

/**
 * Fetches breach data for a single breach.
 *
 * @param {string} breachName the name of a breach in the system
 * @returns {any} an object representing breach data (or null if no breach was
 * found)
 */
module.exports = async breachName => hibp.breach(breachName);
