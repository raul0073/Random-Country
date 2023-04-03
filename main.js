
import {getShortArea} from "./js/nums.js";
import { returnCountry, createHTML } from "./js/countryreturn.js";
import { wrongAnswer } from "./js/check.js";
import { countryOfTheDay } from "./js/random.js";
import {removeSuggestions, clearInput} from "./js/autocomplete.js"
// import {getRandomCountry} from "/random.js";
//----------------------------------------------------------------\\




// setting searched country to return as clues
const userInput = document.querySelector("#userinput");
const searchBtn = document.querySelector(".btn-search");
// parent for creating elements
const grandParent = document.querySelector('.script-div');
const parent = document.querySelector('.container-clues');
let tries = 0;
let divNum = 0;
const maxTries = 8;


// export variabels
export {userInput, searchBtn, grandParent, tries, maxTries, divNum}

// function to count tries and return country of the day values
function updateTries(){
  if(tries === maxTries) {
    tries+1;
    searchBtn.style = "backgroundColor: grey";
    searchBtn.disabled = true;
    document.querySelector("#userinput").value = "";
    document.querySelector(".country-flag").style = "filter: none;"
    document.querySelector(".feedback").innerText = `Try again tomorrow!`;
    const countryName = document.querySelector(".country-name");
    countryName.innerText = countryOfTheDay.name.common;
    countryName.classList.toggle("visable");
} else{
    tries++;
}};


// start game by searching for country
searchBtn.addEventListener("click", ()=>{
  divNum++;
  updateTries();
  createHTML();
  setTimeout(returnCountry, 2);
  wrongAnswer(); 
  removeSuggestions();
  setTimeout(clearInput, 1000);
});



//hint buttons FLAG
const btnHintFlag = document.querySelector(".hint-flag");
btnHintFlag.innerText = "Reveal Flag";
btnHintFlag.addEventListener("click", ()=>{
  document.querySelector(".country-flag").style = "filter: none;"
} )

// hint buttons AREA SIZE
const btnHintSize = document.querySelector(".hint-size");
btnHintSize.innerText = "Reveal Size";
btnHintSize.addEventListener("click", ()=>{
  btnHintSize.innerText = getShortArea(countryOfTheDay.area);
});