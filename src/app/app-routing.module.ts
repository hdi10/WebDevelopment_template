import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { BestandComponent } from './bestand/bestand.component';
import { EinkaufslisteComponent } from './einkaufsliste/einkaufsliste.component';
import { ProductListNewComponent } from './product-list-new/product-list-new.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bestand', component: BestandComponent },
  { path: 'einkaufsliste', component: EinkaufslisteComponent },
  { path: 'products', component: ProductListNewComponent },
  { path: 'addproduct', component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
