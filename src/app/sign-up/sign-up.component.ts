import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../validators/confirmed.validators';

interface IRole {
  valueRole: 'employee' | 'admin'
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide = true;
  roles: IRole[] = [
    { valueRole: 'employee' },
    { valueRole: 'admin' },
  ];
  selectedRole = 'employee';
  signUpForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.signUpForm = fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      role: [this.selectedRole]
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    })
  }

  createAccount() {
    console.log(this.signUpForm.value)
  }
}
