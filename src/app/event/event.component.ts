import { Component, OnInit } from '@angular/core';
import {Event} from './event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events:Event;
  Events: String[];
  constructor() {
    this.Events = ["Quiz","Indoor Games","Outdoor Games","Hackathon"];
    this.events = new Event();
   }

   ngOnInit(){
    this.getDate();
  }
  minDate:any ="";
  getDate(){
    var date:any =new Date();
    var toDate:any=date.getDate();
    if(toDate<10){
      toDate='0'+toDate;
    }
    var month:any =date.getMonth()+1;
    if(month <10){
      month='0'+month;
    }
    var year=date.getFullYear();
    this.minDate =year+"-"+month+"-"+toDate
    console.log(this.minDate);
  }
 
  addContact() : void{
    console.log(JSON.stringify(this.events))
    alert("Submitted Successfully")
  }

}
