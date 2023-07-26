import recipes from '../json/recipes.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';

// Remove this line: const recipeDataUrl = recipes;
// Since `recipes` is already an array of data, you don't need to fetch it.

// Loop through the data and create recipe cards
recipes.forEach(item => {
  const recette = new Recette(item);
  createRecetteCard(recette);
});