import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo:"/home", pathMatch: "full"},
  { path: "home", component:HomeComponent},
  { path: "about", component:AboutComponent},
  { path: "items", component:ItemsComponent},
  { path: "items/:id", component:ItemDetailComponent},
  { path: "edit/:id", component:ItemEditComponent},
  { path: "add",component:ItemAddComponent},
  { path: "**", component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
