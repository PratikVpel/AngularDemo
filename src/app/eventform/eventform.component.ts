import { Component, OnInit } from '@angular/core';
import { AbstractControl,ValidationErrors,Validators,FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {

  contactForm : FormGroup;
  events:String[];
  selectedEvents:String="";
  genderArray:String[];
  selectedGender:String="Male";
  constructor(private formBuilder:FormBuilder) {// dependency injection
    this.events = ["--Choose an event--","Sports","Indoor Games","Indoor"];
    this.contactForm = this.createForm();
    this.genderArray = ["Male","Female"];
   }
   createForm():FormGroup{
     return this.formBuilder.group({
       'eventSelect':['',Validators.compose([Validators.required,chooseEvents])],
       'participantName':['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(30)])],
       'address':['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(100)])],
       'email':['',Validators.compose([Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
       'contactNo':['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]{10}$')])],
       'eventDate':['',Validators.compose([Validators.required])],
       'gender':['',Validators.compose([Validators.required])],
       'newsLetter':['',Validators.required]
     })
   }

  ngOnInit(): void {
  }
  addContact():void{
    console.log(JSON.stringify(this.contactForm.value));
    alert("Submitted Successfuly");
  }
}

  export function chooseEvents(control : AbstractControl):ValidationErrors|null{
    if(!control.value)
    {
      return null;
    }

    if(control.value=="--Choose an event--")
    {
      return {"eventChoice":true};

    }
    return null;

  }
