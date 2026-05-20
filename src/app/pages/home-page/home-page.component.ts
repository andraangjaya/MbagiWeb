import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarThemeDirective } from '../../components/navbar/navbar-theme.directive';
import { GeoPoint, LocationService } from '../../location.service';

interface ActionLink {
  label: string;
  route: string;
  variant: 'solid' | 'transparent';
}

interface HighlightCard {
  image: string;
  alt: string;
  title: string;
  description: string;
  route: string;
}

interface HowItWorksStep {
  number: string;
  icon: 'bag' | 'pin' | 'food';
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

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
  selector: 'app-home-page',
  imports: [RouterLink, NavbarThemeDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  private locationService = inject(LocationService);

  slogans = ['TAKE', 'GIVE', 'SHARE', 'HELP', 'RESCUE', 'REDUCE'];
  loopSlogans = Array.from({ length: 10 }, () => this.slogans).flat();

  heroActions: ActionLink[] = [
    {
      label: 'Mulai Berbagi',
      route: '',
      variant: 'solid',
    },
    {
      label: 'Jelajahi Listing',
      route: '/discover-food',
      variant: 'transparent',
    },
  ];

  highlights: HighlightCard[] = [
    {
      image: '/images/waste-reduction.png',
      alt: 'waste-reduction',
      title: 'Waste Reduction',
      description: 'Menyelamatkan ribuan kilogram potensi limbah dari TPA setiap harinya.',
      route: '',
    },
    {
      image: '/images/community-impact.png',
      alt: 'community-impact',
      title: 'Community Impact',
      description: 'Menghubungkan surplus pangan dengan orang-orang yang benar-benar membutuhkan di sekitar mereka.',
      route: '',
    },
    {
      image: '/images/sustainable-education.png',
      alt: 'sustainable-education',
      title: 'Sustainable Education',
      description: 'Membangun kebiasaan baru untuk berbagi, mengurangi sampah, dan memperkuat solidaritas sosial.',
      route: '',
    },
  ];

  howItWorks: HowItWorksStep[] = [
    {
      number: '01',
      icon: 'bag',
      title: 'Mitra Daftarkan Surplus ke Mbagi.',
      description: 'Restoran, hotel, katering, dan supermarket mendaftarkan makanan sisa berkualitas yang belum terjual lewat aplikasi kami dalam hitungan menit.',
    },
    {
      number: '02',
      icon: 'pin',
      title: 'Penerima dan relawan mengambil pesanan.',
      description: 'Relawan atau penerima manfaat mengambil makanan tepat waktu. Dampak terlihat langsung di dasbor dari gram yang diselamatkan hingga senyum yang tercipta.',
    },
    {
      number: '03',
      icon: 'food',
      title: 'Surplus berubah menjadi dampak nyata.',
      description: 'Makanan yang layak konsumsi sampai ke tangan yang membutuhkan, sekaligus mengurangi volume limbah pangan setiap hari.',
    },
  ];

  stats: StatItem[] = [
    { value: '+12K', label: 'Pengguna' },
    { value: '21,1K', label: 'Makanan diberi' },
    { value: '-27%', label: 'total Volume limbah makanan' },
  ];

  private foodSeeds: FoodSeed[] = [
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Artisan Bakery Batch', description: '6 loaves of freshly baked whole grain sourdough. Perfect for local shelters or community hubs.', pickupLocation: { latitude: -6.2088, longitude: 106.8456 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Fresh Fruit Rescue', description: 'Boxes of unsold fruit ready for same-day redistribution to neighborhood food points.', pickupLocation: { latitude: -6.9147, longitude: 107.6098 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Community Rice Packs', description: 'Packed rice meals from a community kitchen, suitable for evening collection.', pickupLocation: { latitude: -7.2575, longitude: 112.7521 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Vegetable Box Surplus', description: 'Fresh market vegetables sorted and packed for families or local shelters.', pickupLocation: { latitude: -6.595, longitude: 106.8166 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Neighborhood Soup Pots', description: 'Prepared soup portions that can be claimed before late evening closing.', pickupLocation: { latitude: -7.7956, longitude: 110.3695 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Cafe Sandwich Drop', description: 'Fresh sandwiches from a cafe closing run, still suitable for direct sharing.', pickupLocation: { latitude: -6.9667, longitude: 110.4167 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Hot Meal Crates', description: 'Mixed hot meal trays available for pickup in insulated containers.', pickupLocation: { latitude: -8.6705, longitude: 115.2126 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Family Pantry Bundle', description: 'Staple pantry items grouped into bundles for community redistribution.', pickupLocation: { latitude: -5.1477, longitude: 119.4327 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Fresh Seafood Pack', description: 'Chilled seafood portions that must be claimed quickly for same-day use.', pickupLocation: { latitude: 1.4748, longitude: 124.8421 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Daily Grocery Essentials', description: 'Essentials bundle including produce, eggs, and shelf-ready basics.', pickupLocation: { latitude: -0.0263, longitude: 109.3425 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Prepared Lunch Trays', description: 'Lunch trays from corporate catering with safe pickup windows.', pickupLocation: { latitude: -3.3186, longitude: 114.5944 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Bakery Closing Batch', description: 'Bread and pastry items collected near bakery closing time.', pickupLocation: { latitude: -2.9761, longitude: 104.7754 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Campus Meal Donation', description: 'Prepared campus meals reserved for student and community support.', pickupLocation: { latitude: 0.5333, longitude: 101.45 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Weekend Veggie Basket', description: 'Weekend produce baskets sorted from surplus market inventory.', pickupLocation: { latitude: -0.9471, longitude: 100.4172 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Community Kitchen Ready Meals', description: 'Ready meals portioned for neighborhood pickup points.', pickupLocation: { latitude: -5.4292, longitude: 105.261 }, route: '' },
    { image: '/images/food-expires.png', alt: 'waste-reduction', title: 'Fresh Bread Night Pickup', description: 'Late pickup batch for fresh bread that should be redistributed tonight.', pickupLocation: { latitude: -2.5337, longitude: 140.7181 }, route: '' },
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
