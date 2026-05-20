import {Component, computed, inject} from '@angular/core';
import {GeoPoint, LocationService} from '../../location.service';

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
  selector: 'app-view-detail-page',
  imports: [],
  templateUrl: './view-detail-page.component.html',
  styleUrl: './view-detail-page.component.css',
})
export class ViewDetailPageComponent {
  private locationService = inject(LocationService);

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

  readonly listingFoods = computed(() => this.foods().slice(2));

}
