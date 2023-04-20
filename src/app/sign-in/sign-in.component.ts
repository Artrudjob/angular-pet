import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  hide = true
  signInForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.signInForm = fb.group({
      email: [''],
      password: [''],
    })
  }

  signIn() {
    console.log(this.signInForm.value)
  }
}
