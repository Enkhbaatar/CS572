import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RandomUserService } from '../random-user.service';

@Component({
  selector: 'app-userdetails',
  template: `
    <img src="{{userDetail.picture.large}}"/>
    <p>Name: {{userDetail.name.first}} {{userDetail.name.last}}</p>
    <p>Cell: {{userDetail.cell}}</p>
    <p>Email: {{userDetail.email}}</p>
    <p>Gender: {{userDetail.gender}}</p>
    <p>Phone: {{userDetail.phone}}
  `,
  styles: ['']
})
export class UserdetailsComponent implements OnInit {
  userDetail: any
  constructor(private service: RandomUserService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.userDetail = service.getCachedData().results[params['uuid']];
    });
  }

  ngOnInit() {
  }

}
