import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoritePlacesComponent } from './favorite-places/favorite-places.component';

import { PlacesService } from './services/places.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoritePlacesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
