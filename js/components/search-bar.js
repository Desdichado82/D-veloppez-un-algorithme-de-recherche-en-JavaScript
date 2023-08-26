import { recipes } from '../json/recipes.js';
import { displayAllRecipes,removeAlertMessage} from '../api/api.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';
import { ingredientsDropdown, applianceDropdown, utensilsDropdown } from '../components/dropdown.js'; // Import the dropdown instances


const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.petiteBtn');
const clearSearchBar = document.querySelector('#clearSearchButton');
let searchTerm = '';

// Add event listeners using arrow functions
searchButton.addEventListener('click', handleSearchButtonClick);
searchInput.addEventListener('input', handleSearchInput);

// Handle input event on search input
searchInput.addEventListener('input', function() {
  searchTerm = searchInput.value.trim();
  clearSearchBar.style.display = searchTerm.length > 0 ? 'block' : 'none';
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
clearSearchBar.addEventListener('click', function() {
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
    const ingredientList = recette.ingredientList
      .map(ingredient => ingredient.ingredient.toLowerCase())
      .join(' ');

    if (recipeName.includes(searchTerm) || ingredientList.includes(searchTerm) || description.includes(searchTerm)) {
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
  const uniqueIngredients = Array.from(
    new Set(filteredRecipes.flatMap(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient)))
  );
  ingredientsDropdown.updateOptions(uniqueIngredients);

  const uniqueAppliances = Array.from(
    new Set(filteredRecipes.map(recipe => recipe.appliance))
  );
  applianceDropdown.updateOptions(uniqueAppliances);

  const uniqueUtensils = Array.from(
    new Set(filteredRecipes.flatMap(recipe => recipe.ustensils.map(utensil => utensil)))
  );
  utensilsDropdown.updateOptions(uniqueUtensils);
}

