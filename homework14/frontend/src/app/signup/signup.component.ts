import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClientService } from '../client.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  signupForm: FormGroup;
  title = 'homework14';

  constructor(private service: ClientService, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      'user': this.formBuilder.group({
        'first': ['', [Validators.required]],
        'last': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      'password': ['', [Validators.required]],
      'confirmPass': ['', [Validators.required], this.passwordValidator.bind(this)],
      'term': ['', [Validators.required]]
    });
  }

  passwordValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (this.signupForm && control.value == this.signupForm.get("password").value)
            resolve(true);
          else
            resolve(false)
        }, 0);
      }
    );
    return promise;
  }

  onSubmit() {
    this.service.signup(this.signupForm.value).subscribe(data => {

    });
  }
}
