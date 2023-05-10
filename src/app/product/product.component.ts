import { Component } from '@angular/core';
import {Product} from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']

  
})
export class ProductComponent {
  productArray:Product[];
  constructor() { 
    this.productArray=[
      new Product("P01","Pen",50,100,"stationary","Nataraj stationary"),
      new Product("P02","Pencil",10,100,"stationary","Nataraj stationary"),
      new Product("P03","Eraser",5,100,"stationary","Nataraj stationary"),
      new Product("P04","Pepsi",35,100,"beverages","pepsi Co"),
      new Product("P05","Cocacola",35,100,"beverages","coca cola Co"),
      new Product("P06","7up",35,100,"beverages","pepsi Co")

    ]
  }

}
