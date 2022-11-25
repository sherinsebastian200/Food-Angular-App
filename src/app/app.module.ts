import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodHomeComponent } from './food-home/food-home.component';
import { FoodLoginComponent } from './food-login/food-login.component';
import { FoodsignupComponent } from './foodsignup/foodsignup.component';
import { FoodNorthComponent } from './food-north/food-north.component';
import { FoodSouthComponent } from './food-south/food-south.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
const myRoute:Routes=[
  {
    path:"",
    component:FoodHomeComponent
  },
  {
    path:"login",
    component:FoodLoginComponent
  },
  {
    path:"signup",
    component:FoodsignupComponent
  },
  {
    path:"north",
    component:FoodNorthComponent
  },
  {
    path:"south",
    component:FoodSouthComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FoodHomeComponent,
    FoodLoginComponent,
    FoodsignupComponent,
    FoodNorthComponent,
    FoodSouthComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
