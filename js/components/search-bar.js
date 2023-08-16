import { recipes } from '../json/recipes.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';

// Get the search input element from the DOM
const searchInput = document.getElementById('searchInput');


// Add event listener for the input event on the search input
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Check if the search term has at least three characters
  if (searchTerm.length < 3) {
    // If the search term is less than three characters or empty,
    // display all the recipe cards
    displayAllRecipes();
    removeAlertMessage();
    return;
  }

  // Clear the previous recipe cards from the container
  const cardContainer = document.getElementById('recetteContainer');
  cardContainer.innerHTML = '';

  let matchFound = false;

  // Loop through the data and create recipe cards
  recipes.forEach(item => {
    const recette = new Recette(item);
    const recipeName = recette.name.toLowerCase();
    const description = recette.description.toLowerCase();
    const ingredientList = recette.ingredientList
      .map(ingredient => ingredient.ingredient.toLowerCase())
      .join(' ');

    // Check if the recipe name or ingredient list contains the search term
    if (recipeName.includes(searchTerm) || ingredientList.includes(searchTerm)|| description.includes(searchTerm)) {
      createRecetteCard(recette);
      const card = document.querySelector('.card:last-child');
      card.recetteData = recette;
      matchFound = true;
    }
  });

  if (!matchFound) {
    displayAlertMessage(searchTerm);
  } else {
    removeAlertMessage();
  }
}

export function displayAllRecipes() {
  const cardContainer = document.getElementById('recetteContainer');
  cardContainer.innerHTML = '';
  recipes.forEach(item => {
    const recette = new Recette(item);
    createRecetteCard(recette);
    const card = document.querySelector('.card:last-child');
    card.recetteData = recette;
  });
  removeAlertMessage();
}

function displayAlertMessage(searchTerm) {
  if (!document.querySelector('.alert')) {
    const mainHeader = document.getElementById('main-header');
    const alertMessage = `Aucune recette ne contient '${searchTerm}'. Vous pouvez chercher 'tarte aux pommes', 'poisson', etc.`;
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-warning mt-3';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = alertMessage;
    mainHeader.appendChild(alertDiv);
  }
}

function removeAlertMessage() {
  const alertDiv = document.querySelector('.alert');
  if (alertDiv) {
    alertDiv.remove();
  }
}



