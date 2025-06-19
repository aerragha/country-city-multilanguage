import { getCountries, getCountryByLabel } from '../src/countries';
import countriesData from '../src/data/countries.min.json';

describe('countries module', () => {
    it('should return all countries data', () => {
        expect(getCountries()).toEqual(countriesData);
    });

    it('should return the correct country by label (case-insensitive)', () => {
        const country = (countriesData as any)[0];
        expect(getCountryByLabel(country.label.toUpperCase())).toEqual(country);
    });

    it('should return undefined for a non-existent country label', () => {
        expect(getCountryByLabel('NonExistentCountry')).toBeUndefined();
    });
});
