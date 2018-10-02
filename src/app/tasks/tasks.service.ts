import { Injectable } from '@angular/core';
import { Task } from './tasks';
import { Tasks } from './mock-tasks';
import { Employee } from '../employees/employees';
import { EmployeesService } from '../employees/employees.service';
import { Department } from '../departments/departments';
import { DepartmentsService } from '../departments/departments.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  selectedTask: Task;
  constructor() { }


  getTasks(): Task[] {
    return Tasks;
  }

  setSelectedTask(tsk: Task) {
    this.selectedTask = tsk
  }
  getSelectedService() {
    return this.selectedTask;
  }

}
