import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-product-detail',
  template: `
    Product Detail works! <br>
    Product Id: {{ productId }}
  `
})
export class ProductDetailComponent {
  public productId: string;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => this.productId = params['id']);
  }
}
