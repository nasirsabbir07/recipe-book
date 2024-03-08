import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Tomato',
      'Test Description',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    ),
  ];

  constructor() {}
  ngOnInit(): void {}
}
