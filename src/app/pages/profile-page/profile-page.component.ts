import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  activeDonations = [
    {
      image: '/images/discover-banner.png',
      alt: 'Freshly Baked Bread',
      title: 'Freshly Baked Bread',
      description: '2kg of strawberries and blueberries.',
      distance: '2.5 km',
      route: '/details/1'
    },
    {
      image: '/images/discover-banner.png',
      alt: 'Freshly Baked Bread',
      title: 'Freshly Baked Bread',
      description: '2kg of strawberries and blueberries.',
      distance: '2.5 km',
      route: '/details/2'
    },
    {
      image: '/images/discover-banner.png',
      alt: 'Freshly Baked Bread',
      title: 'Freshly Baked Bread',
      description: '2kg of strawberries and blueberries.',
      distance: '2.5 km',
      route: '/details/3'
    }
  ];
}
