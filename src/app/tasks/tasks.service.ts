import { Injectable } from '@angular/core';
import { Task } from './tasks';
import { Tasks } from './mock-tasks';
import { Employee } from '../employees/employees';
import { EmployeesService } from '../employees/employees.service';
import { Department } from '../departments/departments';
import { DepartmentsService } from '../departments/departments.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Task[] {
    return Tasks;
  }
}
