import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [
    { id: 1, name: 'Jyoti Sing', photo: 'jyoti.jpg', description: 'Web Developer', address: 'Chandani Chowk Delhi' }
    // Add more profiles if needed
  ];

  getProfiles(): Observable<Profile[]> {
    return of(this.profiles);
  }

  getProfile(id: number): Observable<Profile | undefined> {
    return of(this.profiles.find(profile => profile.id === id));
  }
}
