import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import { ShoppingService } from '../shared/shopping-list.service';
@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    
];
  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();

    this.shoppingService.ingredientChanged.subscribe((newIngredients: Ingredient[]) =>{
      this.ingredients = newIngredients;
    });
  }
//   onIngredientAdded(ingredient: Ingredient) {
//     this.ingredients.push(ingredient);
// }
}
