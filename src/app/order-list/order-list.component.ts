import { Component, OnInit, Input } from '@angular/core';
import { Order} from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {
  @Input() orders: Order[];
  @Input() loading: boolean;
  constructor() { }

  ngOnInit() {
  }

}
