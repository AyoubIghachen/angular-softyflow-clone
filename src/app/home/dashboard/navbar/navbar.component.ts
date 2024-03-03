import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User, JwtPayload } from './interfaces';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  user: User | null = null;

  @Output() save = new EventEmitter<void>();
  @Output() displayResult = new EventEmitter<void>();

  constructor(private router: Router) { }

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
    console.log('logout');
    this.router.navigate(['/logout']);
  }
}
