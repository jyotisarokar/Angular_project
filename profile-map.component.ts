import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-profile-map',
  templateUrl: './profile-map.component.html',
  styleUrls: ['./profile-map.component.css']
})
export class ProfileMapComponent implements OnChanges {
  @Input() profile: Profile | null = null;
  mapOptions: google.maps.MapOptions = {
    center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
    zoom: 12
  };
  markerPosition: google.maps.LatLngLiteral | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['profile'] && this.profile) {
      this.updateMap();
    }
  }

  private updateMap(): void {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.profile?.address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        this.mapOptions.center = results[0].geometry.location;
        this.markerPosition = results[0].geometry.location.toJSON();
      }
    });
  }
}
