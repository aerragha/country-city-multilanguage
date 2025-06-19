"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryByLabel = exports.getCountries = void 0;
const countries_min_json_1 = __importDefault(require("./data/countries.min.json"));
const getCountries = () => {
    return countries_min_json_1.default;
};
exports.getCountries = getCountries;
const getCountryByLabel = (label) => {
    return (0, exports.getCountries)().find(country => country.label.toLowerCase() === label.toLowerCase());
};
exports.getCountryByLabel = getCountryByLabel;
