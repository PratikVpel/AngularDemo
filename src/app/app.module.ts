import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table'
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ProductComponent } from './product/product.component';
import { SecondproductComponent } from './secondproduct/secondproduct.component';
import { EmployeeComponent } from './employee/employee.component';
import { ThirdproductComponent } from './thirdproduct/thirdproduct.component';
import { ProductpipePipe } from './thirdproduct/productpipe.pipe';
import { EventComponent } from './event/event.component';
import { EventDirective } from './event/event.directive';
import { SecondeventComponent } from './secondevent/secondevent.component';
import { SecondeventDirective } from './secondevent/secondevent.directive';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropdownModule } from "primeng/dropdown";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EventformComponent } from './eventform/eventform.component';
import { EventformDirective } from './eventform/eventform.directive';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SalesrepComponent } from './salesrep/salesrep.component';
import { OrdersComponent } from './salesrep/orders.component';
import { OrderfilterPipe } from './salesrep/orderfilter.pipe';
import { AnotheremployeeComponent } from './anotheremployee/anotheremployee.component';
import { SkillComponent } from './anotheremployee/skill/skill.component';
import { ProjecthistoryPipe } from './anotheremployee/projecthistory/projecthistory.pipe';
import { ProjecthistoryComponent } from './anotheremployee/projecthistory/projecthistory.component';
import { SkillPipe } from './anotheremployee/skill/skill.pipe';

import { HeaderComponent } from './AngularProject/header/header.component';
import { HomeComponent } from './AngularProject/home/home.component';
import { SidenavComponent } from './AngularProject/sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';


const navigationPath : Routes =[
  {path : 'home', component:PersonComponent},
  {path : 'register' ,component:EventformComponent},
  {path: 'participants' ,component:EmployeedashboardComponent},
  {path: 'search' ,component:SalesrepComponent},
  {path: 'about' ,component:EventComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ProductComponent,
    SecondproductComponent,
    EmployeeComponent,
    ThirdproductComponent,
    ProductpipePipe,
    EventComponent,
    EventDirective,
    SecondeventComponent,
    SecondeventDirective,
    EventformComponent,
    EventformDirective,
    EmployeedashboardComponent,
    SalesrepComponent,
    OrdersComponent,
    OrderfilterPipe,
    AnotheremployeeComponent,
    ProjecthistoryComponent,
    SkillComponent,
    ProjecthistoryPipe,
    SkillPipe,
    HeaderComponent,
    HomeComponent,
    SidenavComponent
  
    
  
   
  ],
  imports: [
    BrowserModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    CheckboxModule,
    HttpClientModule,
    RouterModule.forRoot(navigationPath)


    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
