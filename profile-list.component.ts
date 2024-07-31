import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [];
  selectedProfile: Profile | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe(profiles => this.profiles = profiles);
  }

  showProfile(profile: Profile): void {
    this.selectedProfile = profile;
  }
}
