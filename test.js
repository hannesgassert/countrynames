var assert = require('assert'),
    countrynames = require('./');

assert.equal(countrynames.getCode('French Guiana'), 'GF');
assert.equal(countrynames.getName('BF'), 'BURKINA FASO');
assert.equal(countrynames.getCode('Iran'), countrynames.getCode('IRAN, ISLAMIC REPUBLIC OF'));
assert.equal(countrynames.getCode(countrynames.getName('IO')), 'IO');
assert.ok(countrynames.getAllCodes() instanceof Array);
assert.ok(countrynames.getAllNames() instanceof Array);

console.log('Passed successfully.');
