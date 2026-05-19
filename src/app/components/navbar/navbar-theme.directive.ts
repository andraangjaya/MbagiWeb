import { Directive, Input, ElementRef, OnInit, OnDestroy, inject } from '@angular/core';
import { NavbarThemeService } from './navbar-theme.service';

@Directive({
  selector: '[navbarTheme]',
  standalone: true,
})
export class NavbarThemeDirective implements OnInit, OnDestroy {
  @Input('navbarTheme') theme: 'dark' | 'light' = 'dark';

  private el = inject(ElementRef);
  private themeService = inject(NavbarThemeService);
  private observer!: IntersectionObserver;

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.themeService.setTheme(this.theme);
          }
        });
      },
      {
        rootMargin: '-0px 0px -90% 0px',
        threshold: 0,
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
