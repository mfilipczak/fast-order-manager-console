import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Order } from './order';

@Injectable()
export class OrderSearchService {

  constructor(private http: Http) {}

  search(term: string): Promise<Order[]> {
    return this.http
      .get(`http://localhost:8080/orders/search/findByExternalIdIgnoreCaseContaining?externalId=${term}`)
      .toPromise()
      .then((r: Response) => r.json()._embedded.orders as Order[]);
  }
}
