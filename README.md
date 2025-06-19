# Country-City-Multilanguage

A lightweight and efficient package for accessing country and city data. Easily integrate country and city information into your JavaScript or TypeScript applications.

## Features

- Retrieve country and city lists
- Get country or city by label
- Optimized, minified JSON data for fast lookups
- TypeScript types included
- Simple, synchronous API

## Installation

```bash
npm install country-city-multilanguage
```

## Usage

### Import

```typescript
import { getCountries, getCountryByLabel } from 'country-city-multilanguage';
import { getCities, getCitiesByCountry, getCityByLabel } from 'country-city-multilanguage';
```

### Get All Countries

```typescript
const countries = getCountries();
console.log(countries);
/*
[
    {label: "Afghanistan", label_ar: "أفغانستان", label_fr: "Afghanistan"},
    {label: "Morocco", label_ar: "المغرب", label_fr:" Maroc"},
    // ...
]
*/
```

### Get Country By Label

```typescript
const country = getCountryByLabel('Morocco');
console.log(country);
/*
{label: "Morocco", label_ar: "المغرب", label_fr:" Maroc"}
*/
```

### Get All Cities

```typescript
const allCities = getCities();
console.log(allCities);
/*
[
    { country: 'Morocco', cities: [{ "label": "Kenitra", "label_ar": "القنيطرة", "label_fr": "Kenitra" }, ...] },
    // ...
]
*/
```

### Get Cities By Country

```typescript
const citiesInFrance = getCitiesByCountry('Morocco');
console.log(citiesInFrance);
/*
[
    { "label": "Kenitra", "label_ar": "القنيطرة", "label_fr": "Kenitra" },
    { "label": "Mohammedia", "label_ar": "المحمدية", "label_fr": "Mohammedia" },
    // ...
]
*/
```

### Get City By Label

```typescript
const city = getCityByLabel('Morocco', 'Kenitra');
console.log(city);
/*
{ "label": "Kenitra", "label_ar": "القنيطرة", "label_fr": "Kenitra" }
*/
```

## API

### `getCountries(): Country[]`

Returns an array of country objects.

### `getCountryByLabel(label: string): Country | undefined`

Returns a country object matching the given label.

### `getCities(): CityObj[]`

Returns an array of all city objects grouped by country.

### `getCitiesByCountry(countryLabel: string): City[]`

Returns an array of city objects for the given country label.

### `getCityByLabel(countryLabel: string, cityLabel: string): City | undefined`

Returns a city object matching the given label within the specified country.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License. See [LICENSE](LICENSE) for details.