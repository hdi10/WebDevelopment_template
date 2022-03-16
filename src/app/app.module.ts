import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiGetComponent } from './api-get/api-get.component';
import { ApiPostComponent } from './api-post/api-post.component';
import { ApiDeleteComponent } from './api-delete/api-delete.component';
import { HomeComponent } from './home/home.component';
import { TabComponent } from './shared/tab/tab.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiGetComponent,
    ApiPostComponent,
    ApiDeleteComponent,
    HomeComponent,
    TabComponent,
    SidebarComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
