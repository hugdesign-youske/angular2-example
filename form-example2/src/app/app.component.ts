import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h2>Adding New Product</h2>
        <product-form></product-form>
      </div>
    </div>
    </div>
  `
})
export class AppComponent {
}
