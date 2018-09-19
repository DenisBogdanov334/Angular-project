import { Injectable } from '@angular/core';
import { Department } from './departments';
import { DEPARTMENTS } from './mock-department'

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  getDepartments(): Department[] {
    return DEPARTMENTS;
  }

  constructor() { }
}
