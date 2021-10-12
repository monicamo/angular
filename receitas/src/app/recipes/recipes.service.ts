import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe("Risotto Parmeggino", "Nova receita de risoto, com muito queijo", "https://upload.wikimedia.org/wikipedia/commons/5/53/Risotto.jpg"),
    new Recipe("Bife Guiness", "Ensopado de carne com Guiness", "http://2.bp.blogspot.com/-3UMaahI8JIw/VjYn0lu9T5I/AAAAAAAADjA/cH9GLRcY0Zg/s640/Bife%2Bna%2Bca%25C3%25A7arola%2Bcom%2Bmolho%2Bguiness.jpg"),
    new Recipe("Empanadas", "Nova receita de empadandas,", "https://vejasp.abril.com.br/wp-content/uploads/2016/11/t2a3619empanadas_jasonlowe.jpeg"),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
