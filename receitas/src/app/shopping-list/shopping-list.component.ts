import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('cheese', 1),
    new Ingredient('tomatos', 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
