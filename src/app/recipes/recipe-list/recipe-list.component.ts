import { Component, OnInit , Output, EventEmitter} from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'A new recipe',
      description: 'test recipe',
      imagePath: 'https://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg'
    },
    new Recipe('A Test Recipe',
      'This is a simple test.',
      'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg')
  ];
@Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    // pass recipe to recipes component
    this.recipeSelected.emit(recipe);
}

}
