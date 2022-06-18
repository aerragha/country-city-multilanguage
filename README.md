# country-city-multilanguage

A package to list all countries by a specific language (English, French, and Arabic), and also list cities by a country and a specific language.

## Install

```bash
  npm install country-city-multilanguage
```

## Get countries

To load the list of all countries use the `getCountries` function, this function takes 1 param `lang`

param | Type | options
------ | ------- | -------
lang | string | "en", "fr", "ar"

### Example

```js

const { getCountries } = require("country-city-multilanguage");

const countriesList = getCountries("fr");

console.log(countriesList);

```

## Get cities

To load the list of all cities of an selected country use the `getCities` function, this function takes 2 params `country_index` & `lang`

param | Type | options
------ | ------- | -------
country_index | number | the index of country selected from the array retuend from the `getCountries` function
lang | string | "en", "fr", "ar"

### Example

```js

const { getCountries, getCities } = require("country-city-multilanguage");

const countriesList = getCountries("ar");

const citiesList = getCities(countriesList[0].index, "ar");

console.log(citiesList);

```