import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CoffeeSearchComponent } from './coffee-search/coffee-search.component';

const routes: Routes = [
  { path: ' ', component: HomepageComponent },
  { path: 'search', component: CoffeeSearchComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
