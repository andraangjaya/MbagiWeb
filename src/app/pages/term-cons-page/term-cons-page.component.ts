import { Component } from '@angular/core';
import {NavbarThemeDirective} from '../../components/navbar/navbar-theme.directive';
import {RouterLink} from '@angular/router';

interface ActionLink {
  label: string;
  route: string;
  variant: 'solid' | 'transparent';
}

@Component({
  selector: 'app-term-cons-page',
  imports: [
    NavbarThemeDirective,
    RouterLink
  ],
  templateUrl: './term-cons-page.component.html',
  styleUrl: './term-cons-page.component.css',
})
export class TermConsPageComponent {
  heroActions: ActionLink[] = [
    {
      label: 'Mulai Berbagi',
      route: '',
      variant: 'solid',
    },
    {
      label: 'Jelajahi Listing',
      route: '/discover-food',
      variant: 'transparent',
    },
  ];

}
