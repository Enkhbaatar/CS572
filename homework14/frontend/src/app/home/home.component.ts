import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  user: Object = { first: "", last: "", email: "" }
  constructor(private service: ClientService, private router: Router) {
    this.sendRequest();
  }

  ngOnInit() {
  }

  sendRequest() {
    this.service.getUserData().subscribe(
      res => {
        let response: any = res;
        this.user = response.user;
      },
      err => {
        this.router.navigate(['login'])
      }
    )
  }
}
