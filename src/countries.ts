import countriesData from '../data/countries.min.json';
import { Country } from './types';

export const getCountries = (): Country[] => {
    return countriesData as Country[];
};

export const getCountryByLabel = (label: string): Country | undefined => {
    return getCountries().find(country => country.label.toLowerCase() === label.toLowerCase());
};
