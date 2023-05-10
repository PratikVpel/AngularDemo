import { Directive } from '@angular/core';
import {Validator,AbstractControl,ValidationErrors, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appEvent]',
  providers :[{
    provide: NG_VALIDATORS,
    useExisting : EventDirective,
    multi :true

  }]
})
export class EventDirective {
  validate(control: AbstractControl):ValidationErrors |null{

    if(!control.value){
      return null;
    }
    if(new Date(control.value) < new Date()){
      return { 'appEvent' : true};
    }
    return null;
  }
   
  constructor() { }
  
}
