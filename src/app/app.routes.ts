import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
  },

  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component').then((m) => m.LoginPageComponent),
  },

  {
    path: 'signup',
    loadComponent: () => import('./pages/sign-up-page/sign-up-page.component').then((m) => m.SignUpPageComponent),
  },

  {
    path: 'user/dashboard',
    loadComponent: () => import('./pages/user-dashboard-page/user-dashboard-page.component').then((m) => m.UserDashboardPageComponent),
  },

  {
    path: 'discoverfood',
    loadComponent: () => import('./pages/discover-food-page/discover-food-page.component').then((m) => m.DiscoverFoodPageComponent),
  },

  {
    path: 'profile',
    loadComponent: () => import('./pages/profile-page/profile-page.component').then((m) => m.ProfilePageComponent),
  },

];
