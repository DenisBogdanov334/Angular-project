import { Injectable } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Department } from '../departments/departments';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  department: Department;
  dash: DashboardComponent;
  selectedDepartment: Department[];
  constructor() { }
}
/*
getSelectedDepartment(): Department[] {
   return this.selectedDepartment = this.dash.selectedDepartment;
}
*/
