import { Routes } from '@angular/router';
import { Page404Component } from '@app/pages/page404/page404.component';
import { IdeComponent } from '@app/pages/ide/ide.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { LoginComponent } from '@app/pages/auth/login/login.component';
import { RegisterComponent } from '@app/pages/auth/register/register.component';
import { ResetPasswordComponent } from '@app/pages/auth/reset-password/reset-password.component';
import { authGuard } from '@app/_guards/auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'ide',
        component: IdeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'page404',
        component: Page404Component
    },
    {
        path: '**', redirectTo: 'page404', pathMatch: 'full'
    }
];
