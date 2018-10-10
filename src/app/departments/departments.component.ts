import { Component, OnInit, Input } from '@angular/core';
import { Department } from './departments';
import { DepartmentsService } from './departments.service'

import { Task } from '../tasks/tasks'
import { TasksService } from '../tasks/tasks.service';
import { Employee } from '../employees/employees'
import { EmployeesService } from '../employees/employees.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})


export class DepartmentsComponent implements OnInit {
    //@Input() departmentFromDashboard: department;
    dashboard: DashboardComponent
    departments: Department[];
    selectedDepartment: Department;
    creatingDepartment: boolean =  false;
    newDepNumber : number;
    query:string = '';
    allEmployees: Employee[];
    allTasks: Task[];
    ColumnsForDepartments: string[] = ['DepNumber', 'DepName']

    constructor(private departmentsService: DepartmentsService,
                private tasksService:TasksService,
                private employeesService: EmployeesService,
                private dashboardService: DashboardService,
              ) {}


    ngOnInit() {
      this.getDepartments();
      this.getTasks();
      this.getEmployees();
      this.getSelectedDepartment();
    }

    departmentOnClick(department: Department): void{
      this.selectedDepartment = department;
      this.selectedDepartment.Employees = this.allEmployees.filter(emp => {
        return this.selectedDepartment.id === emp.department_id;
      })

      this.selectedDepartment.Tasks = this.allTasks.filter(tsk => {
        return this.selectedDepartment.id === tsk.department_id;
      })
    }

    create(depname:string): void{
      if (depname.length == 0)
      return;
      const newDepartment = new Department();
      newDepartment.id = this.newDepNumber;
      newDepartment.name = depname;
      //this.departments =this.departments.push(newDepartment);
      //this.creatingDepartment = false;
    }

    delete(): void{
      const selectedDepartmentIndex = this.departments.indexOf(this.selectedDepartment);
      //this.departments.splice(selectedDepartmentIndex, 1);
      this.departments = this.departments.filter(dep=>{
        return dep.id !== this.selectedDepartment.id
      });
      this.selectedDepartment = null;
    }

    getDepartments(): void{
      //this.departments = this.departmentsService.getDepartments();
      this.departmentsService.getDepartments()
        .subscribe(departments => {this.departments = departments;
            this.newDepNumber = this.departments.length + 1});
      //this.newDepNumber = this.departments.length + 1;
    }
    getTasks(): void {
      //this.allTasks = this.tasksService.getTasks();
      this.tasksService.getTasks()
        .subscribe(allTasks => this.allTasks = allTasks);
    }
    getEmployees(): void{
      //this.allEmployees = this.employeesService.getEmployees();
      this.employeesService.getEmployees()
        .subscribe(allEmployees => this.allEmployees = allEmployees);
    }
    getSelectedDepartment(): void {
      //this.selectedDepartment = this.departmentsService.getSelectedDepartments();
      this.departmentsService.getSelectedDepartments()
        .subscribe(selectedDepartment => this.selectedDepartment = selectedDepartment);
    }
    onclick(value: string) {
      this.query = value ;
      //console.log(value);
      this.departments = this.departments.filter( dep => {
      return dep.name.toLowerCase().includes(this.query.toLowerCase())
      });
    }
}
