import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
private recipes:Recipe[] = [
    {
      name: 'A new recipe',
      description: 'test recipe',
      imagePath: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/05/86/57/grilled-norwegian-salmon.jpg',
      ingredients: [
        {
          name: 'meat',
          amount: 1 ,

        },
        new Ingredient('tomatoes', 5 )
      ]
    },
    new Recipe('A Test Recipe',
      'This is a simple test.',
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/pizza-sticks-sl-1000.jpg?itok=3cqmo41n', [
        new Ingredient('meat', 1),
        new Ingredient('coconut milk' , 1)
      ])];

        recipeSelected = new EventEmitter<Recipe>();


      getRecipes():Recipe[] {
          return this.recipes.slice();//returns exact copy of original array  
      }
}