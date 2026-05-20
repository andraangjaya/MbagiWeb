import {Component, computed, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NavbarThemeDirective} from '../../components/navbar/navbar-theme.directive';
import {GeoPoint, LocationService} from '../../location.service';
import {FoodListingService} from '../../food-listing.service';

interface FoodCard {
  image: string;
  alt: string;
  title: string;
  description: string;
  distance: string;
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

  private foodListingService = inject(FoodListingService);

  readonly foods = computed<FoodCard[]>(() =>
    this.foodListingService.getAll().map((food) => ({
      image: food.image,
      alt: food.alt,
      title: food.title,
      description: food.description,
      distance: this.locationService.formatDistance(food.pickupLocation),
      route: '/food/details/' + food.id,
    }))
  );
}
