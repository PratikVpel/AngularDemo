import { Component, OnInit } from '@angular/core';
import { Anotheremployee } from './anotheremployee';
import { DropdownModule } from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';

@Component({
  selector: 'app-anotheremployee',
  templateUrl: './anotheremployee.component.html',
  styleUrls: ['./anotheremployee.component.css']
})
export class AnotheremployeeComponent implements OnInit {
  button1 =false;
  button2 =false;
  employeeArray: Anotheremployee[];
  selectedEmployee : string[];
  employees: string='';


  constructor() { 

    this.selectedEmployee = ["choose","emp01", "emp02", "emp03","emp04","emp05"];
    this.employeeArray = [
      new Anotheremployee("emp01","Ravi Kumar","November 23,1998","ceo","bengaluru"),
      new Anotheremployee("emp02","Ramesh Kumar","November 23,2017","manager","chennai"),
      new Anotheremployee("emp03","Ajay Varma","November 23,2008","admin","chennai"),
      new Anotheremployee("emp04","Kiran Reddy","November 23,2017","developer","bengaluru"),
      new Anotheremployee("emp05","Gopi Krishna","November 23,2017","developer","chennai")
     
  ];
  }


  onSkillSelect() {  
    this.button1 = true;
    this.button2=false;
    console.log("testbutton1");  
  }  

  onHistorySelect() {  
    this.button2 = true;  
    this.button1 = false;
    console.log("testbutton2");  
  }  


  

//   onSkillSelect():void{
//     this.button1 = "skill";
//      console.log("skill");
// }

// onHistorySelect():void{
//   this.button2 = "history";
//   console.log("history");
// }

  ngOnInit(): void {
  }

}
