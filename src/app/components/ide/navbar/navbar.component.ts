import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../../interfaces/User';
import { JwtPayload } from '../../../interfaces/JwtPayload';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { AuthService } from '../../../_services/auth/auth.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToastModule],
  providers: [MessageService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  user: User | null = null;

  @Output() save = new EventEmitter<void>();
  @Output() displayResult = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded: JwtPayload = jwtDecode(token);
        this.user = {
          _id: decoded._id,
          email: decoded.email,
          role: decoded.role,
          age: decoded.age,
          firstName: decoded.firstName,
          lastName: decoded.lastName
        };
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }

  onSave() {
    this.save.emit();
  }

  onDisplayResult() {
    this.displayResult.emit();
  }

  logout() {
    this.authService.logout().subscribe({
      next: (response: any) => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logout successfully' });
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 1000);
      },
      error: (error: any) => {
        console.error(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    })
  }
}
