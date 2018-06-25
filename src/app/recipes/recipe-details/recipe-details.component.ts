import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from './../recipe.model';
import { ShoppingService } from '../../shared/shopping-list.service';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 @Input() recipe:Recipe;


  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addToShoppingList(){
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }


}
