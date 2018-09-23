import { Component, OnInit } from '@angular/core';
import { Department } from '../departments/departments';
import { DepartmentsService } from '../departments/departments.service'
import { Employee } from '../employees/employees';
import { EmployeesService } from '../employees/employees.service'
import { Task } from '../tasks/tasks'
import { TasksService } from '../tasks/tasks.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  departments: Department[]=[];
  constructor(private departmentsService:DepartmentsService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departments = this.departmentsService.getDepartments();
  }

}
