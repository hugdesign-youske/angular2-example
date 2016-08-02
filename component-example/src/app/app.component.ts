import {Component, ViewEncapsulation} from '@angular/core';
import {CustomButtonComponent} from "./custom-button/custom-button.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CustomButtonComponent],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public title: string;
  public showMessage: boolean;
  public tableRows: any[];
  public customButtonInputMessage: string = "Hello!";

  ngOnInit() {
    this.title = "Hello Angular2 Component";
    this.showMessage = true;

    this.tableRows = [
      { id: 1000, message: "Hello World"},
      { id: 1001, message: "Hello Angular2"},
      { id: 1002, message: "Bye"},
    ];
  }

  public receiveFromCustomButton(message) {
    console.log("Receive message " + message);
  }
}
