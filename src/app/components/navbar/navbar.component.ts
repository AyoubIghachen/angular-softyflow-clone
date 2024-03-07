import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '@app/_interfaces/User';
import { AuthService } from '@app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToastModule, CommonModule],
  providers: [MessageService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  user: User | null = null;

  @Input() isIdePage: boolean = false;

  @Output() save = new EventEmitter<void>();
  @Output() displayResult = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authService.getUserByToken();
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
