import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1> {{title}} </h1>
    
    <p *ngIf="showMessage">
    show Message
    </p>

    <h2> TestTable </h2>

    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      </thead>
    
      <tbody>
      <tr *ngFor="let row of tableRows">
        <td>{{ row.id }}</td>
        <td>{{ row.message }}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class AppComponent {
  public title: string;
  public showMessage: boolean;
  public tableRows: any[];

  ngOnInit() {
    // 初期化が必要な処理は、ここに書くと良いです
    this.title = "Hello Built-in Component";
    this.showMessage = true;
    this.tableRows = [
      { id: 1, message: "Hello"},
      { id: 2, message: "Angular2"},
    ];
  }
}
