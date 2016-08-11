import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(routes);

