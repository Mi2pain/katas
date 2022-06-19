import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../service/employee.service";
import {Employee} from "../model/employee.model";

@Component({
  selector: 'app-tab-employee',
  templateUrl: './tab-employee.component.html',
  styleUrls: ['./tab-employee.component.scss']
})
export class TabEmployeeComponent implements OnInit {

  accessKey: string = '53b1b110';

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getListEmployee(this.accessKey).subscribe((employees) => {
      this.employees = employees;
    });
  }

}
