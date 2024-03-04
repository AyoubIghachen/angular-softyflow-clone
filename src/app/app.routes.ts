import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'ide',
        component: DashboardComponent
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
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'page404',
        component: Page404Component
    },
    {
        path: '**', redirectTo: 'page404', pathMatch: 'full'
    }
];
