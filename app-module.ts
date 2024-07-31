import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileMapComponent } from './profile-map/profile-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    ProfileMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
