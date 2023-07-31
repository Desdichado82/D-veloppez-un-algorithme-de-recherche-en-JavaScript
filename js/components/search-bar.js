

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

const searchRecipes = input =>{
    const searchTerm = input.trim();
    const recipeCards = document.querySelectorAll('.card');

    recipeCards.forEach(card=>{
        const isVisible = recipeCardIncludesSearchTerm(card,searchTerm);
        card.style.display = isVisible ?'block' : 'none';
    });
};

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', ()=>{
    const userInput = searchInput.value;

    if(userInput.length >= 3){
        searchRecipes(userInput);
    }else{
          // If the input is less than 3 characters or empty, display all recipes
    const recipeCards = document.querySelectorAll('.card');
    recipeCards.forEach(card => {
      card.style.display = 'block';
    });
    }
});