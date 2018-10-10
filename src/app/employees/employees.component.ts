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
    ColumnsForEmployees: string[] = ['id', 'first_name','last_name']
    query:string = '';

    constructor(private employeesService: EmployeesService,
                private tasksService: TasksService,
                private departmentsService: DepartmentsService) { }

    ngOnInit() {
      this.getEmployees();
      this.getTasks();
      this.getDepartments();
      this.getSelectedEmployee();
    }

    //Corect information about selected Employee
    employeeOnClick(employee: Employee):void{
      this.selectedEmployee = employee;
      // pick up a task of selectedEmployee
      this.selectedEmployee.Tasks = this.allTasks.filter( tsk =>{
          //return employee.taskNumber === tsk.id;
          return tsk.employees.includes(this.selectedEmployee.id) ;
        });
      //console.log(this.selectedEmployee.Tasks)
      //this.selectedEmployee.task_name = this.selectedEmployee.Tasks[0].name ;

      // pick up a task of the selectedEmployee
      this.selectedEmployee.Departments = this.allDepartments.filter( dep => {
          return employee.department_id === dep.id;
        });
      //this.selectedEmployee.DepName = this.selectedEmployee.Departments[0].DepName;
    }

    create(firstname:string,lastname:string,depNumber:number): void{
    if (firstname.length == 0)
    return;

    const newEmployee = new Employee();
    newEmployee.id = this.newEmpNumber;
    newEmployee.first_name = firstname;
    newEmployee.last_name = lastname;
    newEmployee.department_id = depNumber;
    //newEmployee.Number = number;
    //this.employees.push(newEmployee);
    this.creatingEmployee = false;
    }

    delete(): void{
      const selectedEmployeeIndex = this.employees.indexOf(this.selectedEmployee);
      //this.employees.splice(selectedEmployeeIndex, 1);
      this.employees = this.employees.filter(emp=>{
        return emp.id !== this.selectedEmployee.id
      });
      this.selectedEmployee = null;
    }

    getEmployees(): void {
      this.employeesService.getEmployees()
        .subscribe(employees => {this.employees = employees;console.log(this.employees)});
        //console.log(this.employees);
      //this.employees = this.employeesService.getEmployees();
      //this.newEmpNumber = this.employees.length + 1;
    }
    getTasks(): void {
      //this.allTasks = this.tasksService.getTasks();
      this.tasksService.getTasks()
        .subscribe(allTasks => this.allTasks = allTasks);
    }
    getDepartments(): void {
      //this.allDepartments = this.departmentsService.getDepartments();
      this.departmentsService.getDepartments()
        .subscribe( allDepartments => this.allDepartments = allDepartments);
    }
    getSelectedEmployee(): void {
      //this.selectedEmployee = this.employeesService.getSelectedEmployee();
      this.employeesService.getSelectedEmployee()
        .subscribe(selectedEmployee => this.selectedEmployee = selectedEmployee);
    }
    onclick(value: string) {
      this.query = value ;
      console.log(value);

      this.employees = this.employees.filter( emp => {
      return emp.first_name.toLowerCase().includes(this.query.toLowerCase())||
        emp.last_name.includes(this.query);
      });
      /*
      this.employees = this.employees.filter( emp => {
      return emp.last_name.includes(this.query)
      });
      */
    }
}
