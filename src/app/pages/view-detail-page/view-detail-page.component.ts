import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { NavbarThemeDirective } from '../../components/navbar/navbar-theme.directive';
import { LocationService } from '../../location.service';
import { foodCatalog, getFoodById } from '../../food-catalog';

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
  selector: 'app-view-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarThemeDirective],
  templateUrl: './view-detail-page.component.html',
  styleUrls: ['./view-detail-page.component.css'],
})
export class ViewDetailPageComponent {
  private route = inject(ActivatedRoute);
  private locationService = inject(LocationService);
  readonly foodId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('foodId'))),
    { initialValue: this.route.snapshot.paramMap.get('foodId') }
  );

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

  readonly selectedFood = computed(() => getFoodById(this.foodId()) ?? this.foods()[0]);
  readonly listingFoods = computed(() => this.foods().filter((food) => food.id !== this.selectedFood()?.id));

  trackFoodById(_: number, food: FoodCard): string {
    return food.id;
  }
}
