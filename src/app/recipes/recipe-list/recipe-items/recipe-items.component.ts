import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from './../../recipe.model';

@Component({
  selector: 'recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  selectRecipe() {
    this.recipeWasSelected.emit(this.recipe);
}
}
