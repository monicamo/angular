import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   // const id =  this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipe(this.id);
      }
    )
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
//    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
