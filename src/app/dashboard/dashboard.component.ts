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

  selectedDepartment: Department;
  selectedEmployee: Employee;
  selectedTask:Task;

  constructor(private departmentsService:DepartmentsService,
              private employeesService: EmployeesService,
              private tasksService: TasksService) { }

  ngOnInit() {
    this.getDepartments();
    this.getEmployees();
    this.getTasks();
  }

  getDepartments(): void {
    //this.departments = this.departmentsService.getDepartments();
    this.departmentsService.getDepartments()
      .subscribe(departments => this.departments = departments);
    this.departments = this.departments.slice(0,3)
  }
  getEmployees(): void {
    //this.employees = this.employeesService.getEmployees();
    this.employeesService.getEmployees()
      .subscribe(employees => this.employees = employees);
    this.employees = this.employees.slice(0,5)
  }
  getTasks(): void {
    //this.tasks = this.tasksService.getTasks();
    this.tasksService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
    this.tasks = this.tasks.slice(0,5);
  }

  departmentOnClick(department: Department): void{
    this.selectedDepartment = department;
    this.departmentsService.setSelectedDepartment(this.selectedDepartment);
  }
  employeeOnClick(employee: Employee):void{
    this.selectedEmployee = employee;
    this.employeesService.setSelectedEmployee(this.selectedEmployee);
  }
  taskOnClick(task: Task):void{
    this.selectedTask = task;
    this.tasksService.setSelectedTask(this.selectedTask);
  }

}
