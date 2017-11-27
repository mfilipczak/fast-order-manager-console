import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Order } from './order';
import { OrderService} from './order.service';

import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'my-order-detail',
  templateUrl: 'order-detail-component.html',
  styleUrls: ['order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order: Order;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.orderService.get(+params['id']))
      .subscribe(order => this.order = order);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.orderService.update(this.order)
      .then(() => this.goBack());
  }
}
