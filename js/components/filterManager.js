import { recipes } from '../json/recipes.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';
import {clearRecipeCards} from '../components/dropdown.js'
import { displayAllRecipes } from '../components/search-bar.js';


export default class FilterManager {
    constructor() {
        this.combinedOptionsArray = []; // Array to store combined selected options
        this.observers = []; // Array to store observer functions
    }

    addObserver(observer) {
        this.observers.push(observer); // Add an observer to the list
    }

    addToCombinedOptions(option) {
        if (!this.combinedOptionsArray.includes(option)) {
            this.combinedOptionsArray.push(option); // Add selected option to combined options
            console.log('Combined options array after adding:', this.combinedOptionsArray);
            
            // Check if there are more than one element in the array before updating recipe cards
            if (this.combinedOptionsArray.length > 1) {
                this.updateRecipeCards(); // Update recipe cards when combined options change
            }
        }
    }

    removeFromCombinedOptions(option) {
        console.log('Removing option:', option); // Add this log to see if the click event works
        const index = this.combinedOptionsArray.indexOf(option);
        if (index !== -1) {
            this.combinedOptionsArray.splice(index, 1); // Remove selected option from combined options
            console.log('Combined options array after removing:', this.combinedOptionsArray);
            if (this.combinedOptionsArray.length === 0) {
                clearRecipeCards(); // Clear existing recipe cards
                recipes.forEach(item => {
                    const recette = new Recette(item);
                    createRecetteCard(recette);
                    const card = document.querySelector('.card:last-child');
                    card.recetteData = recette;
                  });
            } else {
                this.updateRecipeCards(); // Update recipe cards when combined options change
            }
          
        }

       
    }
    updateRecipeCards() {
        clearRecipeCards(); // Clear existing recipe cards
        
        const filteredRecipes = recipes.filter(recipe => {
            const ingredientNames = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
            const applianceName = recipe.appliance.toLowerCase();
            const utensilNames = recipe.ustensils.map(utensil => utensil.toLowerCase());
        
            const combinedOptionsLowerCase = this.combinedOptionsArray.map(option => option.toLowerCase());
        
            // Check if all elements in the combinedOptionsArray are present in the recipe's ingredients, appliance, and utensils
            return (
                combinedOptionsLowerCase.every(option =>
                    ingredientNames.includes(option) || applianceName.includes(option) || utensilNames.includes(option)
                )
            );
        });
        
    
        if (this.combinedOptionsArray.length > 0) {
            if (filteredRecipes.length === 0) {
                console.log('No matches found.'); // Display message if no matches are found
            } else {
                filteredRecipes.forEach(item => {
                    const recette = new Recette(item);
                    createRecetteCard(recette);
                    const card = document.querySelector('.card:last-child');
                    card.recetteData = recette;
                });
            }
        } else {
            // Display all recipes if no combined options are selected
            displayAllRecipes();
        }
    }
    
    

    updateObservers() {
        this.observers.forEach(observer => {
            observer.update(this.activeFilters); // Notify each observer about active filters
        });
    }
}




