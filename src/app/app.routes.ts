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
    path: 'sign-up',
    loadComponent: () => import('./pages/sign-up-page/sign-up-page.component').then((m) => m.SignUpPageComponent),
  },

  {
    path: 'user/dashboard',
    loadComponent: () => import('./pages/user-dashboard-page/user-dashboard-page.component').then((m) => m.UserDashboardPageComponent),
  },

  {
    path: 'discover-food',
    loadComponent: () => import('./pages/discover-food-page/discover-food-page.component').then((m) => m.DiscoverFoodPageComponent),
  },

  {
    path: 'profile',
    loadComponent: () => import('./pages/profile-page/profile-page.component').then((m) => m.ProfilePageComponent),
  },

  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us-page/about-us-page.component').then((m) => m.AboutUsPageComponent),
  },

  {
    path: 'food/details',
    redirectTo: 'food/details/1',
    pathMatch: 'full',
  },

  {
    path: 'food/details/:foodId',
    loadComponent: () => import('./pages/view-detail-page/view-detail-page.component').then((m) => m.ViewDetailPageComponent),
  },

  {
    path: 'faq',
    loadComponent: () => import('./pages/faq-page/faq-page.component').then((m) => m.FaqPageComponent),
  },

  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy-policy-page/privacy-policy-page.component').then((m) => m.PrivacyPolicyPageComponent),
  },

  {
    path: 'terms-cons',
    loadComponent: () => import('./pages/term-cons-page/term-cons-page.component').then((m) => m.TermConsPageComponent),
  },
];
