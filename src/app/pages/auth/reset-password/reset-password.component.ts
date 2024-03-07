import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '@app/_services/auth.service';
import { User } from '@app/_interfaces/User';
import { AuhtImports } from '@app/_shared/auth-imports';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [...AuhtImports],
  providers: [MessageService],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  get email() {
    return this.resetPasswordForm.controls['email'];
  }

  resetPassword() {
    const user = { ...this.resetPasswordForm.value };

    this.authService.resetPassword(user as User).subscribe({
      next: (response: any) => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: response.message });
      },
      error: (error: any) => {
        console.error(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error });
      }
    })
  }

}
