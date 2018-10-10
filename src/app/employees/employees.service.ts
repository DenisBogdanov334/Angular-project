import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from './employees';
//import { Employees } from './mock-employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  selectedEmployee : Employee;

  private employeesUrl = 'http://i875395.hera.fhict.nl/api/419994/employee';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    //return of(Employees);
    return this.http.get<Employee[]>(this.employeesUrl);
  }
  setSelectedEmployee(emp:Employee){
    this.selectedEmployee = emp;
  }
  getSelectedEmployee(): Observable<Employee> {
    return of(this.selectedEmployee);
  }
}
