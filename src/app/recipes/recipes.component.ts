import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model'
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  displayRecipe(recipe: Recipe) {
    // set recipe to local property
    console.log('selected Recipe in recipes component: ', recipe);
    this.selectedRecipe = recipe;
}

}
