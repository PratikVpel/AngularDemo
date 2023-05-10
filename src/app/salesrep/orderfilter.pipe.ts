import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order';

@Pipe({
  name: 'orderfilter'
})
export class OrderfilterPipe implements PipeTransform {
  transform(customerOrders:Order[],salesRepId:string): Order[]{
    if(!salesRepId){
      return customerOrders;
    }
    return customerOrders.filter(customerOrder =>customerOrder.salesRepId==salesRepId);
    
  }
}
