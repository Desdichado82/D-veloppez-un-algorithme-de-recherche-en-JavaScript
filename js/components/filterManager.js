import { recipes } from '../json/recipes.js';
import Recette from '../modules/recette.js';
import { createRecetteCard } from '../factories/recette-carteFactory.js';


export default class FilterManager {
    constructor() {
        this.activeFilters = {
            ingredients: [], // Array to store selected ingredients
            appliances: [],  // Array to store selected appliances
            utensils: []     // Array to store selected utensils
        };
        this.combinedOptionArray = []; // Array to store combined selected options
        this.observers = [];            // Array to store observer functions
    }

    addObserver(observer) {
        this.observers.push(observer); // Add an observer to the list
    }

    updateFilters(filterType, filterValue) {
        if (this.activeFilters[filterType].includes(filterValue)) {
            // If filter is already selected, remove it
            this.activeFilters[filterType] = this.activeFilters[filterType].filter(filter => filter !== filterValue);
        } else {
            // If filter is not selected, add it
            this.activeFilters[filterType].push(filterValue);
        }
        this.updateObservers(); // Notify observers about filter changes
        console.log('Updated filters:', this.activeFilters);
    }

    addToCombinedOptions(option) {
        if (!this.combinedOptionArray.includes(option)) {
            this.combinedOptionArray.push(option); // Add selected option to combined options
            console.log('Combined options array after adding:', this.combinedOptionsArray);
        }
    }

    removeFromCombinedOptions(option) {
        const index = this.combinedOptionArray.indexOf(option);
        if (index !== -1) {
            this.combinedOptionArray.splice(index, 1); // Remove selected option from combined options
            console.log('Combined options array after removing:', this.combinedOptionsArray);
        }
    }

    updateRecipeCards() {
        const filteredRecipes = recipes.filter(recipe => {
            const ingredientNames = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
            const applianceName = recipe.appliance.toLowerCase();
            const utensilNames = recipe.ustensils.map(utensil => utensil.toLowerCase());

            return (
                this.combinedOptionArray.every(filter => ingredientNames.includes(filter)) &&
                this.combinedOptionArray.every(filter => applianceName.includes(filter)) &&
                this.combinedOptionArray.every(filter => utensilNames.includes(filter))
            );
        });

        clearRecipeCards();
        filteredRecipes.forEach(item => {
            const recette = new Recette(item);
            createRecetteCard(recette);
            const card = document.querySelector('.card:last-child');
            card.recetteData = recette;
        });
    }

    updateObservers() {
        this.observers.forEach(observer => {
            observer.update(this.activeFilters); // Notify each observer about active filters
        });
    }
}

