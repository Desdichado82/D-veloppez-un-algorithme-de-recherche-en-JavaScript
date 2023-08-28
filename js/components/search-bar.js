import { recipes } from '../json/recipes.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';
import { ingredientsDropdown, applianceDropdown, utensilsDropdown, uniqueIngredients, uniqueAppliances, uniqueUtensils } from '../components/dropdown.js';
import { displayAllRecipes, removeAlertMessage } from '../api/api.js';

const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.petiteBtn');
const clearSearchBar = document.querySelector('#clearSearchButton');
let searchTerm = '';

// Regular expressions for input validation
const validSearchTermRegex = /^[a-zA-Z0-9\s\-']+$/; // Only letters, numbers, spaces, hyphens, and single quotes

// Validate the search term against the regular expression
function validateSearchTerm(searchTerm) {
  return validSearchTermRegex.test(searchTerm);
}

// Add event listeners
searchButton.addEventListener('click', handleSearchButtonClick);
searchInput.addEventListener('input', handleSearchInput);

// Handle input event on search input
searchInput.addEventListener('input', function () {
  searchTerm = searchInput.value.trim();
  clearSearchBar.style.display = searchTerm.length > 0 ? 'block' : 'none';

  if (!validateSearchTerm(searchTerm)) {
    // Invalid input
    console.log('Input invalid');
    searchInput.value = '';
    return;
  }

  if (searchTerm.length === 0) {
    displayAllRecipes();
    resetDropdownOptions();
    removeAlertMessage();
  } else if (searchTerm.length >= 3) {
    const filteredRecipes = filterRecipes(searchTerm);
    updateDropdownOptions(filteredRecipes);
  }
});

// Handle clearSearchBar click event
clearSearchBar.addEventListener('click', function () {
  searchInput.value = '';
  searchTerm = '';
  clearSearchBar.style.display = 'none';
  displayAllRecipes();
  resetDropdownOptions();
  removeAlertMessage();
});

function handleSearchInput() {
  searchTerm = searchInput.value.trim();

  if (searchTerm.length === 0) {
    displayAllRecipes();
    resetDropdownOptions();
    removeAlertMessage();
    return;
  }

  if (searchTerm.length >= 3) {
    filterRecipes(searchTerm);
  }
}

function handleSearchButtonClick() {
  searchTerm = searchInput.value.trim();

  if (searchTerm.length < 3) {
    displayAllRecipes();
    const alertMessage = `vous devez saisir plus de deux caractères pour effectuer une recherche`;
    displayAlertMessage(alertMessage);
    return;
  }

  if (searchTerm.length === 0) {
    displayAllRecipes();
    removeAlertMessage();
    resetDropdownOptions();
    return;
  }

  filterRecipes(searchTerm);
}

function filterRecipes(searchTerm) {
  const cardContainer = document.getElementById('recetteContainer');
  cardContainer.innerHTML = '';

  let matchFound = false;
  const filteredRecipes = [];

  for (let i = 0; i < recipes.length; i++) {
    const item = recipes[i];
    const recette = new Recette(item);
    const recipeName = recette.name.toLowerCase();
    const description = recette.description.toLowerCase();

    let ingredientListMatches = false;
    for (let j = 0; j < recette.ingredientList.length; j++) {
      const ingredient = recette.ingredientList[j].ingredient.toLowerCase();
      if (ingredient.includes(searchTerm)) {
        ingredientListMatches = true;
        break;
      }
    }

    if (recipeName.includes(searchTerm) || ingredientListMatches || description.includes(searchTerm)) {
      createRecetteCard(recette);
      const card = document.querySelector('.card:last-child');
      card.recetteData = recette;
      filteredRecipes.push(recette);
      matchFound = true;
    }
  }

  if (!matchFound) {
    const alertMessage = `Aucune recette ne contient '${searchTerm}'. Vous pouvez chercher 'tarte aux pommes', 'poisson', etc.`;
    displayAlertMessage(alertMessage);
  } else {
    removeAlertMessage();
  }
  return filteredRecipes;
}

function displayAlertMessage(message) {
  if (!document.querySelector('.alert')) {
    const main = document.getElementById('messageContainer');
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-warning mt-3';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = message;
    main.appendChild(alertDiv);
  }
}

function resetDropdownOptions() {
  ingredientsDropdown.updateOptions(uniqueIngredients);
  applianceDropdown.updateOptions(uniqueAppliances);
  utensilsDropdown.updateOptions(uniqueUtensils);
}

function updateDropdownOptions(filteredRecipes) {
  const updatedUniqueIngredients = [];
  const updatedUniqueAppliances = [];
  const updatedUniqueUtensils = [];

  for (let i = 0; i < filteredRecipes.length; i++) {
    const recipe = filteredRecipes[i];

    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ingredient = recipe.ingredients[j].ingredient;
      if (!updatedUniqueIngredients.includes(ingredient)) {
        updatedUniqueIngredients.push(ingredient);
      }
    }

    const appliance = recipe.appliance;
    if (!updatedUniqueAppliances.includes(appliance)) {
      updatedUniqueAppliances.push(appliance);
    }

    for (let j = 0; j < recipe.ustensils.length; j++) {
      const utensil = recipe.ustensils[j];
      if (!updatedUniqueUtensils.includes(utensil)) {
        updatedUniqueUtensils.push(utensil);
      }
    }
  }

  ingredientsDropdown.updateOptions(updatedUniqueIngredients);
  applianceDropdown.updateOptions(updatedUniqueAppliances);
  utensilsDropdown.updateOptions(updatedUniqueUtensils);
}
