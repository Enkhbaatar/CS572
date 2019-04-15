import { Component } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  template: `
    <app-counter [counter] = "counter" 
      (counterChange) = "counterChange($event)" [ComponentCounterValue] = "ComponentCounterValue">
    </app-counter>`,
  styles: [``]
})
export class AppComponent {
  counter = 5
  ComponentCounterValue = 0;
  title = 'homework11';

  counterChange(e: number) {
    this.counter = e
    this.ComponentCounterValue = e;
  }
}
