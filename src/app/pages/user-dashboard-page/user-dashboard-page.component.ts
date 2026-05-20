import {Component, computed, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NavbarThemeDirective} from '../../components/navbar/navbar-theme.directive';
import {GeoPoint, LocationService} from '../../location.service';

interface FoodCard {
  image: string;
  alt: string;
  title: string;
  description: string;
  distance: string;
  route: string;
}

interface FoodSeed {
  image: string;
  alt: string;
  title: string;
  description: string;
  pickupLocation: GeoPoint;
  route: string;
}

@Component({
  selector: 'app-user-dashboard-page.component',
  imports: [RouterLink, NavbarThemeDirective],
  templateUrl: './user-dashboard-page.component.html',
  styleUrl: './user-dashboard-page.component.css',
})
export class UserDashboardPageComponent {
  private locationService = inject(LocationService);

  private foodSeeds: FoodSeed[] = [
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      pickupLocation: {latitude: -6.2088, longitude: 106.8456},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Fresh Farm Produce Box',
      description: 'Mixed farm produce packed for direct collection and redistribution.',
      pickupLocation: {latitude: -6.9147, longitude: 107.6098},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Community Meal Package',
      description: 'Prepared community meals portioned for same-day pickup.',
      pickupLocation: {latitude: -7.2575, longitude: 112.7521},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Organic Veggie Basket',
      description: 'Organic vegetables and herbs available before closing time.',
      pickupLocation: {latitude: -6.595, longitude: 106.8166},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Restaurant Dinner Extras',
      description: 'Extra dinner portions packed from restaurant service.',
      pickupLocation: {latitude: -7.7956, longitude: 110.3695},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Healthy Lunch Portions',
      description: 'Balanced lunch packs suitable for office or community pickup.',
      pickupLocation: {latitude: -6.9667, longitude: 110.4167},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Bakery Sweet Treats',
      description: 'Pastries and sweet buns bundled for end-of-day rescue.',
      pickupLocation: {latitude: -8.6705, longitude: 115.2126},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Surplus Fruit Collection',
      description: 'Boxes of surplus fruit sorted and ready for quick claim.',
      pickupLocation: {latitude: -5.1477, longitude: 119.4327},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Prepared Rice Meals',
      description: 'Portioned rice meals from a catering partner.',
      pickupLocation: {latitude: 1.4748, longitude: 124.8421},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Fresh Seafood Package',
      description: 'Seafood packs that should be claimed and stored promptly.',
      pickupLocation: {latitude: -0.0263, longitude: 109.3425},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Daily Grocery Essentials',
      description: 'Everyday grocery kit with fresh and pantry items.',
      pickupLocation: {latitude: -3.3186, longitude: 114.5944},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Family Meal Donations',
      description: 'Family-sized food bundles for immediate community use.',
      pickupLocation: {latitude: -2.9761, longitude: 104.7754},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Local Cafe Leftovers',
      description: 'Fresh cafe leftovers packed for collection before close.',
      pickupLocation: {latitude: 0.5333, longitude: 101.45},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Hot Soup Containers',
      description: 'Insulated soup containers prepared for same-evening pickup.',
      pickupLocation: {latitude: -0.9471, longitude: 100.4172},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Community Pantry Supply',
      description: 'Pantry supply bundle prepared for organized donation runs.',
      pickupLocation: {latitude: -5.4292, longitude: 105.261},
      route: ''
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Weekend Food Rescue',
      description: 'Weekend rescue stock grouped for high-volume pickup.',
      pickupLocation: {latitude: -2.5337, longitude: 140.7181},
      route: ''
    },
  ];

  readonly foods = computed<FoodCard[]>(() =>
    this.foodSeeds.map((food) => ({
      image: food.image,
      alt: food.alt,
      title: food.title,
      description: food.description,
      distance: this.locationService.formatDistance(food.pickupLocation),
      route: food.route,
    }))
  );
}
