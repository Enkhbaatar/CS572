import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <ul>
      <li appMakeBigger [fontSize] = "22" IsVisible [visible] = true *ngFor = "let item of array; let i = index" >
        {{item}}
      </li>
    </ul>
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input() array
  constructor() { }

  ngOnInit() {
  }

}
