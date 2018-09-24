import { Component, OnInit } from '@angular/core';
import { Department } from './departments';
import { DepartmentsService } from './departments.service'

import { Task } from '../tasks/tasks'
import { TasksService } from '../tasks/tasks.service';
import { Employee } from '../employees/employees'
import { EmployeesService } from '../employees/employees.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})


export class DepartmentsComponent implements OnInit {
    departments: Department[];
    selectedDepartment: Department;
    creatingDepartment: boolean =  false;

    allEmployees: Employee[];
    allTasks: Task[];

    constructor(private departmentService: DepartmentsService,
                private tasksService:TasksService,
                private employeesService: EmployeesService) {}


    ngOnInit() {
      this.getDepartments();
      this.getTasks();
      this.getEmployees();
    }

    departmentOnClick(department: Department): void{
      this.selectedDepartment = department;
      this.selectedDepartment.EmpName = this.allEmployees.filter(emp => {
        return this.selectedDepartment.DepNumber === emp.DepNumber;
      })

      this.selectedDepartment.Name = this.allTasks.filter(tsk => {
        return this.selectedDepartment.DepNumber === tsk.DepNumber;
      })
    }

    create(depnumber:number,depname:string): void{
      if (depname.length == 0)
      return;
      const newDepartment = new Department();
      newDepartment.DepNumber=depnumber;
      newDepartment.DepName=depname;
      this.departments.push(newDepartment);
      //this.creatingDepartment = false;
    }

    delete(): void{
      const selectedDepartmentIndex = this.departments.indexOf(this.selectedDepartment);
      this.departments.splice(selectedDepartmentIndex, 1);
      this.selectedDepartment = null;
    }

    getDepartments(): void{
      this.departments = this.departmentService.getDepartments();
    }
    getTasks(): void {
      this.allTasks = this.tasksService.getTasks();
    }
    getEmployees(): void{
      this.allEmployees = this.employeesService.getEmployees();
    }
}
