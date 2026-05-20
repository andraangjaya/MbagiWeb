import { Injectable } from '@angular/core';
import { GeoPoint } from './location.service';

export interface FoodListing {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  pickupLocation: GeoPoint;
  location: string;
  timeOperational: string;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class FoodListingService {
  private readonly listings: FoodListing[] = [
    {
      id: 'organic-veggie-basket-1',
      image: '/images/food-1.png',
      alt: 'Organic Veggie Basket',
      title: 'Organic Veggie Basket',
      description: 'Organic greens and root vegetables grouped for family-sized collection. Sourced from local farms.',
      pickupLocation: { latitude: -6.9147, longitude: 107.6098 },
      location: 'Coblong, Bandung',
      timeOperational: '17:00 WIB - 19:30 WIB',
      category: 'Vegetables',
    },
    {
      id: 'surplus-fruit-collection-2',
      image: '/images/food-2.png',
      alt: 'Surplus Fruit Collection',
      title: 'Surplus Fruit Collection',
      description: 'Sorted fruit boxes from a fresh market vendor with same-day pickup priority. Includes apples, bananas, and oranges.',
      pickupLocation: { latitude: -6.2088, longitude: 106.8456 },
      location: 'Menteng, Jakarta Pusat',
      timeOperational: '19:00 WIB - 21:00 WIB',
      category: 'Fruits',
    },
    {
      id: 'prepared-rice-meals-3',
      image: '/images/food-3.png',
      alt: 'Prepared Rice Meals',
      title: 'Prepared Rice Meals',
      description: 'Ready-to-share rice meal packs portioned from lunch service surplus. Perfect for evening collection.',
      pickupLocation: { latitude: -7.7956, longitude: 110.3695 },
      location: 'Gondokusuman, Yogyakarta',
      timeOperational: '16:30 WIB - 18:30 WIB',
      category: 'Rice Dishes',
    },
    {
      id: 'fresh-seafood-package-4',
      image: '/images/food-4.png',
      alt: 'Fresh Seafood Package',
      title: 'Fresh Seafood Package',
      description: 'Chilled seafood packs that need quick collection to preserve quality. Fresh from the morning catch.',
      pickupLocation: { latitude: 1.4748, longitude: 124.8421 },
      location: 'Wenang, Manado',
      timeOperational: '14:00 WITA - 16:00 WITA',
      category: 'Meat & Seafood',
    },
    {
      id: 'daily-grocery-essentials-5',
      image: '/images/food-5.png',
      alt: 'Daily Grocery Essentials',
      title: 'Daily Grocery Essentials',
      description: 'A mixed essentials kit with produce, eggs, and pantry basics. Ideal for families.',
      pickupLocation: { latitude: -5.1477, longitude: 119.4327 },
      location: 'Ujung Pandang, Makassar',
      timeOperational: '18:00 WITA - 20:30 WITA',
      category: 'Pantry',
    },
    {
      id: 'artisan-bakery-batch-6',
      image: '/images/food-6.png',
      alt: 'Artisan Bakery Batch',
      title: 'Artisan Bakery Batch',
      description: '6 loaves of freshly baked whole grain sourdough from today\'s unsold bakery stock. Still soft and perfect.',
      pickupLocation: { latitude: -8.6705, longitude: 115.2126 },
      location: 'Renon, Denpasar',
      timeOperational: '21:20 WIB - 22:40 WIB',
      category: 'Bakery',
    },
    {
      id: 'community-meal-package-7',
      image: '/images/food-7.png',
      alt: 'Community Meal Package',
      title: 'Community Meal Package',
      description: 'Prepared meal packs from a catering partner, ready for scheduled evening pickup.',
      pickupLocation: { latitude: -7.2575, longitude: 112.7521 },
      location: 'Tegalsari, Surabaya',
      timeOperational: '18:30 WIB - 20:00 WIB',
      category: 'Prepared Meals',
    },
    {
      id: 'healthy-lunch-portions-8',
      image: '/images/food-8.png',
      alt: 'Healthy Lunch Portions',
      title: 'Healthy Lunch Portions',
      description: 'Balanced lunch packs suitable for office or community pickup. Nutritious and fresh.',
      pickupLocation: { latitude: -6.9667, longitude: 110.4167 },
      location: 'Candisari, Semarang',
      timeOperational: '11:30 WIB - 13:30 WIB',
      category: 'Prepared Meals',
    },
    {
      id: 'bakery-sweet-treats-9',
      image: '/images/food-9.png',
      alt: 'Bakery Sweet Treats',
      title: 'Bakery Sweet Treats',
      description: 'Pastries and sweet buns bundled for end-of-day rescue. Delicious treats for sharing.',
      pickupLocation: { latitude: -6.595, longitude: 106.8166 },
      location: 'Bogor Tengah, Bogor',
      timeOperational: '20:00 WIB - 21:00 WIB',
      category: 'Bakery',
    },
    {
      id: 'family-pantry-bundle-10',
      image: '/images/food-10.png',
      alt: 'Family Pantry Bundle',
      title: 'Family Pantry Bundle',
      description: 'Staple pantry items grouped into bundles for community redistribution. Rice, beans, and canned goods.',
      pickupLocation: { latitude: -0.0263, longitude: 109.3425 },
      location: 'Pontianak Kota, Pontianak',
      timeOperational: '13:00 WIB - 16:00 WIB',
      category: 'Pantry',
    },
    {
      id: 'hot-meal-crates-11',
      image: '/images/food-11.png',
      alt: 'Hot Meal Crates',
      title: 'Hot Meal Crates',
      description: 'Mixed hot meal trays available for pickup in insulated containers. Best served immediately.',
      pickupLocation: { latitude: -3.3186, longitude: 114.5944 },
      location: 'Banjarmasin Tengah, Banjarmasin',
      timeOperational: '18:00 WIB - 19:30 WIB',
      category: 'Prepared Meals',
    },
    {
      id: 'fresh-bread-night-pickup-12',
      image: '/images/food-12.png',
      alt: 'Fresh Bread Night Pickup',
      title: 'Fresh Bread Night Pickup',
      description: 'A late pickup bread batch suitable for direct neighborhood sharing. Mostly baguettes and rolls.',
      pickupLocation: { latitude: -2.5337, longitude: 140.7181 },
      location: 'Abepura, Jayapura',
      timeOperational: '19:30 WIT - 21:00 WIT',
      category: 'Bakery',
    },
    {
      id: 'premium-lunch-box-13',
      image: '/images/food-13.png',
      alt: 'Premium Lunch Box',
      title: 'Premium Lunch Box',
      description: 'High-quality nutritional balance lunch boxes. 30+ boxes available for collection.',
      pickupLocation: { latitude: -6.2298, longitude: 106.8252 },
      location: 'Kuningan, Jakarta Selatan',
      timeOperational: '12:00 WIB - 14:00 WIB',
      category: 'Prepared Meals',
    },
    {
      id: 'local-cafe-leftovers-14',
      image: '/images/food-14.png',
      alt: 'Local Cafe Leftovers',
      title: 'Local Cafe Leftovers',
      description: 'Fresh cafe leftovers packed for collection before close. Sandwiches and salads.',
      pickupLocation: { latitude: 0.5333, longitude: 101.45 },
      location: 'Pekanbaru, Riau',
      timeOperational: '20:30 WIB - 22:00 WIB',
      category: 'Prepared Meals',
    },
    {
      id: 'weekend-veggie-basket-15',
      image: '/images/food-15.png',
      alt: 'Weekend Veggie Basket',
      title: 'Weekend Veggie Basket',
      description: 'Weekend produce baskets sorted from surplus market inventory. Great for home cooking.',
      pickupLocation: { latitude: -0.9471, longitude: 100.4172 },
      location: 'Padang Barat, Padang',
      timeOperational: '16:00 WIB - 18:30 WIB',
      category: 'Vegetables',
    },
    {
      id: 'community-kitchen-ready-meals-16',
      image: '/images/food-16.png',
      alt: 'Community Kitchen Ready Meals',
      title: 'Community Kitchen Ready Meals',
      description: 'Ready meals portioned for neighborhood pickup points. Filling and nutritious.',
      pickupLocation: { latitude: -5.4292, longitude: 105.261 },
      location: 'Tanjung Karang, Bandar Lampung',
      timeOperational: '17:30 WIB - 19:30 WIB',
      category: 'Ready Meals',
    }
  ];

  getAll(): FoodListing[] {
    return this.listings;
  }

  getById(id: string | null): FoodListing | undefined {
    return this.listings.find((listing) => listing.id === id);
  }

  getByIds(ids: string[]): FoodListing[] {
    return ids
      .map((id) => this.getById(id))
      .filter((listing): listing is FoodListing => Boolean(listing));
  }

  getFeatured(count = 2): FoodListing[] {
    return this.listings.slice(0, count);
  }

  getRelated(id: string | null, count = 4): FoodListing[] {
    return this.listings.filter((listing) => listing.id !== id).slice(0, count);
  }
}
