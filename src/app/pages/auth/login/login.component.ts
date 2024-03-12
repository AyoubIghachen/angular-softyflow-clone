import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '@app/_services/auth.service';
import { User } from '@app/_interfaces/User';
import { AuhtImports } from '@app/_shared/auth-imports';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...AuhtImports],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
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
        this.router.navigate(['home']);
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
