import { getCountries, getIndependenceYear} from "./api.js";
import {userInput, searchBtn, grandParent, tries, maxTries, divNum} from "../main.js";
import { getShortPop, getShortArea } from "./nums.js";
import { countryOfTheDay } from "./random.js"; 
import {getDirections} from "./direction.js";

export function createHTML(){
 // creating clues container as parent to all svgs and clues text
 const newClues = document.createElement("div");
 newClues.classList.add("container-clues");
 newClues.id = `container-clues-${divNum}`;
 // appending the div
 grandParent.insertAdjacentElement("afterbegin", newClues);
// ------------------------------------------------------------- \\
// creating 5 rounded divs and text
for(let i = 0; i < 6; i++) {
 const newRounded = document.createElement("div");
 newRounded.classList.add("rounded");
 newClues.insertAdjacentElement("afterbegin", newRounded);
 // creating 5 imgs for svg's
 const newImgSvg = document.createElement("img");
 newImgSvg.classList.add("clues-svg");
 newRounded.insertAdjacentElement("afterbegin", newImgSvg);

 // creating 5 text under svg's
 const newClesText = document.createElement("h3");
 newClesText.classList.add("clues-text");
 newClesText.textContent = "testing";
 newRounded.insertAdjacentElement("beforeend", newClesText);
 }
 for(let j = 1; j < 6; j++) {
   const parentFetch = document.querySelectorAll(".rounded")
   document.querySelectorAll(".clues-svg")[j].src = "/images/svg-control.svg"
   const newTitleType = document.createElement("h2")
   newTitleType.classList.add("title-type")
   newTitleType.innerText = "population"
   parentFetch[j].insertAdjacentElement("afterbegin", newTitleType);
 }

// changing the type of values in clues box
document.querySelectorAll(".title-type")[0].innerText = "population";
document.querySelectorAll(".title-type")[1].innerText = "acknowledged";
document.querySelectorAll(".title-type")[2].innerText = "size";
document.querySelectorAll(".title-type")[3].innerText = "direction";
document.querySelectorAll(".title-type")[4].innerText = "region";
// formating returned values from searched to present in clues box
document.querySelectorAll(".clues-text")[0].style = "opacity: 0.4";
};


export function returnCountry() {
// function to return correctAnswer
 getCountries(userInput.value).then(country => {
  // ------------------------------------------------------------- \\
   document.querySelectorAll(".clues-text")[0].innerText = `${country.shortName}`;
   document.querySelectorAll(".clues-text")[1].innerText = getShortPop(country.population);
   getIndependenceYear(country.name).then(year => {
     document.querySelectorAll(".clues-text")[2].innerText = year;
     
   }).catch(error => {
     console.error(error);
   });

   document.querySelectorAll(".clues-text")[3].innerText = getShortArea(country.area)
   document.querySelectorAll(".clues-text")[4].innerText = getDirections(userInput.value, countryOfTheDay.name.common);
   document.querySelectorAll(".clues-text")[5].innerText = `${country.subregion}`;
   document.querySelectorAll(".clues-svg")[0].src = `${country.flag}`;
   document.querySelectorAll(".clues-svg")[0].id = "country-svg-small";
   document.querySelectorAll(".clues-svg")[0].style = "border-radius: 50%; position: relative; float: left; width: 50%;";
   
   })}