import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'custom-button',
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
  @Input() buttonMessage: string;
  @Output() buttonEventEmitter : EventEmitter<string>;

  constructor() {
    this.buttonEventEmitter = new EventEmitter();
  }

  public emitButtonMessage() {
    console.log("show button message: " + this.buttonMessage);
    this.buttonEventEmitter.emit(this.buttonMessage);
  }
}
