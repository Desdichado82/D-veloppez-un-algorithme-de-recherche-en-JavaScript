import {recipes} from '../json/recipes.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';


// Remove this line: const recipeDataUrl = recipes;
// Since `recipes` is already an array of data, you don't need to fetch it.

// Loop through the data and create recipe cards
// Loop through the data and create recipe cards
recipes.forEach(item => {
  const recette = new Recette(item);
  createRecetteCard(recette);
  const card = document.querySelector('.card:last-child');
  card.recetteData = recette;
});

export const clearRecipeCards = () => {
  const cardContainer = document.getElementById('recetteContainer');
  cardContainer.innerHTML = '';
};

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

export function removeAlertMessage() {
  const alertDiv = document.querySelector('.alert');
  if (alertDiv) {
    alertDiv.remove();
  }
}
