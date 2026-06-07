import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarThemeDirective } from '../../components/navbar/navbar-theme.directive';
import { LocationService } from '../../location.service';
import { foodCatalog } from '../../food-catalog';

interface FoodCard {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  distance: string;
  location: string;
  timeOperational: string;
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

  readonly foods = computed<FoodCard[]>(() =>
    foodCatalog.map((food) => ({
      id: food.id,
      image: food.image,
      alt: food.alt,
      title: food.title,
      description: food.description,
      distance: this.locationService.formatDistance(food.pickupLocation),
      location: food.location,
      timeOperational: food.timeOperational,
    }))
  );

  readonly featuredFoods = computed(() => this.foods().slice(0, 2));
  readonly listingFoods = computed(() => this.foods().slice(2));

  toggleFilterMenu(): void {
    this.isFilterMenuOpen.update((value) => !value);
  }
}
