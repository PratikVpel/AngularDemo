import { Component, OnInit } from '@angular/core';
import { Salesrep } from './salesrep';

@Component({
  selector: 'app-salesrep',
  templateUrl: './salesrep.component.html'
})
export class SalesrepComponent {
 
  salesReps : Salesrep[];

  salesRepId !: string;

  constructor() {
    this.salesReps=[
      new Salesrep("S01","Pravin D","Chennai"),
      new Salesrep("S02","Dinesh J","Bangalore"),
      new Salesrep("S03","Sneha J","Hydrabed"),
      new Salesrep("S04","Janish P","Hydrabed")
    ];
   }
onSalesRepIdSelected(salesReps:Salesrep):void{
  this.salesRepId=salesReps.salesRepId;
  console.log(this.salesRepId);
}

}
