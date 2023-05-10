import { Component} from '@angular/core';
import { Thirdproduct } from './thirdproduct';

@Component({
  selector: 'app-thirdproduct',
  templateUrl: './thirdproduct.component.html',
  styleUrls: ['./thirdproduct.component.css']
})
export class ThirdproductComponent {

    productArray:Thirdproduct[];
    minValue:number=1;
    maxValue:number=1000;

    constructor() { 
      this.productArray=[
        new Thirdproduct("P01","Pen",50,100,"stationary","Nataraj stationary"),
        new Thirdproduct("P02","Pencil",10,100,"stationary","Nataraj stationary"),
        new Thirdproduct("P03","Eraser",5,100,"stationary","Nataraj stationary"),
        new Thirdproduct("P04","Pepsi",35,100,"beverages","pepsi Co"),
        new Thirdproduct("P05","Cocacola",35,100,"beverages","coca cola Co"),
        new Thirdproduct("P06","7up",35,100,"beverages","pepsi Co")
  
      ]
    }
  
  }