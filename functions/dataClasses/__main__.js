const hibp = require('hibp');

/**
 * Fetches all data classes in the system.
 *
 * @returns {any} array of strings (or null if no data classes were found)
 */
module.exports = async () => hibp.dataClasses();
