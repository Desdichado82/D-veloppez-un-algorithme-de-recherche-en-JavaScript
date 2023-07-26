
export const createRecetteCard =(recette)=>{
   const cardContainer = document.getElementById('recetteContainer');

   // create card div 
   const cardArticle = document.createElement('article');
   cardArticle.className = 'card mb-3';

   //Create card body
   const cardBody = document.createElement('div');
   cardBody.className = 'card-body';
   // Create card title (recipe name)
   const cardTitle = document.createElement('h5');
   cardTitle.className ='card-title';
   cardTitle.textContent = recette.name;

   // Create card image container
const cardImageContainer = document.createElement('div');
cardImageContainer.className = 'position-relative'; // Add a class for positioning


   // Create card image 
   const cardImage = document.createElement('img');
   cardImage.className = 'card-img-top';
   cardImage.src = recette.image;
   cardImage.alt = recette.name;

   // Create badge element for time
const cardTimeBadge = document.createElement('span');
cardTimeBadge.className = 'badge bg-warning position-absolute top-0 end-0';
cardTimeBadge.textContent = `${recette.time} min`;



   // create Card ingredients list 
   const ingredientsTitle = document.createElement('h6');
   ingredientsTitle.className ='card-subtitle mb-2 text-body-secondary';
   ingredientsTitle.textContent = "Ingrédients".toUpperCase();
   
     // Create card ingredients list
  const cardIngredientsList = document.createElement('div');
  cardIngredientsList.className = 'ingredients-list';
  recette.ingredientList.forEach(({ ingredient, quantity, unit }) => {
    const ingredientRow = document.createElement('div');
    ingredientRow.className = 'd-flex flex-column mb-3';

    // Create separate tags for ingredient, quantity, and unit
    const ingredientTag = document.createElement('span');
    ingredientTag.className = 'ingredient';
    ingredientTag.textContent = ingredient;

    const quantityAndUnitTag = document.createElement('span');
    quantityAndUnitTag.className = 'quantity-unit';
    quantityAndUnitTag.textContent = `${quantity && unit ? ` ${quantity} ${unit}` : ''}`;

    // Append each tag to the ingredient row
    ingredientRow.appendChild(ingredientTag);
    ingredientRow.appendChild(quantityAndUnitTag);

    cardIngredientsList.appendChild(ingredientRow);
  });

   // Create card description
   const recetteTitle = document.createElement('h6');
   recetteTitle.className ='card-subtitle mb-2 text-body-secondary';
   recetteTitle.textContent = "Recette".toUpperCase();

   const cardDescription =document.createElement('p');
   cardDescription.className = 'card-text';
   cardDescription.textContent = recette.description;

   // Append elements to the card body
   // Append the image to the container
   
    cardArticle.appendChild(cardImageContainer);
    cardImageContainer.appendChild(cardImage);
    cardImageContainer.appendChild(cardTimeBadge);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(recetteTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(ingredientsTitle);
    cardBody.appendChild(cardIngredientsList); // Append ingredients list before the description
    // Append card body to the card article 
    cardArticle.appendChild(cardBody);
    // append the card Article to the container 
    cardContainer.appendChild(cardArticle);
}


