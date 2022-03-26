import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ApiGetComponent } from "./api-get/api-get.component";
import { ApiPostComponent } from "./api-post/api-post.component";
import { ApiDeleteComponent } from "./api-delete/api-delete.component";
import { LoginComponent } from "./login/login.component";
import { BestandComponent } from './bestand/bestand.component';
import { EinkaufslisteComponent } from './einkaufsliste/einkaufsliste.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'api-get', component: ApiGetComponent },
  { path: 'api-post', component: ApiPostComponent },
  { path: 'api-delete', component: ApiDeleteComponent },
  { path: 'bestand', component: BestandComponent },
  { path: 'einkaufsliste', component: EinkaufslisteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
