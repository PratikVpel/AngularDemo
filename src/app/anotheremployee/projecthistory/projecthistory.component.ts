import { Component, Input, OnInit } from '@angular/core';
import { Projecthistory } from './projecthistory';

@Component({
  selector: 'app-projecthistory',
  templateUrl: './projecthistory.component.html',
  styleUrls: ['./projecthistory.component.css']
})
export class ProjecthistoryComponent implements OnInit {

 
  history : Projecthistory[];
  @Input()
  employeeId !: string;

  constructor() { 


    this.history = [
      new Projecthistory("emp01","Banking"),
      new Projecthistory("emp01","Insurance"),
      new Projecthistory("emp02","Autoombile"),
      new Projecthistory("emp02","Pharma"),
      new Projecthistory("emp03","Agriculture"),
      new Projecthistory("emp03","Chemical"),
      new Projecthistory("emp04","Automation"),
      new Projecthistory("emp04","Defence"),
      new Projecthistory("emp05","Health"),
      new Projecthistory("emp05","IT"),

  ];
  }

  onSkillSelected(sk:Projecthistory):void{
    this.employeeId = sk.employeeId;
    console.log(this.employeeId);
}
  ngOnInit(): void {
  }

}
