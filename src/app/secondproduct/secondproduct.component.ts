import { Component} from '@angular/core';
import {Secondproduct} from './secondproduct';
@Component({
  selector: 'app-secondproduct',
  templateUrl: './secondproduct.component.html',
  styleUrls: ['./secondproduct.component.css']
})
export class SecondproductComponent {
  productArray:Secondproduct[];
 
  selectedCategory : string = "stationary";
  /*
   options = [
    { name: "stationary" },
    { name: "beverages" }
    
  ];
  */
  constructor() {
    
    this.productArray=[
      new Secondproduct("P01","Pen",50,100,"stationary","Nataraj stationary"),
      new Secondproduct("P02","Pencil",10,100,"stationary","Nataraj stationary"),
      new Secondproduct("P03","Eraser",5,100,"stationary","Nataraj stationary"),
      new Secondproduct("P04","Pepsi",35,100,"beverages","pepsi Co"),
      new Secondproduct("P05","Cocacola",35,100,"beverages","coca cola Co"),
      new Secondproduct("P06","7up",35,100,"beverages","pepsi Co")

    ]
   }

  ngOnInit(): void {
    
    
  }

}




