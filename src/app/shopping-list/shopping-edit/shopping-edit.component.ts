import { Component, OnInit, ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingService } from '../../shared/shopping-list.service';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }
  addIngredient() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    console.log(newIngredient);
    // send to shopping-list
    this.ingredientAdded.emit(newIngredient); 
    this.shoppingService.addIngredient(newIngredient);                                         
}

}
