import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

const recipesRoutes: Routes = [
  { path: 'recipe-details', component: RecipeDetailComponent },

];

@NgModule()
export class RecipesRoutingModule {

}
