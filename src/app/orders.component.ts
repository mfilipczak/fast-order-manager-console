import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from './order';
import { OrderService } from './order.service'

@Component({
  moduleId: module.id,
  selector: 'my-orders',
  templateUrl: 'orders.component.html',
  styleUrls: ['orders.component.less'],
  providers: [OrderService]

})
export class OrdersComponent implements OnInit {
	orders: Order[];
  selectedOrder: Order;
  p: number = 1;

	constructor(private router: Router, private orderService: OrderService){ }

	ngOnInit(): void {
	  this.geOrders();
  }

	geOrders(): void {
	  this.orderService.getOrders().then(orders => this.orders = orders);
  }

	onSelect(order: Order): void {
		this.selectedOrder = order;
	}

	gotoDetail(): void {
	  this.router.navigate(['/detail', this.selectedOrder.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.orderService.create(name)
      .then(order => {
        this.orders.push(order);
        this.selectedOrder = null;
      });
  }

  delete(order: Order): void {
	  this.orderService
      .delete(order.id)
      .then(() => {
	      this.orders = this.orders.filter(h => h !== order);
	      if(this.selectedOrder === order) {
	        this.selectedOrder = null;
        }
      });
  }
}
