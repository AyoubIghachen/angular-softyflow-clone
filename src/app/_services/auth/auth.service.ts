import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { User } from '../../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private router: Router) { }

  registerUser(userDetails: User) {
    return axios.post(`${this.baseUrl}/register`, userDetails);
  }

  loginUser(userDetails: User) {
    return axios.post(`${this.baseUrl}/login`, userDetails);
  }

  logout() {
    return axios.get(`${this.baseUrl}/logout`);
  }

}
