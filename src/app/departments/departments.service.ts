import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Department } from './departments';
import { DEPARTMENTS } from './mock-department'
import { TasksService } from '../tasks/tasks.service'

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  selectedDepartment: Department;
  constructor() { }

  getDepartments(): Observable<Department[]> {
    return of(DEPARTMENTS);
  }
  setSelectedDepartment(dep: Department) {
    this.selectedDepartment = dep;
  }

  getSelectedDepartments(): Observable<Department> {
    return of(this.selectedDepartment);
  }

}
