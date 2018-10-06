import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

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


  getTasks(): Observable<Task[]> {
    return of(Tasks);
  }

  setSelectedTask(tsk: Task) {
    this.selectedTask = tsk
  }
  getSelectedTask(): Observable<Task> {
    return of(this.selectedTask);
  }

}
