import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {HomeComponent} from "./home/home.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductsComponent} from "./products/products.component";

@NgModule({
  imports: [BrowserModule, CommonModule, routing],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
