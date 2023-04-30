import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MoviesHighlightComponent } from './components/movies-highlight/movies-highlight.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesSliderComponent } from './components/movies-slider/movies-slider.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviesHighlightComponent,
    MoviesComponent,
    MoviesSliderComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
