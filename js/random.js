import {getIndependenceYear, getCountries} from "./api.js"
import {userInput, searchBtn, grandParent, tries, maxTries, divNum} from "../main.js";

// pick a country at random and change every 24 hrs
//setting countryoftheday var
var countryOfTheDay;

export function getRandomCountry() {
  // fetching api
  fetch('https://restcountries.com/v3.1/all')
    // response to json
    .then(response => response.json())
    // run through countries and select random
    .then(countries => {
      // random var
      const randomIndex = Math.floor(Math.random() * countries.length);
      // country of the day as random
      countryOfTheDay = countries[randomIndex];
      // change flag in main page to country of the day
      const flag = document.querySelector('.country-flag').src = countryOfTheDay.flags.svg;
      // return the random country object
      getIndependenceYear(countryOfTheDay.name.common).then(year => {
        countryOfTheDay.year = year;  
        console.log(`${countryOfTheDay.name.common},\n ${countryOfTheDay.year}, \n${countryOfTheDay.population}, \n${countryOfTheDay.telcode}, \n${countryOfTheDay.area}, \n${countryOfTheDay.subregion}`);
        // setting hint value from countryoftheday
        getCountries(countryOfTheDay.name.common).then(country => {
         
      })})
      .catch(error => {
      console.error(error);
      })})}

export{countryOfTheDay}
setInterval(getRandomCountry(), 1000 * 60 * 60 * 24);
