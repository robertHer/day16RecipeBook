import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from './../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  selectRecipe() {
  this.recipeService.recipeSelected.emit(this.recipe);
}
}
