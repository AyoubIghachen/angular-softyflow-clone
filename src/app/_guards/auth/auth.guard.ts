import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { DecodedToken } from '../../_interfaces/DecodedToken';
import { AuthService } from '../../_services/auth.service';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const token = cookieService.get('token');
  const dateNow = new Date();

  if (token) {
    const decodedToken = jwtDecode(token) as DecodedToken;
    const isTokenExpired = decodedToken.exp < dateNow.getTime() / 1000;

    if (isTokenExpired) {
      const authService = inject(AuthService);
      return authService.refreshToken().pipe(
        switchMap((response: any) => {
          const newToken = response.accessToken;
          cookieService.set('token', newToken);
          return of(true);
        }),
        catchError((error) => {
          console.log(error);
          cookieService.delete('token');
          const router = inject(Router);
          router.navigate(['login']);
          return of(false);
        })
      );
    }
    return true;
  } else {
    const router = inject(Router);
    return router.navigate(['login']);
  }
};
