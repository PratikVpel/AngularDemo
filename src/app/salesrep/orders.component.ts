import { Component, Input, OnInit } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  
  customerOrders : Order[];

  @Input()
  salesRepId !: string;
  
  constructor() {
    this.customerOrders=[
      new Order("OR001",new Date("10/07/2018"),"S01"),
      new Order("OR002",new Date("10/07/2018"),"S02"),
      new Order("OR003",new Date("10/07/2018"),"S03"),
      new Order("OR004",new Date("10/07/2018"),"S04"),
      new Order("OR005",new Date("10/07/2018"),"S01"),
      new Order("OR006",new Date("10/07/2018"),"S02"),
      new Order("OR007",new Date("11/07/2018"),"S02"),
      new Order("OR008",new Date("11/07/2018"),"S02"),
      new Order("OR009",new Date("11/07/2018"),"S03"),
      new Order("OR000",new Date("11/07/2018"),"S03"),
      new Order("OR010",new Date("11/07/2018"),"S01"),
      new Order("OR011",new Date("11/07/2018"),"S02"),
    
    ]
   }
}
