import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabComponent } from './shared/tab/tab.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { HdComponent } from './shared/hd/hd.component';
import { Head1Component } from './shared/head1/head1.component'
import { CardComponent } from './card/card.component';
import { MatTreeModule } from "@angular/material/tree";
import { MatSortModule } from "@angular/material/sort";
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { RandomChoiceGeneratorComponent } from './random-choice-generator/random-choice-generator.component';
import { CardviewComponent } from './cardview/cardview.component';
import { ButtonComponent } from './button/button.component';
import { BestandComponent } from './bestand/bestand.component';
import { EinkaufslisteComponent } from './einkaufsliste/einkaufsliste.component';
import { MatTableModule } from '@angular/material/table';
import { ProductListNewComponent } from './product-list-new/product-list-new.component'
import { ProductServiceService } from './product-service.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductDeleteFormComponent } from './product-delete-form/product-delete-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabComponent,
    SidebarComponent,
    LoginComponent,
    HdComponent,
    Head1Component,
    CardComponent,
    DetailActivityComponent,
    RandomChoiceGeneratorComponent,
    CardviewComponent,
    ButtonComponent,
    BestandComponent,
    EinkaufslisteComponent,
    ProductListNewComponent,
    ProductFormComponent,
    ProductFormComponent,
    ProductDeleteFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatSortModule,
    MatSortModule,
    MatTableModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
