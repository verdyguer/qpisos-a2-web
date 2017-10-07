import { ApiError } from '../models/api-error.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class BaseApiService {
  protected static baseApi = environment.baseApi;
  protected static defaultHeaders = new Headers({ 'Content-Type': 'application/json' });
  protected static defaultOptions = new RequestOptions({ headers: BaseApiService.defaultHeaders });

  constructor() {}

  protected handleError(error: Response | any): Observable<any> {
    if (!environment.production) {
      console.error(error);
    }
    return Observable.throw(error.json());
  }

}