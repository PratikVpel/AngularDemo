import { Component, Input, OnInit } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {


  skills : Skill[];
@Input()
  employeeId !: string;
  

  constructor() {

    this.skills = [
      new Skill("emp01","java","primary", 10),
      new Skill("emp01","html","secondary",20),
      new Skill("emp02","angular","primary",15),
      new Skill("emp02","java","secondary",16),
      new Skill("emp03","html","primary",16),
      new Skill("emp03","css","secondary",16),
      new Skill("emp04","nodejs","primary",16),
      new Skill("emp04","java","secondary",16)

  ];


   }

   onSkillSelected(sk:Skill):void{
    this.employeeId = sk.employeeId;
    console.log(this.employeeId);
}
 

  ngOnInit(): void {
  }

}