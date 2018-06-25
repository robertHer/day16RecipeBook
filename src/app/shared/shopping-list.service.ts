import { Ingredient } from "./ingredient.model";

export class ShoppingService{
    private ingredients:Ingredient[] = [
        {
            name: 'Apple',
            amount: 5
          },
          new Ingredient('Tomatoes', 10)
    ];
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
    }
}