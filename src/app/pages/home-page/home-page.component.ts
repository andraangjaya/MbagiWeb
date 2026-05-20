import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarThemeDirective } from '../../components/navbar/navbar-theme.directive';
import { GeoPoint, LocationService } from '../../location.service';
import { FoodListingService } from '../../food-listing.service';

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
