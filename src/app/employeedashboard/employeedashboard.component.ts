import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { Employeedashboard } from './employeedashboard';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {

  formValue !: FormGroup;
  employeeData !: any;
  showAdd: boolean = true;
  showEdit: boolean = true;
  employee: Employeedashboard = new Employeedashboard();
  constructor(private formbuilder: FormBuilder,
    private apiservice: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group(
      {
        firstName: [''],
        lastName: [''],
        email: [''],
        mobile: [''],
        salary: ['']
      }
    )
    this.getallemployee();
  }
  postdetails() {
    this.employee.firstName = this.formValue.value.firstName;
    this.employee.lastName = this.formValue.value.lastName;
    this.employee.email = this.formValue.value.email;
    this.employee.mobile = this.formValue.value.mobile;
    this.employee.salary = this.formValue.value.salary;

    this.apiservice.postEmployee(this.employee).subscribe(res => {
      alert("Data of "+this.employee.firstName+ " Saved successfully")
      let cancel = document.getElementById('cancel');
      cancel?.click();
      this.formValue.reset();
      this.getallemployee();

    },
      err => {
        alert("Something Went Wrong")
      }
    );

  }
  getallemployee() {
    this.apiservice.getEmployee().subscribe(res => {
      this.employeeData = res;
    });
  }

  deleteEmployee(row: any) {
    this.apiservice.deleteEmployee(row.id).subscribe(res => {
      alert("Data Deleted Successfully")
      this.getallemployee();
    });
  }

  editEmployee(row: any) {
    this.showAdd = false;
    this.showEdit = true;
    this.employee.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }
  updatedetails() {
    this.employee.firstName = this.formValue.value.firstName;
    this.employee.lastName = this.formValue.value.lastName;
    this.employee.email = this.formValue.value.email;
    this.employee.mobile = this.formValue.value.mobile;
    this.employee.salary = this.formValue.value.salary;

    this.apiservice.updateEmployee(this.employee, this.employee.id).subscribe(res => {
      alert("Data of "+this.employee.firstName+ " Updated Successfully")
      let cancel = document.getElementById('cancel');
      cancel?.click();
      this.formValue.reset();
      this.getallemployee();
    });
  }
  onAddClick() {
    this.formValue.reset();
    this.showAdd = true;
    this.showEdit = false;
  }
}
