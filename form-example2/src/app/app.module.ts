import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductFormComponent} from "./product-form/product-form.component";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [
    AppComponent,
    ProductFormComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
