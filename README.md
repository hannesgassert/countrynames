# ISO 3166 Country Name / Code Mapper in Javascript

Uses the data in http://www.iso.org/iso/country_names_and_code_elements_txt to map from
country codes to country names and vice versa. Also provides lists of all names and codes.

## Installation
```
npm install countrynames
```

## Tests
```
npm test
```

## API Overview

  - [exports.getCode()](#exportsgetcodeenglishstring)
  - [exports.getName()](#exportsgetnametwoletterstring)
  - [exports.getAllCodes()](#exportsgetallcodes)
  - [exports.getAllNames()](#exportsgetallnames)

## exports.getCode(English:String)

  Get a country code for a country name. Case-insensitive.

  Examples:

```js
// Returns 'CH'
countrynames.getCode('Switzerland')
// Returns 'BB'
countrynames.getCode('BarbaDOS')
```

## exports.getName(Two-letter:String)

  Get a country name for a country code. Case-insensitive.

  Examples:

```js
// Returns 'TONGA'
countrynames.getCode('TO')
// Returns 'RÉUNION'
countrynames.getCode('re')
```

## exports.getAllCodes()

  Get a country name for a country code. Case-insensitive.

  Example:

```js
// Returns an array ["AD", ... "ZW"]
countrynames.getAllCodes();
```

## exports.getAllNames()

  Get a country name for a country code. Case-insensitive.

  Example:

```js
// Returns an array ["AFGHANISTAN", ... "ZIMBABWE", "ÅLAND ISLANDS"]
countrynames.getAllCodes();
```

## License 
MIT
