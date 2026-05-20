import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { NavbarThemeService } from './navbar-theme.service';
import { AuthService } from '../../auth.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IndonesiaArea, LocationService } from '../../location.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  isLocationMenuOpen = false;
  locationQuery = '';
  private themeService = inject(NavbarThemeService);
  private elementRef = inject(ElementRef<HTMLElement>);
  locationService = inject(LocationService);
  auth = inject(AuthService);

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

  get iconButtonClass(): string {
    return `transition-colors duration-300 rounded-xl border p-3 ${
      this.isDark ? 'bg-[#2D6A4F] border-[#D9D9D9]/22' : 'bg-white border-[#DADADA]'
    }`;
  }

  get locationClass(): string {
    return `transition-colors duration-300 flex shrink-0 flex-row items-center gap-1 rounded-xl border py-3 px-4 ${
      this.isDark ? 'bg-[#2D6A4F] border-[#D9D9D9]/22' : 'bg-white border-[#DADADA]'
    }`;
  }

  get iconStrokeColor(): string {
    return this.isDark ? 'white' : '#2D6A4F';
  }

  get locationTextClass(): string {
    return `text-sm font-semibold transition-colors duration-300 ${
      this.isDark ? 'text-white' : 'text-[#2D6A4F]'
    }`;
  }

  get selectedLocationLabel(): string {
    return this.locationService.formatAreaLabel(this.locationService.selectedArea());
  }

  get filteredAreas(): IndonesiaArea[] {
    return this.locationService.filterAreas(this.locationQuery).slice(0, 8);
  }

  toggleLocationMenu(): void {
    this.isLocationMenuOpen = !this.isLocationMenuOpen;

    if (this.isLocationMenuOpen) {
      this.locationQuery = '';
    }
  }

  selectLocation(area: IndonesiaArea): void {
    this.locationService.setLocation(area);
    this.locationQuery = area.name;
    this.isLocationMenuOpen = false;
  }

  clearLocation(): void {
    this.locationService.clearLocation();
    this.locationQuery = '';
    this.isLocationMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.isLocationMenuOpen = false;
    }
  }

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu() { this.isMenuOpen = false; }
  logout() {
    this.auth.logout();
    this.closeMenu();
  }
}
