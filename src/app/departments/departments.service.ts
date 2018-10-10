import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Department } from './departments';
//import { DEPARTMENTS } from './mock-department'
import { TasksService } from '../tasks/tasks.service'

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  selectedDepartment: Department;

  private departmentsUrl = 'http://i875395.hera.fhict.nl/api/419994/department'

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    //return of(DEPARTMENTS);
    return this.http.get<Department[]>(this.departmentsUrl);
  }
  setSelectedDepartment(dep: Department) {
    this.selectedDepartment = dep;
  }

  getSelectedDepartments(): Observable<Department> {
    return of(this.selectedDepartment);
  }

}
