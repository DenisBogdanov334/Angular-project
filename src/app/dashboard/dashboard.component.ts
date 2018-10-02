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
  departments: Department[];
  employees: Employee[];
  tasks: Task[];
  ColumnsForDepartments: string[] = ['DepNumber', 'DepName'];
  ColumnsForEmployees: string[] = ['EmpNumber', 'FirstName', 'LastName']
  ColumnsForTasks: string[] = ['Number', 'Name']
  constructor(private departmentsService:DepartmentsService,
              private employeesService: EmployeesService,
              private tasksService: TasksService) { }

  ngOnInit() {
    this.getDepartments();
    this.getEmployees();
    this.getTasks();
  }

  getDepartments(): void {
    this.departments = this.departmentsService.getDepartments();
    this.departments = this.departments.slice(0,3)
  }
  getEmployees(): void {
    this.employees = this.employeesService.getEmployees();
    this.employees = this.employees.slice(0,5)
  }
  getTasks(): void {
    this.tasks = this.tasksService.getTasks();
    this.tasks = this.tasks.slice(0,5);
  }

}
