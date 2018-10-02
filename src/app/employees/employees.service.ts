import { Injectable } from '@angular/core';

import { Employee } from './employees';
import { Employees } from './mock-employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  selectedEmployee : Employee;

  constructor() { }

  getEmployees(): Employee[] {
    return Employees;
  }
  setSelectedEmployee(emp:Employee){
    this.selectedEmployee = emp;
  }
  getSelectedEmployee() {
    return this.selectedEmployee;
  }
}
