import { getCities, getCitiesByCountry, getCityByLabel } from '../src/cities';
import citiesData from '../data/cities.min.json';

describe('cities module', () => {
    it('should return all cities data', () => {
        expect(getCities()).toEqual(citiesData);
    });

    it('should return cities for a valid country', () => {
        // Use a country from the data
        const country = (citiesData as any)[0];
        expect(getCitiesByCountry(country.country)).toEqual(country.cities);
    });

    it('should return an empty array for an invalid country', () => {
        expect(getCitiesByCountry('NonExistentCountry')).toEqual([]);
    });

    it('should return the correct city by label (case-insensitive)', () => {
        const country = (citiesData as any)[0];
        const city = country.cities[0];
        expect(getCityByLabel(country.country, city.label.toUpperCase())).toEqual(city);
    });

    it('should return undefined for a non-existent city', () => {
        const country = (citiesData as any)[0];
        expect(getCityByLabel(country.country, 'NonExistentCity')).toBeUndefined();
    });

    it('should return undefined for a non-existent country', () => {
        expect(getCityByLabel('NonExistentCountry', 'AnyCity')).toBeUndefined();
    });
});
