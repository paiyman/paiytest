import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Sona', 'support', 
            'https://www.pcgamesn.com/sites/default/files/every%20sona%20skin.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        
        new Recipe(
            'DJ Sona', 
            'i need support', 
            'https://www.pcgamesn.com/sites/default/files/every%20sona%20skin.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}