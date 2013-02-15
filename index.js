var fs = require('fs');

var dataFile = 'country_names_and_code_elements_txt',
    fromCode = {},
    fromName = {};

fs.readFileSync(dataFile, 'ascii')
    .split('\r\n')
    .forEach(function(line) {
        var row = line.split(';'),
            code = row.pop(),
            name = row.pop();

        if (code && name) {
            fromCode[code.toUpperCase()] = name;
            fromName[name.toUpperCase()] = code;
        }
});

/**
 * Get a country code for a country name. Case-insensitive.
 *
 * Examples:
 *
 *   // Returns 'CH'
 *   countrynames.getCode('Switzerland')
 *   // Returns 'BB'
 *   countrynames.getCode('BarbaDOS')
 *
 * @param {String} English country name as of the ISO standard
 * @return {String} Two-letter country code as of the ISO standard, uppercase
 * @api public
 */
exports.getCode = function(name) {
    return fromName[name.toUpperCase()];
};

/**
 * Get a country name for a country code. Case-insensitive.
 *
 * Examples:
 *
 *   // Returns 'TONGA'
 *   countrynames.getCode('TO')
 *   // Returns 'RÉUNION'
 *   countrynames.getCode('re')
 *
 * @param {String} Two-letter country code as of the ISO standard
 * @return {String} English country name as of the ISO standard, uppercase
 * @api public
 */
exports.getName = function(code) {
    return fromCode[code.toUpperCase()];
};

/**
 * Get a country name for a country code. Case-insensitive.
 *
 * Example:
 *
 *   // Returns an array ["AD", ... "ZW"]
 *   countrynames.getAllCodes();
 *
 * @return {Array} All two-letter country codes defined in the ISO standard
 * @api public
 */
exports.getAllCodes = function() {
    return Object.keys(fromCode).slice(1).sort();
};

/**
 * Get a country name for a country code. Case-insensitive.
 *
 * Example:
 *
 *   // Returns an array ["AFGHANISTAN", ... "ZIMBABWE", "ÅLAND ISLANDS"]
 *   countrynames.getAllCodes();
 *
 * @return {Array} All country names in the ISO standard, sorted alphabetically in your locale, if available
 * @api public
 */
exports.getAllNames = function() {
    return Object.keys(fromName)
        .slice(1)
        .sort(function(a, b) {
            return a.localeCompare(b);
        });
};
