import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  constructor(public http: HttpClient) { }

  makeRequest(): void {
    this.http.get("https://randomuser.me/api/?results=10").subscribe(
      res => {
        localStorage.setItem('users', JSON.stringify(res))
      }
    )
  }

  getCachedData() {
    return JSON.parse(localStorage.getItem('users'));
  }
}
