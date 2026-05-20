import { Component, computed, inject, signal } from '@angular/core';
import { NavbarThemeDirective } from '../../components/navbar/navbar-theme.directive';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LocationService } from '../../location.service';
import { FoodListing, FoodListingService } from '../../food-listing.service';
import { CommonModule } from '@angular/common';

interface FoodCard {
  image: string;
  alt: string;
  title: string;
  description: string;
  distance: string;
  location: string;
  timeOperational: string;
  route: string;
  category: string;
}

@Component({
  selector: 'app-view-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarThemeDirective],
  templateUrl: './view-detail-page.component.html',
  styleUrls: ['./view-detail-page.component.css'],
})
export class ViewDetailPageComponent {
  readonly locationService = inject(LocationService);

  private foodListingService = inject(FoodListingService);
  private route = inject(ActivatedRoute);

  foodDetail = signal<FoodListing | undefined>(undefined);
  relatedFoods = signal<FoodListing[]>([]);

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.foodDetail.set(this.foodListingService.getById(id));
      this.relatedFoods.set(this.foodListingService.getRelated(id, 2));
    });
  }

  readonly listingFoods = computed<FoodCard[]>(() =>
    this.relatedFoods().map((food) => ({
      image: food.image,
      alt: food.alt,
      title: food.title,
      description: food.description,
      distance: this.locationService.formatDistance(food.pickupLocation),
      location: food.location,
      timeOperational: food.timeOperational,
      route: '/food/details/' + food.id,
      category: food.category,
    }))
  );
}
