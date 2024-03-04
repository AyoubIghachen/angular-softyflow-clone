import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { passwordMatchValidator } from '../../../shared/password-match.directive';
import { AuthService } from '../../../_services/auth/auth.service';
import { User } from '../../../interfaces/User';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule, ReactiveFormsModule, RouterLink, CommonModule, ToastModule, BrowserAnimationsModule],
  providers: [MessageService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    age: ['', [Validators.min(0), Validators.max(100)]],
  }, {
    validators: passwordMatchValidator
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private messageService: MessageService) { }

  get firstName() {
    return this.registerForm.controls['firstName'];
  }

  get lastName() {
    return this.registerForm.controls['lastName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  get age() {
    return this.registerForm.controls['age'];
  }

  submitDetails() {
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;
    console.log(postData);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register successfully' });
    // this.authService.registerUser(postData as User).subscribe(
    //   response => {console.log(response); this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });},
    //   error => console.error(error)
    // )
  }

}
