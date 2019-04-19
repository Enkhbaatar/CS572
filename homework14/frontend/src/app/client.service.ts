import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private dataService: DataService, public http: HttpClient, private router: Router) { }

  signup(data) {
    return this.http.post("http://localhost:5000/signup", data);
  }

  login(data) {
    return this.http.post("http://localhost:5000/signin", data)
      .subscribe(
        res => {
          let response: any = res;
          localStorage.setItem("token", response.token);
          this.router.navigate([""])
        },
        error => {
          this.dataService.emitValue(error);
        });
  }

  getUserData() {
    return this.http.get("http://localhost:5000/api");
  }
}
