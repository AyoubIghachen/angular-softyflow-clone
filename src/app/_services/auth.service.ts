import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { User } from '@app/_interfaces/User';
import { JwtPayload } from '@app/_interfaces/JwtPayload';

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

  getUserByToken(): User | null{
    let user: User | null = null;
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded: JwtPayload = jwtDecode(token);
        user = {
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
    return user;
  }
}
