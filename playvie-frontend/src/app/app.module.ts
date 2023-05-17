import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MoviesHighlightComponent } from './components/movies-highlight/movies-highlight.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesSliderComponent } from './components/movies-slider/movies-slider.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInput } from './components/search-input/search-input.component';
import { MainButton } from './components/main-button/main-button.component';
import { CardMovie } from './components/card-movie/card-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    MoviesHighlightComponent,
    MoviesComponent,
    MoviesSliderComponent,
    MovieDetailsComponent,
    SearchInput,
    MainButton,
    CardMovie
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
