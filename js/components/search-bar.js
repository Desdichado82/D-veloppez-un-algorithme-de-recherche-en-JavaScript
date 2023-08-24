import { recipes } from '../json/recipes.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';


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
    removeAlertMessage();
  } else if (searchTerm.length >= 3) {
    filterRecipes(searchTerm);
  }
});

// Handle clearSearchBar click event
clearSearchBar.addEventListener('click', function() {
  searchInput.value = '';
  searchTerm = '';
  clearSearchBar.style.display = 'none';
  displayAllRecipes();
  removeAlertMessage();
});

function handleSearchInput() {
  searchTerm = searchInput.value.trim();
  if (searchTerm.length === 0) {
    displayAllRecipes();
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
    return;
  }

  filterRecipes(searchTerm);
}

function filterRecipes(searchTerm) {
  const cardContainer = document.getElementById('recetteContainer');
  cardContainer.innerHTML = '';

  let matchFound = false;

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
      matchFound = true;
    }
  }

  if (!matchFound) {
    const alertMessage = `Aucune recette ne contient '${searchTerm}'. Vous pouvez chercher 'tarte aux pommes', 'poisson', etc.`;
    displayAlertMessage(alertMessage);
  } else {
    removeAlertMessage();
  }
}

export function displayAllRecipes() {
  const cardContainer = document.getElementById('recetteContainer');
  cardContainer.innerHTML = '';

  for (let i = 0; i < recipes.length; i++) {
    const item = recipes[i];
    const recette = new Recette(item);
    createRecetteCard(recette);
    const card = document.querySelector('.card:last-child');
    card.recetteData = recette;
  }

  removeAlertMessage();
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

function removeAlertMessage() {
  const alertDiv = document.querySelector('.alert');
  if (alertDiv) {
    alertDiv.remove();
  }
}
