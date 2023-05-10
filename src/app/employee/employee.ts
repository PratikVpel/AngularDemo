export class Employee {
    employeeId:string;
    firstName:string;
    lastName:string;
    salary:number;
    joiningDate:Date;
    department:string;
    designation:string;
    location:string;
    grading:number;

    constructor(employeeId:string, firstName:string, lastName:string, salary:number, joiningDate:Date, department:string, designation:string, location:string, grading:number){
        this.employeeId=employeeId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
        this.joiningDate=joiningDate;
        this.department=department;
        this.designation=designation;
        this.location=location;
        this.grading=grading;
    }

    fullName():String{
        return(this.firstName+" "+this.lastName);
    }
}
