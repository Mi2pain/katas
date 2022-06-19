import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../model/employee.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'https://my.api.mockaroo.com';

  constructor(private httpClient: HttpClient) { }

  getListEmployee(accessKey: string): Observable<Employee[]> {
    const params = {key: accessKey};
    return this.httpClient.get(this.baseUrl + '/employee.json', {params}) as Observable<Employee[]>;
  }
}
