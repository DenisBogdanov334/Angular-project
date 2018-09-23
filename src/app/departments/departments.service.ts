import { Injectable } from '@angular/core';
import { Department } from './departments';
import { DEPARTMENTS } from './mock-department'
import { TasksService } from '../tasks/tasks.service'

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }

  getDepartments(): Department[] {
    return DEPARTMENTS;
  }
}
