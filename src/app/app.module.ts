import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { MovieComponent } from './movie/movie.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { MovieLinksComponent } from './movie-links/movie-links.component';
import { TvShowLinksComponent } from './tv-show-links/tv-show-links.component';
import { LinksComponent } from './links/links.component';
import { RouterModule,Routes }   from '@angular/router';
import { ShareLinkComponent } from './share-link/share-link.component';
import { ShareTileComponent } from './share-tile/share-tile.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {PostLinkComponent } from './post-link/post-link.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AfServiceService } from './af-service.service';
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';



const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv/:id',     component: TvShowComponent },
  { path: 'tv/:id/:name/:season/:episode',     component: TvShowComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    MovieComponent,
    TvShowComponent,
    MovieDetailsComponent,
    TvShowDetailsComponent,
    MovieLinksComponent,
    TvShowLinksComponent,
    LinksComponent,
    ShareLinkComponent,
    ShareTileComponent,
    HomeComponent,
    PostLinkComponent,
    LoginComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, 'shareit'),
    AngularFireDatabaseModule, 
    AngularFireAuthModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule
  ],
  exports : [MdButtonModule, MdCheckboxModule],
  
  providers: [AfServiceService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
