import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from './skill';
@Pipe({
  name: 'skill'
})
export class SkillPipe implements PipeTransform {

  transform(skills:Skill[], employeeId:string) : Skill[]{
    if(!employeeId) {
        return skills;
    }
    return skills.filter(skills => skills.employeeId == employeeId);
}

}
