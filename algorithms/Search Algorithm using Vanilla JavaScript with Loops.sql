/*Pseudo code for Search Algorithm using Vanilla JavaScript with Loops*/

function recipeCardIncludesSearchTerm(card, searchTerm):
    lowerCaseSearchTerm = convertToLowercase(searchTerm)
    recipeName = getLowerCaseRecipeName(card)
    ingredients = getLowerCaseIngredients(card)
    description = getLowerCaseDescription(card)

    if recipeName contains lowerCaseSearchTerm or
       any ingredient in ingredients contains lowerCaseSearchTerm or
       description contains lowerCaseSearchTerm:
        return true
    else:
        return false

function searchRecipes(input):
    searchTerm = trim(input)
    recipeCards = getAllRecipeCards()

    if searchTerm length is greater than or equal to 3:
        for each card in recipeCards:
            isVisible = recipeCardIncludesSearchTerm(card, searchTerm)
            if isVisible:
                display card
            else:
                hide card
    else:
        for each card in recipeCards:
            display card

const searchInput = document.getElementById('searchInput')
searchInput.addEventListener('input', function():
    userInput = searchInput value
    call searchRecipes(userInput)
})

/* Steps taken by the algorithm.*/

1.Start.

2. Define the function recipeCardIncludesSearchTerm(card, searchTerm):
a. Get the lowerCaseSearchTerm by converting searchTerm to lowercase.
b. Get the recipeName by getting the lowercase text content of the card title.
c. Get the list of ingredients by selecting all elements with the class 'ingredient' and converting their text content to lowercase.
d. Get the description by getting the lowercase text content of the card description.
e. Check if the recipeName, ingredients, or description contains the lowerCaseSearchTerm:

If any of them contains the lowerCaseSearchTerm, return true.
Otherwise, return false.
3.Define the function searchRecipes(input):
a. Get the searchTerm by trimming the input.
b. Get the list of all recipe cards and store them in recipeCards.
c. If the searchTerm length is greater than or equal to 3:

Loop through each card in recipeCards.
Check if the card matches the searchTerm using recipeCardIncludesSearchTerm.
If it matches, display the card.
If it doesnt match, hide the card.
d. Else (if the searchTerm length is less than 3 or empty):
Loop through each card in recipeCards.
Display the card.

4. Get the searchInput element by its ID and store it in searchInput.

5. Add an event listener to searchInput for the input event:
a. Get the user input from searchInput and store it in userInput.
b. Call the searchRecipes function with userInput as the argument.

6.End.

The algorithm defines two functions: recipeCardIncludesSearchTerm and searchRecipes.
The recipeCardIncludesSearchTerm function checks if a specific recipe card matches the search term,
while the searchRecipes function manages the display of the recipe cards based on the users input.
When the user clears the input or enters less than 3 characters, all recipes will be displayed again.


