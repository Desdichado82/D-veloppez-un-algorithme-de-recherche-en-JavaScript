
export function searchRecipesFunctional(searchTerm) {
    const isMatch = (recette) => {
      const recipeName = recette.name.toLowerCase();
      const description = recette.description.toLowerCase();
      const ingredientList = recette.ingredientList
        .map(ingredient => ingredient.ingredient.toLowerCase())
        .join(' ');
  
      return recipeName.includes(searchTerm) || ingredientList.includes(searchTerm) || description.includes(searchTerm);
    };
  
    return recipes.filter(isMatch);
  }

  export function searchRecipesImperative(searchTerm) {
    const filteredRecipes = [];
  
    for (let i = 0; i < recipes.length; i++) {
      const recette = new Recette(recipes[i]);
      const recipeName = recette.name.toLowerCase();
      const description = recette.description.toLowerCase();
      let ingredientListMatches = false;
  
      for (let j = 0; j < recette.ingredientList.length; j++) {
        const ingredient = recette.ingredientList[j].ingredient.toLowerCase();
        if (ingredient.includes(searchTerm)) {
          ingredientListMatches = true;
          break;
        }
      }
  
      if (recipeName.includes(searchTerm) || ingredientListMatches || description.includes(searchTerm)) {
        filteredRecipes.push(recipes[i]);
      }
    }
  
    return filteredRecipes;
  }