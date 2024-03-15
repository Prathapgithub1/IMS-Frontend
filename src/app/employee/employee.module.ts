import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    EmployeeComponent
  ]
})
export class EmployeeModule { }
