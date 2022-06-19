import { NgModule } from '@angular/core';
import { TabEmployeeComponent } from './tab-employee/tab-employee.component';
import {TableModule} from "primeng/table";
import {EmployeeRoutingModule} from "./employee-routing.module";
import { EmployeeComponent } from './employee.component';



@NgModule({
  declarations: [TabEmployeeComponent, EmployeeComponent],
  imports: [
    TableModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
