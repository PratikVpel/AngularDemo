import { Pipe, PipeTransform } from '@angular/core';
import { Projecthistory } from './projecthistory';


@Pipe({
  name: 'projecthistory'
})
export class ProjecthistoryPipe implements PipeTransform {

  transform(history:Projecthistory[], employeeId:string) : Projecthistory[]{
    if(!employeeId) {
        return history;
    }
    return history.filter(history => history.employeeId == employeeId);
}

}

