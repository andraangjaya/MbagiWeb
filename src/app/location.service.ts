import { Injectable, signal } from '@angular/core';

export interface IndonesiaArea {
  id: string;
  name: string;
  province: string;
  latitude: number;
  longitude: number;
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

const STORAGE_KEY = 'mbagi.selected-location';

const INDONESIA_AREAS: IndonesiaArea[] = [
  { id: 'banda-aceh', name: 'Banda Aceh', province: 'Aceh', latitude: 5.5483, longitude: 95.3238 },
  { id: 'medan', name: 'Medan', province: 'North Sumatra', latitude: 3.5952, longitude: 98.6722 },
  { id: 'padang', name: 'Padang', province: 'West Sumatra', latitude: -0.9471, longitude: 100.4172 },
  { id: 'pekanbaru', name: 'Pekanbaru', province: 'Riau', latitude: 0.5333, longitude: 101.45 },
  { id: 'batam', name: 'Batam', province: 'Riau Islands', latitude: 1.0456, longitude: 104.0305 },
  { id: 'palembang', name: 'Palembang', province: 'South Sumatra', latitude: -2.9761, longitude: 104.7754 },
  { id: 'bandar-lampung', name: 'Bandar Lampung', province: 'Lampung', latitude: -5.4292, longitude: 105.261 },
  { id: 'jakarta-pusat', name: 'Jakarta Pusat', province: 'DKI Jakarta', latitude: -6.1865, longitude: 106.8341 },
  { id: 'jakarta-selatan', name: 'Jakarta Selatan', province: 'DKI Jakarta', latitude: -6.2615, longitude: 106.8106 },
  { id: 'jakarta-barat', name: 'Jakarta Barat', province: 'DKI Jakarta', latitude: -6.1683, longitude: 106.7587 },
  { id: 'bogor', name: 'Bogor', province: 'West Java', latitude: -6.595, longitude: 106.8166 },
  { id: 'depok', name: 'Depok', province: 'West Java', latitude: -6.4025, longitude: 106.7942 },
  { id: 'bekasi', name: 'Bekasi', province: 'West Java', latitude: -6.2383, longitude: 106.9756 },
  { id: 'bandung', name: 'Bandung', province: 'West Java', latitude: -6.9175, longitude: 107.6191 },
  { id: 'cirebon', name: 'Cirebon', province: 'West Java', latitude: -6.732, longitude: 108.5523 },
  { id: 'semarang', name: 'Semarang', province: 'Central Java', latitude: -6.9667, longitude: 110.4167 },
  { id: 'surakarta', name: 'Surakarta', province: 'Central Java', latitude: -7.5666, longitude: 110.8167 },
  { id: 'yogyakarta', name: 'Yogyakarta', province: 'Special Region of Yogyakarta', latitude: -7.7956, longitude: 110.3695 },
  { id: 'surabaya', name: 'Surabaya', province: 'East Java', latitude: -7.2575, longitude: 112.7521 },
  { id: 'malang', name: 'Malang', province: 'East Java', latitude: -7.9666, longitude: 112.6326 },
  { id: 'denpasar', name: 'Denpasar', province: 'Bali', latitude: -8.6705, longitude: 115.2126 },
  { id: 'mataram', name: 'Mataram', province: 'West Nusa Tenggara', latitude: -8.5833, longitude: 116.1167 },
  { id: 'kupang', name: 'Kupang', province: 'East Nusa Tenggara', latitude: -10.1772, longitude: 123.607 },
  { id: 'pontianak', name: 'Pontianak', province: 'West Kalimantan', latitude: -0.0263, longitude: 109.3425 },
  { id: 'palangkaraya', name: 'Palangkaraya', province: 'Central Kalimantan', latitude: -2.2096, longitude: 113.9213 },
  { id: 'banjarmasin', name: 'Banjarmasin', province: 'South Kalimantan', latitude: -3.3186, longitude: 114.5944 },
  { id: 'samarinda', name: 'Samarinda', province: 'East Kalimantan', latitude: -0.5022, longitude: 117.1537 },
  { id: 'nusantara', name: 'Nusantara', province: 'East Kalimantan', latitude: -0.9731, longitude: 116.7086 },
  { id: 'manado', name: 'Manado', province: 'North Sulawesi', latitude: 1.4748, longitude: 124.8421 },
  { id: 'palu', name: 'Palu', province: 'Central Sulawesi', latitude: -0.8986, longitude: 119.8506 },
  { id: 'makassar', name: 'Makassar', province: 'South Sulawesi', latitude: -5.1477, longitude: 119.4327 },
  { id: 'kendari', name: 'Kendari', province: 'Southeast Sulawesi', latitude: -3.9985, longitude: 122.512 },
  { id: 'gorontalo', name: 'Gorontalo', province: 'Gorontalo', latitude: 0.5435, longitude: 123.0568 },
  { id: 'ambon', name: 'Ambon', province: 'Maluku', latitude: -3.6954, longitude: 128.1814 },
  { id: 'ternate', name: 'Ternate', province: 'North Maluku', latitude: 0.7907, longitude: 127.3842 },
  { id: 'jayapura', name: 'Jayapura', province: 'Papua', latitude: -2.5337, longitude: 140.7181 },
  { id: 'sorong', name: 'Sorong', province: 'Southwest Papua', latitude: -0.8762, longitude: 131.2558 },
];

@Injectable({ providedIn: 'root' })
export class LocationService {
  readonly areas = INDONESIA_AREAS;
  readonly selectedArea = signal<IndonesiaArea | null>(this.restoreSelectedArea());

  setLocation(area: IndonesiaArea): void {
    this.selectedArea.set(area);
    this.persistSelectedArea(area.id);
  }

  clearLocation(): void {
    this.selectedArea.set(null);
    this.removePersistedArea();
  }

  filterAreas(query: string): IndonesiaArea[] {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return this.areas;
    }

    return this.areas.filter((area) =>
      `${area.name} ${area.province}`.toLowerCase().includes(normalized)
    );
  }

  formatDistance(target: GeoPoint, prefix = 'Free'): string {
    const selectedArea = this.selectedArea();

    if (!selectedArea) {
      return `${prefix} | Set location`;
    }

    const distanceInKm = calculateDistanceInKm(selectedArea, target);
    const roundedDistance = distanceInKm < 10 ? distanceInKm.toFixed(1) : `${Math.round(distanceInKm)}`;

    return `${prefix} • ${roundedDistance} km`;
  }

  formatAreaLabel(area: IndonesiaArea | null): string {
    return area ? `${area.name}, ${area.province}` : 'Set Location';
  }

  private restoreSelectedArea(): IndonesiaArea | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const areaId = window.localStorage.getItem(STORAGE_KEY);
    return this.areas.find((area) => area.id === areaId) ?? null;
  }

  private persistSelectedArea(areaId: string): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, areaId);
    }
  }

  private removePersistedArea(): void {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }
}

function calculateDistanceInKm(origin: GeoPoint, destination: GeoPoint): number {
  const earthRadiusInKm = 6371;
  const latitudeDelta = toRadians(destination.latitude - origin.latitude);
  const longitudeDelta = toRadians(destination.longitude - origin.longitude);
  const originLatitude = toRadians(origin.latitude);
  const destinationLatitude = toRadians(destination.latitude);

  const haversine =
    Math.sin(latitudeDelta / 2) * Math.sin(latitudeDelta / 2) +
    Math.cos(originLatitude) *
      Math.cos(destinationLatitude) *
      Math.sin(longitudeDelta / 2) *
      Math.sin(longitudeDelta / 2);

  return earthRadiusInKm * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function toRadians(value: number): number {
  return (value * Math.PI) / 180;
}
