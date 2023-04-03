import { getCountries, getIndependenceYear} from "./api.js";
import {userInput, searchBtn, grandParent, tries, maxTries, divNum} from "../main.js";

//function to get relative location from city to city
export function getDirections(origin, destination) {
    getCountries(origin).then(country => {
      let originL = country.latitude;
      let originR = country.longitude;
  getCountries(destination).then(country => {
      let destinationL = country.latitude
      let destinationR = country.longitude

      const latDiff =  destinationL - originL;
      const lngDiff = destinationR - originR;
      const svg = document.querySelectorAll(".clues-svg")[4];

      let direction = "";
      
    // Determine the direction based on the difference between the latitudes and longitudes
    if (latDiff === 0 && lngDiff === 0) {
      direction = destination;
      svg.src = "/images/correctL.svg";
    } else if (latDiff > 0 && lngDiff === 0) {
      direction = "North";
      
    } else if (latDiff < 0 && lngDiff === 0) {
      direction = "South";
      svg.style = "transform: rotate(180deg);";

    } else if (latDiff === 0 && lngDiff > 0) {
      direction = "East";
      svg.style = "transform: rotate(90deg);";

    } else if (latDiff === 0 && lngDiff < 0) {
      direction = "West";
      svg.style = "transform: rotate(-90deg);";

    } else if (latDiff > 0 && lngDiff > 0) {
      direction = "North-East";
      svg.style = "transform: rotate(25deg);";

    } else if (latDiff > 0 && lngDiff < 0) {
      direction = "North-West";
      svg.style = "transform: rotate(-25deg);";

    } else if (latDiff < 0 && lngDiff > 0) {
      direction = "South-East";
      svg.style = "transform: rotate(165deg);";
    } else {
      direction = "South-West";
      svg.style = "transform: rotate(205deg);";
    }
    document.querySelectorAll(".clues-text")[4].innerText = direction.toString();
  })})};
  
    

// ---------------- get directions end ---------------- \\