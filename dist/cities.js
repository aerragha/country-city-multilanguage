"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityByLabel = exports.getCitiesByCountry = exports.getCities = void 0;
const cities_min_json_1 = __importDefault(require("./data/cities.min.json"));
const cities = cities_min_json_1.default;
const getCities = () => {
    return cities;
};
exports.getCities = getCities;
const getCitiesByCountry = (countryLabel) => {
    const citiesList = cities.find(city => city.country === countryLabel);
    return citiesList ? citiesList.cities : [];
};
exports.getCitiesByCountry = getCitiesByCountry;
const getCityByLabel = (countryLabel, cityLabel) => {
    const citiesList = (0, exports.getCitiesByCountry)(countryLabel);
    return citiesList.find(city => city.label.toLowerCase() === cityLabel.toLowerCase());
};
exports.getCityByLabel = getCityByLabel;
