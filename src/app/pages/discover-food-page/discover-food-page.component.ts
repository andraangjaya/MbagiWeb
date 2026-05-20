import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarThemeDirective } from '../../components/navbar/navbar-theme.directive';
import { GeoPoint, LocationService } from '../../location.service';

interface FoodCard {
  image: string;
  alt: string;
  title: string;
  description: string;
  distance: string;
  location: string;
  timeOperational: string;
  route: string;
}

interface FoodSeed {
  image: string;
  alt: string;
  title: string;
  description: string;
  pickupLocation: GeoPoint;
  location: string;
  timeOperational: string;
  route: string;
}

@Component({
  selector: 'app-food-listing-page.component',
  imports: [RouterLink, NavbarThemeDirective],
  templateUrl: './discover-food-page.component.html',
  styleUrl: './discover-food-page.component.css',
})
export class DiscoverFoodPageComponent {
  private locationService = inject(LocationService);

  isFilterMenuOpen = signal(false);

  extraCategories = [
    'Vegetables',
    'Bakery',
    'Dairy & Eggs',
    'Pantry',
    'Rice Dishes',
    'Prepared Meals',
    'Ready Meals',
    'Frozen Food',
    'Beverages',
    'Snacks',
    'Fruits',
    'Meat & Seafood',
  ];

  private foodSeeds: FoodSeed[] = [
    {
      image: '/images/food-expires.png',
      alt: 'bakery-leftover',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough from today\'s unsold bakery stock. Still soft and perfect for shelters or community kitchens.',
      pickupLocation: { latitude: -8.6705, longitude: 115.2126 },
      location: 'Renon, Denpasar',
      timeOperational: '21:20 WIB - 22:40 WIB',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'prepared-meals',
      title: 'Community Meal Package',
      description: 'Prepared meal packs from a catering partner, ready for scheduled evening pickup.',
      pickupLocation: { latitude: -7.2575, longitude: 112.7521 },
      location: 'Tegalsari, Surabaya',
      timeOperational: '18:30 WIB - 20:00 WIB',
      route: '',
    },
    {
      image: '/images/food-1.png',
      alt: 'vegetable-box',
      title: 'Organic Veggie Basket',
      description: 'Organic greens and root vegetables grouped for family-sized collection.',
      pickupLocation: { latitude: -6.9147, longitude: 107.6098 },
      location: 'Coblong, Bandung',
      timeOperational: '17:00 WIB - 19:30 WIB',
      route: '',
    },
    {
      image: '/images/food-2.png',
      alt: 'fruit-box',
      title: 'Surplus Fruit Collection',
      description: 'Sorted fruit boxes from a fresh market vendor with same-day pickup priority.',
      pickupLocation: { latitude: -6.2088, longitude: 106.8456 },
      location: 'Menteng, Jakarta Pusat',
      timeOperational: '19:00 WIB - 21:00 WIB',
      route: '',
    },
    {
      image: '/images/food-3.png',
      alt: 'rice-meals',
      title: 'Prepared Rice Meals',
      description: 'Ready-to-share rice meal packs portioned from lunch service surplus.',
      pickupLocation: { latitude: -7.7956, longitude: 110.3695 },
      location: 'Gondokusuman, Yogyakarta',
      timeOperational: '16:30 WIB - 18:30 WIB',
      route: '',
    },
    {
      image: '/images/food-4.png',
      alt: 'seafood-pack',
      title: 'Fresh Seafood Package',
      description: 'Chilled seafood packs that need quick collection to preserve quality.',
      pickupLocation: { latitude: 1.4748, longitude: 124.8421 },
      location: 'Wenang, Manado',
      timeOperational: '14:00 WITA - 16:00 WITA',
      route: '',
    },
    {
      image: '/images/food-5.png',
      alt: 'grocery-essentials',
      title: 'Daily Grocery Essentials',
      description: 'A mixed essentials kit with produce, eggs, and pantry basics.',
      pickupLocation: { latitude: -5.1477, longitude: 119.4327 },
      location: 'Ujung Pandang, Makassar',
      timeOperational: '18:00 WITA - 20:30 WITA',
      route: '',
    },
    {
      image: '/images/food-6.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-7.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-8.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-9.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-10.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-11.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-12.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-13.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-14.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-15.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },
    {
      image: '/images/food-16.png',
      alt: 'bread-drop',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      route: '',
    },

  ];

  readonly foods = computed<FoodCard[]>(() =>
    this.foodSeeds.map((food) => ({
      image: food.image,
      alt: food.alt,
      title: food.title,
      description: food.description,
      distance: this.locationService.formatDistance(food.pickupLocation),
      location: food.location,
      timeOperational: food.timeOperational,
      route: food.route,
    }))
  );

  readonly featuredFoods = computed(() => this.foods().slice(0, 2));
  readonly listingFoods = computed(() => this.foods().slice(2));

  toggleFilterMenu(): void {
    this.isFilterMenuOpen.update((value) => !value);
  }
}
