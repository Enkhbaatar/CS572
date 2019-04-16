import { Component, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  template: `
    <app-counter [counter] = "counter" 
      (counterChange) = "counterChange(counter)" [ComponentCounterValue] = "ComponentCounterValue">
    </app-counter>`,
  styles: [``]
})
export class AppComponent {
  counter = 5
  @ViewChild('counter') ComponentCounterValue = 0;
  title = 'homework11';

  counterChange(counter: number) {
    this.counter = counter
  }
}
