import { Listing } from './../../shared/models/listing.model';
import { ListingsService } from './../../shared/services/listings.service';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']
})
export class ListingListComponent {
  @Input() listings: Array<Listing> = [];
}
