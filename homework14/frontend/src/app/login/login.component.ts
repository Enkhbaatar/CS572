import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: string
  constructor(private service: ClientService, private dataService: DataService, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.login(this.loginForm.value);
    this.dataService.emitter.subscribe(res => {
      this.message = res.error.message;
    })
  }
}
