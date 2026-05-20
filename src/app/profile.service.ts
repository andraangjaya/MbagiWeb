import { Injectable, signal } from '@angular/core';

export interface UserProfile {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  joinedLabel: string;
  avatar: string;
}

const STORAGE_KEY = 'mbagi.user-profile';

const DEFAULT_PROFILE: UserProfile = {
  fullName: 'Tom Crot',
  email: 'tomcrot@mbagi.id',
  phoneNumber: '081234567890',
  location: 'Set Location',
  joinedLabel: 'Joined March 2023',
  avatar: '/images/profile-pic.png',
};

@Injectable({ providedIn: 'root' })
export class ProfileService {
  readonly profile = signal<UserProfile>(this.restoreProfile());

  updateProfile(nextProfile: UserProfile): void {
    this.profile.set(nextProfile);
    this.persistProfile(nextProfile);
  }

  patchProfile(partial: Partial<UserProfile>): void {
    const nextProfile = {
      ...this.profile(),
      ...partial,
    };

    this.updateProfile(nextProfile);
  }

  private restoreProfile(): UserProfile {
    if (typeof window === 'undefined') {
      return DEFAULT_PROFILE;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return DEFAULT_PROFILE;
    }

    try {
      return {
        ...DEFAULT_PROFILE,
        ...(JSON.parse(stored) as Partial<UserProfile>),
      };
    } catch {
      return DEFAULT_PROFILE;
    }
  }

  private persistProfile(profile: UserProfile): void {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    }
  }
}
