import { Listing } from './../../shared/models/listing.model';
import { ListingsService } from './../../shared/services/listings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listings: Array<Listing> = [];
  
  constructor(private listingsService: ListingsService) { }

  ngOnInit() {
    this.listingsService.getAll().subscribe(
      listings => {
        this.listings = listings
      });
  }

}
