const settings = document.querySelector("#settings");
const rules = document.querySelector("#rules");
const contact = document.querySelector("#contact");
const homepage = document.querySelector("#home");
var parent = document.querySelector(".container");
const flag = document.querySelector(".container-flag")
const search = document.querySelector(".container-search")
const feedback = document.querySelector(".container-clues-feed")
const suggestions = document.querySelector(".suggestions-container")
var settingsContent = document.querySelector(".settings-content")
var rulesContent = document.querySelector(".rules-content")
var contactContent = document.querySelector(".contact-content")
const tabs = document.querySelectorAll(".tabItem");

var main = document.querySelector('main');
// content by classes


// add active class to clicked tab item and remove previous
tabs.forEach((tab)=>{
  tab.addEventListener("click", () =>{
    tabs.forEach((tab)=>{
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

// open rules content and hide searc bar and flag
rules.addEventListener("click", () =>{
  parent.className = "container";
    parent.className = "container rules";
    const children = parent.children;
    for(let child = 1; child < children.length; child++){
      children[child].style.display = "none";
    };
    rulesContent.style.display = "block";
    const divs = rulesContent.children;
    for(let child = 0; child < divs.length; child++){
      divs[child].style.display = "block";
    };
});

// open settings content and hide searc bar and flag
settings.addEventListener("click", () =>{
  parent.className = "container";
    parent.className = "container settings";
    const children = parent.children;
    for(let child = 1; child < children.length; child++){
      children[child].style.display = "none";
    };
    settingsContent.style.display = "block";
    const divs = settingsContent.children;
    for(let child = 0; child < divs.length; child++){
      divs[child].style.display = "block";
    };
});

// open rules content and hide searc bar and flag
contact.addEventListener("click", () =>{
  if(parent.className = "container"){
    parent.className = "container contact";
    const children = parent.children;
    for(let child = 1; child < children.length; child++){
      children[child].style.display = "none";
    };
    contactContent.style.display = "block";
    const divs = contactContent.children;
    for(let child = 0; child < divs.length; child++){
      divs[child].style.display = "block";
    };
  } 
}) 


// homepage tab
homepage.addEventListener("click", () =>{
    closePopUp()
}
);


// function to close all content from pop up and return home screen
const closeSettings = ()=>{
  // change class and display for homepage content
  parent.className = "container";
    flag.style.display = "block";
    search.style.display = "flex";
    feedback.style.display = "flex";
    suggestions.style.display = "block"
    homepage.classList.add("active");
    settings.classList.remove("active");
  // do not display 
    settingsContent.style.display = "none";
     divs = settingsContent.children;
    for(let child = 0; child < divs.length; child++){
      divs[child].style.display = "none";
    };
  }
const closeRules = ()=>{
  // change class and display for homepage content
  parent.className = "container";
    flag.style.display = "block";
    search.style.display = "flex";
    feedback.style.display = "flex";
    suggestions.style.display = "block"
    homepage.classList.add("active");
    rules.classList.remove("active");
  // do not display    
    rulesContent.style.display = "none";
     divs = rulesContent.children;
    for(let child = 0; child < divs.length; child++){
      divs[child].style.display = "none";
    };
  }

const closeContact = ()=>{
  // change class and display for homepage content
  parent.className = "container";
    flag.style.display = "block";
    search.style.display = "flex";
    feedback.style.display = "flex";
    suggestions.style.display = "block"
    homepage.classList.add("active");
    contact.classList.remove("active");
  // do not display 
    contactContent.style.display = "none";
     divs = contactContent.children;
    for(let child = 0; child < divs.length; child++){
      divs[child].style.display = "none";
    };
      }


let btn = document.querySelector("#btn-close-settings");
btn.addEventListener("click", closeSettings);

btn = document.querySelector("#btn-close-rules");
btn.addEventListener("click", closeRules);

btn = document.querySelector("#btn-close-contact");
btn.addEventListener("click", closeContact);