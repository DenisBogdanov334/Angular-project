import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Employee } from './employees';
import { Employees } from './mock-employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  selectedEmployee : Employee;

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(Employees);
  }
  setSelectedEmployee(emp:Employee){
    this.selectedEmployee = emp;
  }
  getSelectedEmployee(): Observable<Employee> {
    return of(this.selectedEmployee);
  }
}
