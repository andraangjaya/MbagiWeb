import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GeoPoint, LocationService } from '../../location.service';

interface DonationSeed {
  image: string;
  alt: string;
  title: string;
  description: string;
  pickupLocation: GeoPoint;
  route: string;
}

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  private locationService = inject(LocationService);

  private activeDonationSeeds: DonationSeed[] = [
    {
      image: '/images/discover-banner.png',
      alt: 'Freshly Baked Bread',
      title: 'Freshly Baked Bread',
      description: '2kg of strawberries and blueberries.',
      pickupLocation: { latitude: -8.6705, longitude: 115.2126 },
      route: '/details/1'
    },
    {
      image: '/images/discover-banner.png',
      alt: 'Prepared Lunch Boxes',
      title: 'Prepared Lunch Boxes',
      description: 'Balanced prepared lunch boxes for same-day collection.',
      pickupLocation: { latitude: -7.2575, longitude: 112.7521 },
      route: '/details/2'
    },
    {
      image: '/images/discover-banner.png',
      alt: 'Fresh Vegetable Bundle',
      title: 'Fresh Vegetable Bundle',
      description: 'Assorted vegetables packed and ready to claim.',
      pickupLocation: { latitude: -6.9147, longitude: 107.6098 },
      route: '/details/3'
    }
  ];

  readonly activeDonations = computed(() =>
    this.activeDonationSeeds.map((donation) => ({
      image: donation.image,
      alt: donation.alt,
      title: donation.title,
      description: donation.description,
      distance: this.locationService.formatDistance(donation.pickupLocation, 'Nearby'),
      route: donation.route
    }))
  );
}
