export interface Country {
    label: string;
    label_ar: string;
    label_fr: string;
}

export interface CityObj {
    country: string;
    cities: City[];
}

export interface City {
    label: string;
    label_ar: string;
    label_fr: string;
}

export type CountryData = Country[];
export type CityData = City[];
export type CityObjData = CityObj[];