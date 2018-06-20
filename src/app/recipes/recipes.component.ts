import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model'

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
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
