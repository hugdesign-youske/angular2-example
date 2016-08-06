import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <div class="container">
  <hr>
  <div class="row">
    <a [routerLink]="['home']" class="btn btn-default">Home</a>
    <a [routerLink]="['products']" class="btn btn-default">Products</a>
    <a [routerLink]="['products', 1]" class="btn btn-default">Product #1</a>
  </div>
  
  <hr>
  
  <router-outlet></router-outlet>
  
  </div><!-- /countainer -->
  `
})
export class AppComponent {
}
