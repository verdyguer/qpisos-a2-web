import { Listing } from './../../shared/models/listing.model';
import { Component, Input, OnChanges } from '@angular/core';
import { Ng2MapModule} from 'ng2-map';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnChanges {
  @Input() listings = Array<Listing>();
  positions: Array<Array<number>>;

  ngOnChanges() {
    this.positions = this.listings
      .map(listing => [listing.location.lat, listing.location.long]);
  }

  onMapReady(map) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 
  }
  onIdle(event) {
    console.log('map', event.target);
  }
  onMarkerInit(marker) {
    console.log('marker', marker);
  }
  onMapClick(event) {
    console.log(event.latLng.lat);
    event.target.panTo(event.latLng);
  }
}