import { Injectable } from '@angular/core';
import { User } from '../../interfaces/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/register`, userDetails);
  }

  loginUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/login`, userDetails);
  }

  logout() {
    return this.http.get(`${this.baseUrl}/logout`);
  }

  refreshToken() {
    return this.http.post(`${this.baseUrl}/refresh-token`, {});
  }

  resetPassword(userDetails: User) {
    return this.http.post(`${this.baseUrl}/send-email`, userDetails);
  }

}
