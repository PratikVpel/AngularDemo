import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  photoPath:string = "assets/img/dp.jpg"
  personName:string="Pratik Pingale"
  companyName:string="HTC Global Services"
  name : string = 'Pratik'
  age : number = 21
  email : string = 'pratik@htcinc.com'
  constructor() {}
    
   

  ngOnInit(): void {
  }

}
