import recipes from '../json/recipes.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';

// Function to extract unique items from an array
const getUniqueItems = (array) => [...new Set(array)];

// Function to generate dropdown options based on an array of items
const generateDropdownOptions = (items, filterInput, filterCallback) => {
  const optionsList = document.createElement('ul');
  optionsList.className = 'options';
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.addEventListener('click', () => {
      console.log(`Selected item: ${item}`);
      filterInput.value = item;
      filterCallback();
    });
    optionsList.appendChild(listItem);
  });
  return optionsList;
};


// Function to update the recipe cards based on selected options
const updateFilters = () => {
  // Clear the recetteContainer before repopulating with filtered cards
  const recetteContainer = document.getElementById('recetteContainer');
  recetteContainer.innerHTML = '';

  const ingredientsFilter = document.getElementById('ingredientsFilter').value.trim();
  const appareilsFilter = document.getElementById('appareilsFilter').value.trim();
  const ustensilesFilter = document.getElementById('ustensilesFilter').value.trim();

  const recipeCards = document.querySelectorAll('.card');
  let totalResults = 0;


  recipeCards.forEach(card => {
    const recette = card.recetteData;

    const ingredientMatches = ingredientsFilter ? recette.ingredients.includes(ingredientsFilter) : true;
    const appareilMatches = appareilsFilter ? recette.appliance.includes(appareilsFilter) : true;
    const ustensileMatches = ustensilesFilter ? recette.ustensils.includes(ustensilesFilter) : true;

    const isVisible = ingredientMatches || appareilMatches || ustensileMatches;

    // Log card data for debugging
    console.log('Card:', card);
    console.log('Recette:', recette);

    if (isVisible) {
      // Declare the card variable before the loop
      let card;

      // Assign the card value inside the loop
      card = createRecetteCard(recette);
      card.recetteData = recette;
      recetteContainer.appendChild(card);
      totalResults++;
    }
  });

  const recettesTotalContainer = document.getElementById('recettesTotalContainer');
  const totalTag = recettesTotalContainer.querySelector('.totalTag');
  totalTag.textContent = totalResults === 1 ? 'Recette' : 'Recettes';
};



// Function to handle the search input event
const handleSearchInputEvent = (filterInput, filterCallback) => {
  const userInput = filterInput.value.trim();
  console.log(`User input for ${filterInput.id}: ${userInput}`);
  if (userInput.length >= 3) {
    filterCallback();
  } else if (userInput.length === 0) {
    filterCallback();
  }
};

// Function to create a tag element with a close button
const createTagElement = (text) => {
  const tagElement = document.createElement('div');
  tagElement.className = 'tag';
  tagElement.textContent = text;
  const closeButton = document.createElement('span');
  closeButton.textContent = 'x';
  closeButton.className = 'close-button';
  closeButton.addEventListener('click', handleTagClose);
  tagElement.appendChild(closeButton);
  return tagElement;
};

// Function to handle the tag close button click
const handleTagClose = (event) => {
  const tagElement = event.target.parentNode;
  const selectedTagsContainer = document.getElementById('selectedTagsContainer');
  selectedTagsContainer.removeChild(tagElement);
  updateFilters();
};

// Extract unique ingredients, appliances, and utensils from the recipe dataset
const allIngredients = recipes.flatMap(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient));
const allAppliances = recipes.map(recipe => recipe.appliance);
const allUtensils = recipes.flatMap(recipe => recipe.ustensils);
const uniqueIngredients = getUniqueItems(allIngredients).sort();
const uniqueAppliances = getUniqueItems(allAppliances).sort();
const uniqueUtensils = getUniqueItems(allUtensils).sort();

// Generate dropdown options for ingredients, appliances, and utensils
const ingredientsFilterInput = document.getElementById('ingredientsFilter');
console.log('All Ingredients:', allIngredients);
const ingredientsDropdown = generateDropdownOptions(uniqueIngredients, ingredientsFilterInput, updateFilters);
console.log('Ingredients Dropdown:', ingredientsDropdown);

const appareilsFilterInput = document.getElementById('appareilsFilter');
console.log('All Appliances:', allAppliances);
const appareilsDropdown = generateDropdownOptions(uniqueAppliances, appareilsFilterInput, updateFilters);
console.log('Appliances Dropdown:', appareilsDropdown);

const ustensilesFilterInput = document.getElementById('ustensilesFilter');
console.log('All Utensils:', allUtensils);
const ustensilesDropdown = generateDropdownOptions(uniqueUtensils, ustensilesFilterInput, updateFilters);
console.log('Utensils Dropdown:', ustensilesDropdown);

// Add dropdown options to their respective containers
document.getElementById('ingredientsContent').appendChild(ingredientsDropdown);
document.getElementById('appareilsContent').appendChild(appareilsDropdown);
document.getElementById('ustensilesContent').appendChild(ustensilesDropdown);

// Add event listeners for search inputs
ingredientsFilterInput.addEventListener('input', () => handleSearchInputEvent(ingredientsFilterInput, updateFilters));
appareilsFilterInput.addEventListener('input', () => handleSearchInputEvent(appareilsFilterInput, updateFilters));
ustensilesFilterInput.addEventListener('input', () => handleSearchInputEvent(ustensilesFilterInput, updateFilters));

// Create the selected tags container and append it to #main-header
const selectedTagsContainer = document.createElement('div');
selectedTagsContainer.id = 'selectedTagsContainer';
document.getElementById('main-header').appendChild(selectedTagsContainer);

// Loop through the data and create recipe cards
recipes.forEach(item => {
  const recette = new Recette(item);
  createRecetteCard(recette);
  const card = document.querySelector('.card:last-child');
  card.recetteData = recette;
});

document.querySelectorAll('.select-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});

// Adding a console log to indicate the script execution completed
console.log('Script executed successfully!');
