import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

interface FoodCard {
  image: string;
  alt: string;
  title: string;
  description: string;
  distance: string;
  route: string;
}

@Component({
  selector: 'app-food-listing-page.component',
  imports: [
    RouterLink
  ],
  templateUrl: './discover-food-page.component.html',
  styleUrl: './discover-food-page.component.css',
})
export class DiscoverFoodPageComponent {
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


  toggleFilterMenu(): void {
    this.isFilterMenuOpen.update(v => !v);
  }

  // toggleFilterMenu(): void {
  //   this.isFilterMenuOpen = !this.isFilterMenuOpen;
  // }

  foods: FoodCard[] = [
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },
    {
      image: '/images/food-expires.png',
      alt: 'waste-reduction',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.',
      distance: 'Free • 1.1 miles',
      route: '',
    },

  ];
}
