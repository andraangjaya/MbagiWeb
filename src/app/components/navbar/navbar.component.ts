import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarThemeService } from './navbar-theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  private themeService = inject(NavbarThemeService);

  get isDark(): boolean {
    return this.themeService.theme() !== 'light';
  }

  get linkClass(): string {
    return `font-semibold transition-colors duration-300 ${this.isDark ? 'text-white' : 'text-gray-900'}`;
  }

  get iconClass(): string {
    return `transition-colors duration-300 ${this.isDark ? 'text-white' : 'text-gray-900'}`;
  }

  get signUpClass(): string {
    return `rounded-xl px-5 py-2 font-semibold transition-colors duration-300 ${
      this.isDark ? 'bg-white text-[#2D6A4F]' : 'bg-[#2D6A4F] text-white'
    }`;
  }

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu() { this.isMenuOpen = false; }
}
