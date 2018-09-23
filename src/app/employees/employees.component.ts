import { Component, OnInit } from '@angular/core';
import { Employee } from './employees';
import { EmployeesService } from './employees.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    employees: Employee[];
    selectedEmployee: Employee;
    creatingEmployee: boolean =  false;


    constructor(private employeesService: EmployeesService) { }

    ngOnInit() {
      this.getEmployees();
    }

    employeeOnClick(employee: Employee):void{
    this.selectedEmployee = employee;
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
}
