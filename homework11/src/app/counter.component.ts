import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click) = "decrease()">-</button>{{counterValue}}<button (click)="increase()">+</button><p>{{ComponentCounterValue}}</p>`,
  outputs: ['counterChange'],
  styles: [``]
})
export class CounterComponent implements OnInit {
  @Input() counter: number
  @Input() ComponentCounterValue: number
  counterValue: number = 0
  counterChange: EventEmitter<number>;

  constructor() {
    this.counterChange = new EventEmitter()
  }

  start(): void {
    this.counterChange.emit(this.counterValue)
  }

  decrease() {
    if (this.counterValue > 0)
      this.counterValue--;
    this.start();
  }

  increase() {
    this.counterValue++
    this.start();
  }

  ngOnInit() {
    this.counterValue = this.counter
  }
}
