import { Injectable } from '@angular/core';
import { Task } from './tasks';
import { Tasks } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Task[] {
    return Tasks;
  }
}
