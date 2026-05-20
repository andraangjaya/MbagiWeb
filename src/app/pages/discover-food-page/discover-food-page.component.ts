import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarThemeDirective } from '../../components/navbar/navbar-theme.directive';
import { GeoPoint, LocationService } from '../../location.service';

import { FoodListingService } from '../../food-listing.service';

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

@Component({
  selector: 'app-food-listing-page.component',
  imports: [RouterLink, NavbarThemeDirective],
  templateUrl: './discover-food-page.component.html',
  styleUrl: './discover-food-page.component.css',
})
export class DiscoverFoodPageComponent {
  private locationService = inject(LocationService);

  isFilterMenuOpen = signal(false);
  selectedFilter = signal('All Items');

  selectCategory(category: string) {
    this.selectedFilter.set(category);
  }

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

  private foodListingService = inject(FoodListingService);

  readonly foods = computed<FoodCard[]>(() => {
    let rawFoods = this.foodListingService.getAll();
    const currentFilter = this.selectedFilter();
    
    if (currentFilter !== 'All Items') {
      rawFoods = rawFoods.filter(food => food.category === currentFilter);
    }
    
    return rawFoods.map((food) => ({
      image: food.image,
      alt: food.alt,
      title: food.title,
      description: food.description,
      distance: this.locationService.formatDistance(food.pickupLocation),
      location: food.location,
      timeOperational: food.timeOperational,
      route: '/food/details/' + food.id,
    }));
  });

  readonly featuredFoods = computed(() => this.foods().slice(0, 2));
  readonly listingFoods = computed(() => this.foods().slice(2));

  toggleFilterMenu(): void {
    this.isFilterMenuOpen.update((value) => !value);
  }
}
