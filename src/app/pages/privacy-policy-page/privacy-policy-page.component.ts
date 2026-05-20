import { Component } from '@angular/core';
import {NavbarThemeDirective} from '../../components/navbar/navbar-theme.directive';
import {RouterLink} from '@angular/router';

interface ActionLink {
  label: string;
  route: string;
  variant: 'solid' | 'transparent';
}

@Component({
  selector: 'app-privacy-policy-page',
  imports: [
    NavbarThemeDirective,
    RouterLink
  ],
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.css',
})
export class PrivacyPolicyPageComponent {
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
