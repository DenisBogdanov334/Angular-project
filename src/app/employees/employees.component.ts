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
    newEmpNumber: number;
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
      // pick up a task of selectedEmployee
      this.selectedEmployee.Tasks = this.allTasks.filter( tsk =>{
          return employee.Number === tsk.Number;
        })
      this.selectedEmployee.Name = this.selectedEmployee.Tasks[0].Name ;

      // pick up a task of the selectedEmployee
      this.selectedEmployee.Departments = this.allDepartments.filter( dep => {
          return employee.DepNumber === dep.DepNumber;
        })
      //this.selectedEmployee.DepName = this.selectedEmployee.Departments[0].DepName;
    }

    create(firstname:string,lastname:string,depNumber:number,number:number): void{
    if (firstname.length == 0)
    return;

    const newEmployee = new Employee();
    newEmployee.EmpNumber = this.newEmpNumber;
    newEmployee.FirstName = firstname;
    newEmployee.LastName = lastname;
    newEmployee.DepNumber = depNumber;
    newEmployee.Number = number;
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
      this.newEmpNumber = this.employees.length + 1;
    }
    getTasks(): void {
      this.allTasks = this.tasksService.getTasks();
    }
    getDepartments(): void {
      this.allDepartments = this.departmentsService.getDepartments();
    }
}
