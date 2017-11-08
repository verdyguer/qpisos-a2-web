import { Listing } from './../../shared/models/listing.model';
import { ListingsService } from './../../shared/services/listings.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css']
})
export class ListingEditComponent implements OnInit {
  listing: Listing = new Listing();
  competence: Array<Listing> = [];

  constructor(
    private listingsService: ListingsService,
    private routes: ActivatedRoute) {}

  ngOnInit() {
    this.routes.params.subscribe(
      (params) => {
        this.listingsService.get(params['id']).subscribe(
          (listing) => this.listing = listing
        );
        this.listingsService.getCompetence(params['id']).subscribe(
          (listings) => {
            console.log(listings);
            this.competence = listings
          }
        )
      }
    )
  }

}
