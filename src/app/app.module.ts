import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodHomeComponent } from './food-home/food-home.component';
import { FoodLoginComponent } from './food-login/food-login.component';
import { FoodsignupComponent } from './foodsignup/foodsignup.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodHomeComponent,
    FoodLoginComponent,
    FoodsignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
