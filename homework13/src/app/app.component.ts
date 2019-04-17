import { Component } from '@angular/core';
import { RandomUserService } from './random-user.service';
@Component({
  selector: 'app-root',
  template: `
  <a [routerLink]="['users']">Users</a><br><br>
  <router-outlet></router-outlet>`,
  styles: ['']
})
export class AppComponent {
  constructor(public service: RandomUserService) {
  }

  ngOnInit() {
    this.service.makeRequest();
  }
  title = 'homework13';
}
