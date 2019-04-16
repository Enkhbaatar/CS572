import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <app-dumb [array] = "array"></app-dumb>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  array = ["element1", "element2", "element3", "element4", "element5", "element6"]
  constructor() { }

  ngOnInit() {
  }

}
