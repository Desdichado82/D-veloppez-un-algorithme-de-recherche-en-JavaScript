import { recipes } from '../json/recipes.js';
import Dropdown from '../components/dropdownClass.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';
import FilterManager from '../components/filterManager.js';


const filterManager = new FilterManager();

export const clearRecipeCards = () => {
    const cardContainer = document.getElementById('recetteContainer');
    cardContainer.innerHTML = '';
};

const displayRecipeCards = (recipesToDisplay) => {
    clearRecipeCards();
   
    recipesToDisplay.forEach(item => {
        const recette = new Recette(item);
        createRecetteCard(recette);
        const card = document.querySelector('.card:last-child');
        card.recetteData = recette;
    });
};


document.querySelectorAll('.select-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});


// ingredients dropdown 

// Function to display recipes based on selected ingredient
const displayRecipesByIngredient = (selectedIngredient) => {
    const filteredRecipes = recipes.filter(recipe => {
        const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
        return ingredients.includes(selectedIngredient.toLowerCase());
    });
    displayRecipeCards(filteredRecipes);
};

// Get the ingredients dropdown element from the DOM
const ingredientsDropdown = new Dropdown('ingredientsContent', [], displayRecipesByIngredient,filterManager);


// Extract unique ingredients from the recipes dataset
const uniqueIngredients = Array.from(
    new Set(recipes.flatMap(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient)))
);

// Populate the ingredients dropdown with unique ingredients
ingredientsDropdown.options = uniqueIngredients;
ingredientsDropdown.initDropdown();


// énd dropdown 

// Function to display recipes based on selected appliance
const displayRecipesByAppliance = (selectedAppliance) => {
    const filteredRecipes = recipes.filter(recipe => {
      const appliances = recipe.appliance.toLowerCase();
      return appliances.includes(selectedAppliance.toLowerCase());
    });
    displayRecipeCards(filteredRecipes);
  };


// Get the appliances dropdown element from the DOM
const applianceDropdown = new Dropdown('appareilsContent', [], displayRecipesByAppliance,filterManager);


// Extract unique appliances from the recipes dataset
const uniqueAppliances = Array.from(
    new Set(recipes.map(recipe => recipe.appliance))
  );

// Populate the appliances dropdown with unique appliances
applianceDropdown.options = uniqueAppliances;
applianceDropdown.initDropdown();


// Function to display recipes based on selected utensil
const displayRecipesByUtensil = (selectedUtensil) => {
    const filteredRecipes = recipes.filter(recipe => {
      const utensils = recipe.ustensils.map(utensil => utensil.toLowerCase());
      return utensils.includes(selectedUtensil.toLowerCase());
    });
    displayRecipeCards(filteredRecipes);
  };
  
  // Get the utensils dropdown element from the DOM
  const utensilsDropdown = new Dropdown('ustensilesContent', [], displayRecipesByUtensil,filterManager);
  
  // Extract unique utensils from the recipes dataset
  const uniqueUtensils = Array.from(
    new Set(recipes.flatMap(recipe => recipe.ustensils.map(utensil => utensil)))
  );
  
  // Populate the utensils dropdown with unique utensils
  utensilsDropdown.options = uniqueUtensils;
  utensilsDropdown.initDropdown();
  //This code is similar to what you did for ingredients and appliances. Create a new function displayRecipesByUtensil to filter recipes based on the selected utensil. Populate the dropdown options with unique utensil names from your dataset and initialize the dropdown as shown above.
  
  
  
  
  
  




