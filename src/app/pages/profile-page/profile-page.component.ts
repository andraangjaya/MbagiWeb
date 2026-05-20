import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GeoPoint, LocationService } from '../../location.service';
import { FoodListingService } from '../../food-listing.service';


@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  private locationService = inject(LocationService);

  isCustomizeProfileOpen = false;
  profileName = 'Tom Crot';
  profileTitle = 'Portland, OR';

  toggleCustomizeProfile() {
    this.isCustomizeProfileOpen = !this.isCustomizeProfileOpen;
  }



  private foodListingService = inject(FoodListingService);

  readonly activeDonations = computed(() =>
    this.foodListingService.getFeatured(2).map((donation) => ({
      image: donation.image,
      alt: donation.alt,
      title: donation.title,
      description: donation.description,
      distance: this.locationService.formatDistance(donation.pickupLocation),
      route: '/food/details/' + donation.id
    }))
  );
}
