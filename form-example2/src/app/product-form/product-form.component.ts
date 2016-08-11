import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'product-form',
  template: `
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
    <div class="form-group">
      <label>Product Name</label>
      <input type="text" class="form-control" name="name" ngModel>
    </div>
    <div class="form-group">
      <label>Price</label>
      <input type="text" class="form-control" name="price" ngModel>
    </div>
       
    <button type="submit" class="btn btn-default">Create</button>
    
    <label class="label label-primary" *ngIf="f.pristine">Pristine</label>
    <label class="label label-warning" *ngIf="f.dirty">Dirty</label>
    
    <label class="label label-success" *ngIf="f.valid">Valid</label>
    <label class="label label-danger" *ngIf="f.invalid">Invalid</label>
  </form>
  `
})
export class ProductFormComponent {
  onSubmit(form: any): void {
    console.log("submit " + JSON.stringify(form));
  }
}
