import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NavbarThemeDirective} from '../../components/navbar/navbar-theme.directive';

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
