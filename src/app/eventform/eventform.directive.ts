import { Directive } from '@angular/core';
import {Validator,AbstractControl,ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEventform]',
  providers :[{
    provide: NG_VALIDATORS,
    useExisting : EventformDirective,
    multi :true

  }]
})
export class EventformDirective {

  validate(control: AbstractControl):ValidationErrors |null{

    if(!control.value){
      return null;
    }
    if(new Date(control.value) < new Date()){
      return { 'appEventform': true};
    }
    return null;
  }
   
  constructor() { }
  

}
