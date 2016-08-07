import {Component, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'custom-button',
  inputs: ['buttonMessage'],
  outputs: ['buttonEventEmitter'],
  template: `
  <div class="testStyle">
    custom-button works!

    <button (click)="emitButtonMessage()">
      {{ buttonMessage }}
    </button>
  </div>
  `
})
export class CustomButtonComponent {
  buttonMessage: string;
  buttonEventEmitter : EventEmitter<string>;

  constructor() {
    this.buttonEventEmitter = new EventEmitter();
  }

  public emitButtonMessage() {
    console.log("show button message: " + this.buttonMessage);
    this.buttonEventEmitter.emit(this.buttonMessage);
  }
}
