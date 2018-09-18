import { Component, OnInit } from '@angular/core';
import {Employee} from './employees';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    employees: Employee[] = [
  	{FirstName: 'Viktor ', LastName: 'Bakov'},
  	{FirstName: 'Denis ', LastName: 'Bogdanov'},
  	{FirstName: 'Shin ', LastName: 'Lim'},
  	{FirstName: 'Marc ', LastName: 'Owen'},
  	{FirstName: 'Spas ', LastName: 'Canov'},
  	{FirstName: 'Jake ', LastName: 'Cutler'},
  	{FirstName: 'Pete ', LastName: 'Robinson'},
  	];
    selectedEmployee: Employee;
    creatingEmployee: boolean =  false;
  constructor() { }

  ngOnInit() {}
    employeeOnClick(employee: Employee):void{
    this.selectedEmployee = employee;
    }

    create(firstname:string,lastname:string): void{
    if (firstname.length == 0)
    return;
    const newEmployee = new Employee(firstname,lastname);
    this.employees.push(newEmployee);
    this.creatingEmployee = false;

    }

    delete(): void{
      const selectedEmployeeIndex = this.employees.indexOf(this.selectedEmployee);
      this.employees.splice(selectedEmployeeIndex, 1);
      this.selectedEmployee = null;

    }
}
