import { bootstrap } from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import { AppComponent, environment } from './app/';
import {RouterConfig, provideRouter} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ProductsComponent} from "./app/products/products.component";
import {ProductDetailComponent} from "./app/product-detail/product-detail.component";

if (environment.production) {
  enableProdMode();
}

const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: 'home' }
];

const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  // provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
