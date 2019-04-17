import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../random-user.service';

@Component({
  selector: 'app-users',
  template: `
    <ul>
      <li *ngFor = "let user of users; let i = index">
        <a [routerLink]="[i]"> {{user.name.first}} </a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class UsersComponent implements OnInit {
  users: []
  constructor(public service: RandomUserService) { }

  ngOnInit() {
    this.users = this.service.getCachedData().results;
  }

}
