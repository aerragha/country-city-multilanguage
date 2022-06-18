const countries = require("./data/countries.json");
const cities = require("./data/cities.json");

module.exports = {
  getCountries: (lang) => {
    const countriesList = [];
    for (let i = 0; i < countries.length; i++) {
      countriesList.push({
        index: countries[i].value,
        label:
          lang === "fr"
            ? countries[i].label_fr
            : lang === "ar"
            ? countries[i].label_ar
            : countries[i].label,
      });
    }
    return countriesList;
  },
  getCities: (country_index, lang) => {
    const citiesList = [];
    const country = countries.find(
      (country) => country.value === country_index
    );
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].country === country.label) {
        for (let j = 0; j < cities[i].cities.length; j++) {
          citiesList.push({
            value: cities[i].cities[j].value,
            label:
              lang === "fr"
                ? cities[i].cities[j].label_fr
                : lang === "ar"
                ? cities[i].cities[j].label_ar
                : cities[i].cities[j].label,
          });
        }
        return citiesList;
      }
    }
    return citiesList;
  },
};

