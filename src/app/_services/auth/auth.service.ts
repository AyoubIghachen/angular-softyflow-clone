import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { User } from '../../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  private baseUrl = 'http://localhost:3000';

  constructor(private router: Router) { }

  registerUser(userDetails: User) {
    return axios.post(`${this.baseUrl}/register`, userDetails);
  }

  login(username: string, password: string): boolean {

    this.isLoggedIn = true;
    return this.isLoggedIn;
  }

  logout(): void {
    axios.get('http://localhost:3000/logout')
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => { console.log(error) });
    this.isLoggedIn = false;
  }

}
