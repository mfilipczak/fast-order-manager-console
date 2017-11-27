import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { OrderSearchService } from './order-search.service';
import { Order } from './order';

@Component({
  moduleId: module.id,
  selector: 'order-search',
  templateUrl: 'order-search.component.html',
  styleUrls: [ 'order-search.component.less' ],
  providers: [OrderSearchService]
})
export class OrderSearchComponent implements OnInit {

  orders: Order[];

  private searchTerms = new Subject<string>();

  constructor(
    private orderSearchService: OrderSearchService,
    private router: Router
  ) {

  }

  // Push a search term into the observable stream.
  search(term: string): void {
    console.log("dupa");
    this.orderSearchService.search(term).then(orders => this.orders = orders);
    console.log(this.orders);
  }

  ngOnInit(): void {
 /*   this.orders = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.orderSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Order[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Order[]>([]);
      });*/
  }

  gotoDetail(order: Order): void {
    let link = ['/detail', order.id];
    this.router.navigate(link);
  }
}
