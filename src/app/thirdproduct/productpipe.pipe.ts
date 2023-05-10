import { Pipe, PipeTransform } from '@angular/core';
import { Thirdproduct } from './thirdproduct';

@Pipe({
  name: 'productpipe'
})
export class ProductpipePipe implements PipeTransform {

  transform(productArray: Thirdproduct[], minValue: number, maxValue : number): Thirdproduct[]{
    
     if(!productArray || !minValue || !maxValue) {

      return productArray;

    } 



    let filteredProducts = productArray.filter((p)=>{return p.unitPrice>=minValue && p.unitPrice<=maxValue;});

    return filteredProducts;
  }

}
