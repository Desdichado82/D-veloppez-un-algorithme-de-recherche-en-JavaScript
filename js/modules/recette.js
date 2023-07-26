export default class Recette{
    constructor(item){
        this._id = item.id
        this._image = item.image
        this._name = item.name
        this._servings = item.servings
        this._ingredients = item.ingredients
        this._time = item.time
        this._description = item.description
        this._appliance = item.appliance
        this._ustensils = item.ustensils

        // Process ingredients data 
        this.processIngredients();
    }

    get id(){
        return this._id
    }

    get image(){
        return `resources/img/reciepes/les_petits_plats/${this._image}`
    }

    get name(){
        return this._name
    }

    get servings(){
        return this._servings
    }
    get ingredients(){
        return this._ingredients
    }
   

    get time(){
        return this._time
    }

    get description(){
        return this._description
    }

    get appliance(){
        return this._appliance
    }
    get ustensils(){
        return this._ustensils
    }

    processIngredients(){
        this._ingredientsList = this.ingredients.map(ingredient =>({
            ingredient:ingredient.ingredient,
            quantity: ingredient.quantity,
            unit: ingredient.unit || " ",

        }));
    }

    get ingredientList(){
        return this._ingredientsList;
    }


}
