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
      imagePath: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/05/86/57/grilled-norwegian-salmon.jpg'
    },
    new Recipe('A Test Recipe',
      'This is a simple test.',
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/pizza-sticks-sl-1000.jpg?itok=3cqmo41n')
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
