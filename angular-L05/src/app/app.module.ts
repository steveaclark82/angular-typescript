import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoritePlacesComponent } from './favorite-places/favorite-places.component';

import { PlacesService } from './services/places.service';
import { PlaceformComponent } from './placeform/placeform.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FavoritePlacesComponent,
    PlaceformComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }