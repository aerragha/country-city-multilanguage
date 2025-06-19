import { City, CityObj } from './types';
import citiesData from '../data/cities.min.json';

const cities: CityObj[] = citiesData as CityObj[];

export const getCities = (): CityObj[] => {
    return cities;
};

export const getCitiesByCountry = (countryLabel: string): City[] => {
    const citiesList = cities.find(city => city.country === countryLabel);

    return citiesList ? citiesList.cities : [];
};

export const getCityByLabel = (countryLabel: string, cityLabel: string): City | undefined => {
    const citiesList = getCitiesByCountry(countryLabel);
    return citiesList.find(city => city.label.toLowerCase() === cityLabel.toLowerCase());
};