import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { Order } from './order'
import {OrderStats} from './order-stats'
import {LoadingService} from './loading.service';

@Injectable()
export class OrderService {

  private ordersUrl = 'http://localhost:8080/orders';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private loadingService: LoadingService) {

  }

  getOrders(): Promise<Order[]> {
     this.loadingService.setLoading(true);
     var orders =  this.http.get(this.ordersUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json()._embedded.orders as Order[])
      .catch(this.handleError);
      this.loadingService.setLoading(false);
     return orders; 

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo only
    this.loadingService.setLoading(false);
    return Promise.reject(error.message || error);
  }


  getOrder(id: number): Promise<Order> {
    return this.getOrders()
      .then(orders => orders.find(order => order.id === id))
  }
    
  get(id: number): Promise<Order> {
    const url = `${this.ordersUrl}/${id}`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Order)
      .catch(this.handleError);
  }

  create(name: string): Promise<Order> {
    return this.http
      .post(this.ordersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  update(order: Order): Promise<Order> {
    const url = `${this.ordersUrl}/${order.id}`;
    return this.http
      .put(url, JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(() => order)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    console.log(`order.service - deleting ${id}`);
    const url = `${this.ordersUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  report(): Promise<OrderStats[]> {
    console.log(`order.service - report`);
    const url = `${this.ordersUrl}/report`;
    return this.http
      .get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json()._embedded.orders as OrderStats[])
      .catch(this.handleError);
  }
}
