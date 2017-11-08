import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseApiService } from './base-api.service';
import { ApiError } from '../models/api-error.model';
import { Listing } from '../models/listing.model';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

@Injectable()
export class ListingsService extends BaseApiService {
  private static baseEndPoint = `${BaseApiService.baseApi}/listings`;

  private lists: Array<Listing> = [];

  constructor(private http: Http) {
    super();
  }

  getAll(): Observable<Array<Listing>> {
    return this.http.get(ListingsService.baseEndPoint, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  get(id: string): Observable<Listing> {
    return this.http.get(`${ListingsService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  remove(id: string): Observable<boolean> {
    return this.http.delete(`${ListingsService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
      .map(res => res.status === 204)
      .catch(super.handleError);
  }

  create(listing: Listing): Observable<Listing> {
    return this.http.post(`${ListingsService.baseEndPoint}`, JSON.stringify(listing), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  edit(listing: Listing): Observable<Listing> {
    return this.http.post(`${ListingsService.baseEndPoint}/${listing._id}`, JSON.stringify(listing), BaseApiService.defaultOptions)
      .map(res => res.json())
      .catch(super.handleError);
  }

  getCompetence(id: string): Observable<Array<Listing>> {
    return this.http.get(`${ListingsService.baseEndPoint}/${id}/competence`, BaseApiService.defaultOptions)
    .map(res => res.json())
    .catch(super.handleError);
  }

}
