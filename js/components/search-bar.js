

const recipeCardIncludesSearchTerm = (card, searchTerm) =>{
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const recipeName = card.querySelector('.card-title').textContent.toLowerCase();
    const ingredients = card.querySelectorAll('.ingredient');
    const description = card.querySelector('.card-text').textContent.toLowerCase();

    //check if the recipe name or description contains the search term

    if(recipeName.includes(lowerCaseSearchTerm)  || description.includes(lowerCaseSearchTerm))
    {
        return true;
    }

    // check if any ingredient contains the search term 

    for(let i =0; i< ingredients.length;i++){
        const ingredient = ingredients[i].textContent.toLowerCase();
        if(ingredient.includes(lowerCaseSearchTerm)){
            return true;
        }
    }

    return false;
};

let searchTerm = ''; // Move searchTerm declaration outside the function

const searchRecipes = () => {
  const searchInput = document.getElementById('searchInput');
  searchTerm = searchInput.value.trim(); // Update the global searchTerm value
  const recipeCards = document.querySelectorAll('.card');
  const mainHeader = document.getElementById('main-header');
  let matchFound = false;

  if (searchTerm.length >= 3) {
    recipeCards.forEach((card) => {
      const isVisible = recipeCardIncludesSearchTerm(card, searchTerm);
      card.style.display = isVisible ? 'block' : 'none';
      if (isVisible) matchFound = true;
    });
  } else {
    recipeCards.forEach((card) => {
      card.style.display = 'block';
    });
    searchTerm = ''; // Clear searchTerm when input value is empty
  }

  const alertDiv = document.querySelector('.alert');
  if (!matchFound && !alertDiv && searchTerm) {
    const alertMessage = ` Aucune recette ne contient '${searchTerm}'. vous pouvez chercher 'tarte aux pommes', 'poisson', etc.`;
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger mt-3';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.textContent = alertMessage;
    mainHeader.appendChild(alertDiv);
  } else if ((matchFound || !searchTerm) && alertDiv) {
    alertDiv.remove();
  }
};

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  searchRecipes();
});