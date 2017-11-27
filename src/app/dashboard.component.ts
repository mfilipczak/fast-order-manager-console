import { Component, OnInit } from '@angular/core'

import { Order } from './order'
import {OrderStats} from './order-stats'
import { OrderService } from './order.service'

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders: Order[] = [];

  public pieChartLabels:string[] =[];
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.getOrders()
      .then(orders => this.orders = orders.slice(0, 4));
      this.orderService.report().then(orders => {
            var list1 = []
            for(var i = 0; i < orders.length; i++) {
                list1.push(orders[i].currentState);
                this.pieChartData[i] =(orders[i].cnt);
          }
          this.pieChartLabels = list1;
        });
  }
}
