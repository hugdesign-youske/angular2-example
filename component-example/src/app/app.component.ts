import {Component, ViewEncapsulation} from '@angular/core';
import {CustomButtonComponent} from "./custom-button/custom-button.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <h1 class="testStyle">
  Hello Angular2 MultiComponent
  </h1>
  
  CustomButton Input Message: <input type="text" [(ngModel)]="customButtonInputMessage" />
  
  <custom-button
    [buttonMessage]="customButtonInputMessage"
    (buttonEventEmitter)="receiveFromCustomButton($event)">
  </custom-button>
  `,
  styles: [`
  .testStyle {
    border: 1px solid black;
  }
  `],
  directives: [CustomButtonComponent]
})
export class AppComponent {
  public customButtonInputMessage: string;

  ngOnInit() {
    this.customButtonInputMessage = "Hello!";
  }

  public receiveFromCustomButton(message) {
    console.log("Receive message " + message);
  }
}
