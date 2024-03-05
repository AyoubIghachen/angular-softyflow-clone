import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../_services/auth/auth.service';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule, ReactiveFormsModule, RouterLink, CommonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router) { }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const user = { ...this.loginForm.value };

    this.authService.loginUser(user as User).subscribe({
      next: (response: any) => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successfully' });
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 1000);
      },
      error: (error: any) => {
        console.error(error);
        if (error.status === 400) {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is wrong' });
        }else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        }
      }
    })
  }

}
