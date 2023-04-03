
// autocomplete search
const input = document.getElementById('userinput');
const suggestionsContainer = document.getElementById('suggestions-container');
suggestionsContainer.classList.add('suggestions-container');
input.addEventListener('input', () => {
  
  const searchTerm = input.value.trim();
  if (searchTerm.length > 2) {
    fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then(response => response.json())
      .then(countries => {
        suggestionsContainer.style.visibility = 'visible';
        const suggestions = countries.map(country => country.name.common);
        suggestions.sort().reverse();
        updateSuggestions(suggestions);
      })
      .catch(error => console.error(error));
  } else {
    updateSuggestions(); 
    
  }
});


// selectable suggestions results and clear suggestions
function updateSuggestions(suggestions) {
  while (suggestionsContainer.firstChild) {
    suggestionsContainer.removeChild(suggestionsContainer.firstChild);
  }
  for (const suggestion of suggestions) {
    const suggestionElem = document.createElement('li');
    suggestionElem.classList.add('suggestions-content');
    suggestionElem.innerHTML = `<strong>${suggestion}</strong>`;

    suggestionElem.addEventListener('click', () => {
      input.value = suggestion;
      updateSuggestions([]);
      suggestionsContainer.style.visibility = "hidden";
    });
    suggestionsContainer.appendChild(suggestionElem);
  }
  
}

export function removeSuggestions(){
  let visableSuggetions = document.querySelectorAll(".suggestions-content");
  visableSuggetions.forEach((name) =>{
    name.remove();
  });
}


export function clearInput(){
  document.querySelector("#userinput").value = "";
}
