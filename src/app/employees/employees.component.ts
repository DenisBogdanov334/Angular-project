import { Component, OnInit } from '@angular/core';
import { Employee } from './employees';
import { EmployeesService } from './employees.service';

import { Task } from '../tasks/tasks';
import { TasksService } from '../tasks/tasks.service';
import { Department } from '../departments/departments';
import { DepartmentsService} from '../departments/departments.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    employees: Employee[];
    selectedEmployee: Employee;
    creatingEmployee: boolean =  false;

    allTasks: Task[];
    allDepartments: Department[];


    constructor(private employeesService: EmployeesService,
                private tasksService: TasksService,
                private departmentsService: DepartmentsService) { }

    ngOnInit() {
      this.getEmployees();
      this.getTasks();
      this.getDepartments();
    }

    //Corect information about selected Employee
    employeeOnClick(employee: Employee):void{
    this.selectedEmployee = employee;
    this.selectedEmployee.Name = this.allTasks.filter( tsk =>{
        return employee.Number === tsk.Number;
      })
    this.selectedEmployee.DepName = this.allDepartments.filter( dep => {
        return employee.DepNumber === dep.DepNumber;
    })

    }

    create(firstname:string,lastname:string): void{
    if (firstname.length == 0)
    return;
    const newEmployee = new Employee();
    newEmployee.FirstName = firstname;
    newEmployee.LastName = lastname;
    this.employees.push(newEmployee);
    this.creatingEmployee = false;
    }

    delete(): void{
      const selectedEmployeeIndex = this.employees.indexOf(this.selectedEmployee);
      this.employees.splice(selectedEmployeeIndex, 1);
      this.selectedEmployee = null;
    }

    getEmployees(): void {
      this.employees = this.employeesService.getEmployees();
    }
    getTasks(): void {
      this.allTasks = this.tasksService.getTasks();
    }
    getDepartments(): void {
      this.allDepartments = this.departmentsService.getDepartments();
    }
}
