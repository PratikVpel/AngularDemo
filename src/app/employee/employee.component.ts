import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  employees:Employee[];
  selectedDepartment:String='';
  interest:String='';

  constructor() { 
    
    this.employees=[
      new Employee("e001","ravi","kumar",45000,new Date("November 23,1998"),"Training","Trainer","Hyderabad",5),
      new Employee("e002","ramesh","kumar",45000,new Date("June 28,2019"),"Training","Trainer","Hyderabad",4),
      new Employee("e003","ajay","verma",35000,new Date("November 23,2008"),"Testing","Tester","Hyderabad",3),
      new Employee("e004","kiran","reddy",35000,new Date("June 28,2019"),"Testing","Tester","Hyderabad",5),
      new Employee("e005","gopi","krishna",55000,new Date("November 23,2017"),"Projects","Programmer","Hyderabad",4),
      


    ]

  }

  

}
