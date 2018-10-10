import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from './tasks';
//import { Tasks } from './mock-tasks';
import { Employee } from '../employees/employees';
import { EmployeesService } from '../employees/employees.service';
import { Department } from '../departments/departments';
import { DepartmentsService } from '../departments/departments.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  selectedTask: Task;
  tasks: Task[];

  private tasksUrl = 'http://i875395.hera.fhict.nl/api/419994/task';

  constructor(private http: HttpClient) { }


  getTasks(): Observable<Task[]> {
    //return of(Tasks);
    return this.http.get<Task[]>(this.tasksUrl);
    //return this.tasks;
  }

  setSelectedTask(tsk: Task) {
    this.selectedTask = tsk
  }
  getSelectedTask(): Observable<Task> {
    return of(this.selectedTask);
  }

}
