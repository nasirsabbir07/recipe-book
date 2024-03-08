import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Tomato', 10),
  ];

  constructor() {}

  ngOnInit(): void {}
}
