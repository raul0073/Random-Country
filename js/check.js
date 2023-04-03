import { getCountries, getIndependenceYear} from "./api.js";
import {userInput, searchBtn, grandParent, tries, maxTries, divNum} from "../main.js";
import { countryOfTheDay } from "./random.js";


// function for wrongAnswer
// function to fetch country object from search input
export function wrongAnswer(input) {
   // trageting input value 
   input = document.getElementById('userinput').value

   //looping throught countries using getCountries function (from api.js)
   getCountries(input).then(country => {
 
     // is userinput matching to countryoftheday
     if (countryOfTheDay.name.common.toLowerCase() === country.name.toLowerCase()) {
 
       // select svgs ** selectes only last 5 svgs to add class green
       const svgs = document.querySelectorAll(".clues-svg");
      
       // calc to get 6 last svgs after search
       let calc1 = (divNum - 1) *6
       let padding = svgs.length - calc1
 
       // looping throught all but country flag svg 1st
       for(let k = 1; k < padding; k++) {
         svgs[k].classList.add('green');
         svgs[k].src = "/images/correct.svg";
       }
       const parent = document.querySelector(".container-clues-feed");
       let newBoxReview = document.createElement("img");
       newBoxReview.classList.add(`box-review`);
       newBoxReview.id = `tryno-${tries}`;
       newBoxReview.src = "/images/correct.svg";
       parent.insertAdjacentElement("beforeend",newBoxReview);
 
       document.querySelector(".country-flag").style = "filter: none;"
       const countryName = document.querySelector(".country-name");
       countryName.innerText = countryOfTheDay.name.common;
       countryName.classList.toggle("visable");

       document.querySelector(".feedback").innerText = `Congratulations! You Won! in ${tries} tries.`
     }
 
 
     else{
       // comparing population and returning svgs accordingly
       if(countryOfTheDay.population < country.population){
         const svgs = document.querySelectorAll(".clues-svg");
         svgs[1].style = "transform: rotate(180deg);"; 
       }
       if(countryOfTheDay.population === country.population){
         const svgs = document.querySelectorAll(".clues-svg");
         svgs[1].style = "transform: rotate(180deg);"; 
         svgs[1].classList.add("green");
       }
 
       // fetching country searched year of independance from smayo api
       getIndependenceYear(country.name).then(year => {
         country.year = year;
         // comparing with country of the day year
         if(countryOfTheDay.year === country.year ){
           // replacing svg accordingly
           const svgs = document.querySelectorAll(".clues-svg");
           svgs[2].src = "/images/correct.svg";
           svgs[2].classList.add("green");
         }
         if(countryOfTheDay.year < country.year ){
           // replacing svg accordingly
           const svgs = document.querySelectorAll(".clues-svg");
           svgs[2].style = "transform: rotate(180deg);"; 
           }
       }).catch(error => {
         console.error(error)});
          
       // comparing area size and returning svgs accordingly
       if(countryOfTheDay.area < country.area){
         const svgs = document.querySelectorAll(".clues-svg");
         svgs[3].style = "transform: rotate(180deg);";
       };

       // if the same sub region, returns green location svg
       if(countryOfTheDay.subregion === country.subregion){
         const svgs = document.querySelectorAll(".clues-svg");
         svgs[5].src = "./images/correct.svg"; 
         svgs[5].classList.add("green");
       };
       if(countryOfTheDay.subregion !== country.subregion){
        const svgs = document.querySelectorAll(".clues-svg");
        svgs[5].src = "./images/wrong.svg"; 
      };
       
       // add box with X for every missed try
       const parent = document.querySelector(".container-clues-feed");
       let newBoxReview = document.createElement("img");
       newBoxReview.classList.add("box-review");
       newBoxReview.id = `tryno-${tries}`;
       newBoxReview.src = "/images/wrong.svg";
       parent.insertAdjacentElement("beforeend",newBoxReview);
       
       document.querySelector(".feedback").innerText = `${maxTries - tries} left`;
 
     }  
   }).catch(error => console.error(error));
}
 
 
 