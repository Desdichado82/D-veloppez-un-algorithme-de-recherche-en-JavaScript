import { recipes } from '../json/recipes.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';
import { ingredientsDropdown, applianceDropdown, utensilsDropdown, uniqueIngredients, uniqueAppliances, uniqueUtensils } from '../components/dropdown.js';
import { displayAllRecipes, removeAlertMessage } from '../api/api.js';

const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.petiteBtn');
const clearSearchBar = document.querySelector('#clearSearchButton');
let searchTerm = '';

const validSearchTermRegex = /^[a-zA-Z0-9\s\-']+$/;

const validateSearchTerm = searchTerm => validSearchTermRegex.test(searchTerm);

const handleSearchButtonClick = () => {
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
};

const handleSearchInput = () => {
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
};

searchButton.addEventListener('click', handleSearchButtonClick);
searchInput.addEventListener('input', handleSearchInput);

searchInput.addEventListener('input', () => {
  searchTerm = searchInput.value.trim();
  clearSearchBar.style.display = searchTerm.length > 0 ? 'block' : 'none';

  console.log('Input length:', searchTerm.length);
  console.log('Is input valid?', validateSearchTerm(searchTerm));

  if (!validateSearchTerm(searchTerm)) {
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

clearSearchBar.addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  clearSearchBar.style.display = 'none';
  displayAllRecipes();
  resetDropdownOptions();
  removeAlertMessage();
});





const filterRecipes = searchTerm => {
  const cardContainer = document.getElementById('recetteContainer');
  cardContainer.innerHTML = '';

  let matchFound = false;
  const filteredRecipes = recipes.filter(item => {
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
      return true;
    }
    return false;
  });

  if (!matchFound) {
    const alertMessage = `Aucune recette ne contient '${searchTerm}'. Vous pouvez chercher 'tarte aux pommes', 'poisson', etc.`;
    displayAlertMessage(alertMessage);
  } else {
    removeAlertMessage();
  }
  return filteredRecipes;
};

const displayAlertMessage = message => {
  if (!document.querySelector('.alert')) {
    const main = document.getElementById('messageContainer');
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-warning mt-3';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = message;
    main.appendChild(alertDiv);
  }
};

const resetDropdownOptions = () => {
  ingredientsDropdown.updateOptions(uniqueIngredients);
  applianceDropdown.updateOptions(uniqueAppliances);
  utensilsDropdown.updateOptions(uniqueUtensils);
};

const updateDropdownOptions = filteredRecipes => {
  const updatedIngredients = Array.from(
    new Set(filteredRecipes.flatMap(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase())))
  );
  ingredientsDropdown.updateOptions(updatedIngredients);

  const updatedAppliances = Array.from(
    new Set(filteredRecipes.map(recipe => recipe.appliance))
  );
  applianceDropdown.updateOptions(updatedAppliances);

  const updatedUtensils = Array.from(
    new Set(filteredRecipes.flatMap(recipe => recipe.ustensils.map(utensil => utensil)))
  );
  utensilsDropdown.updateOptions(updatedUtensils);
};
