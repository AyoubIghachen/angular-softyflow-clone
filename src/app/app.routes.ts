import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { Page404Component } from './pages/page404/page404.component';
import { IdeComponent } from './pages/ide/ide.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthComponent
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
        path: 'page404',
        component: Page404Component
    },
    {
        path: '**', redirectTo: 'page404', pathMatch: 'full'
    }
];
