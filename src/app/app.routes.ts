import { Routes } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';
import { IdeComponent } from './pages/ide/ide.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';

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
        component: HomeComponent
    },
    {
        path: 'ide',
        component: IdeComponent
    },
    {
        path: 'page404',
        component: Page404Component
    },
    {
        path: '**', redirectTo: 'page404', pathMatch: 'full'
    }
];
