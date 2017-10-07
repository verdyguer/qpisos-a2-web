import { ListingsService } from './shared/services/listings.service';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import './rxjs.operators';

import { Ng2MapModule} from 'ng2-map';

import { HomeComponent } from './components/home/home.component';
import { ListingListComponent } from './components/listing-list/listing-list.component';
import { MapComponent } from './components/map/map.component';
import { ListingEditComponent } from './components/listing-edit/listing-edit.component';

import { MapCompetenceComponent } from './components/map-competence/map-competence.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'listing-edit/:id', component:ListingEditComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListingListComponent,
    MapComponent,
    ListingEditComponent,
    MapCompetenceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MaterializeModule.forRoot(),
    RouterModule.forRoot(routes),
    Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCKIv36asP3gBqbOWJsq4lEtYPRx1LW-Sw'})
    
  ],
  providers: [
    ListingsService,
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }


