
import fetch from 'https://cdn.skypack.dev/node-fetch';
// get country by name function
export async function getCountries(countryName) {
  //fetch rest api versions 3.1 + 2
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
    const response2 = await fetch(`https://restcountries.com/v2/name/${countryName}`);

    // create 2 response 1 for v3.1 and 2.0 for callingCodes
    const codes = await response2.json(); 
    const countries = await response.json();
    // if none is typed
    if (countries == undefined || null ) {
    throw new Error(`Could not find country`);
    }
    // country object variables
    const country = countries[0];


    // this will return the data from search
    return {
        name: country.name.common,
        latitude: country.latlng[0],
        longitude: country.latlng[1],
        population: country.population,
        subregion: country.subregion,
        timezone: country.timezones[0],
        area: country.area,
        flag: country.flags.svg,
        shortName: country.altSpellings[0]
    }; 
}

// get indenpendent date from private json using userinput and compare fist knowledge year with country name
export async function getIndependenceYear(countryName) {
  try {
    // fetch information from OWN json data
    const response = await fetch('./data/dbFounded.json');
    const countries = await response.json();
    // find country in file from input
    const country = countries.find(country => country.country && country.country.toLowerCase() === countryName.toLowerCase());
    if (!country) {
      // handaling errors - throw error to console.
        throw new Error(`Could not find independence year for "${countryName}".`);
    }

    return country.independence;
    // return year as number!
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}
