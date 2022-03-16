import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ApiGetComponent} from "./api-get/api-get.component";
import {ApiPostComponent} from "./api-post/api-post.component";
import {ApiDeleteComponent} from "./api-delete/api-delete.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'api-get', component: ApiGetComponent},
  { path: 'api-post', component: ApiPostComponent},
  { path: 'api-delete', component: ApiDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
