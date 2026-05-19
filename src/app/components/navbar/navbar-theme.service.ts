import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavbarThemeService {
  readonly theme = signal<'dark' | 'light'>('dark');

  setTheme(theme: 'dark' | 'light') {
    this.theme.set(theme);
  }
}
