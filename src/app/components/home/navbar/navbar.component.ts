import { Component } from '@angular/core';
import { AuthService } from '../../../_services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToastModule],
  providers: [MessageService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router) { }

  logout() {
    this.authService.logout().then(
      (response: any) => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logout successfully' });
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 2000);
      }
    ).catch(
      (error: any) => {
        console.error(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    )
  }
}
