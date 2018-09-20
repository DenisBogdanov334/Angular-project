import { Injectable } from '@angular/core';

import { Employee } from './employees';
import { Employees } from './mock-employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees(): Employee[] {
    return Employees;
  }
}
