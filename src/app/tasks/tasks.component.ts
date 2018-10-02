import { Component, OnInit } from '@angular/core';
import { Task } from './tasks';
import { TasksService } from './tasks.service';

import { Employee } from '../employees/employees';
import { EmployeesService } from '../employees/employees.service';
import { Department } from '../departments/departments';
import { DepartmentsService } from '../departments/departments.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
    allemployees : Employee[];
    allDepartmanet: Department[];
    tasks: Task[];
    selectedTask: Task;

    newTaskNumber: number;
    creatingTask: boolean =  false;
    ColumnsForTasks: string[] = ['Number', 'Name'];

    model: NgbDateStruct;
    date: {year: number, month: number};



    constructor(private tasksService: TasksService,
                private employeesSevice: EmployeesService,
                private departmentsService: DepartmentsService,
              private calendar: NgbCalendar) { }

    ngOnInit() {
      this.getTasks();
      this.getEmployees();
      this.getDepartments();
      this.getSelectedTask();
    }

    selectToday() {
      this.model = this.calendar.getToday();
    }

    taskOnClick(task: Task):void{
      this.selectedTask = task;
      this.selectedTask.Departments = this.allDepartmanet;
      this.selectedTask.Employees = this.allemployees.filter( emp => {
        return task.Number === emp.Number;
      });
    }

    //create(number: string,　name: string, DepNumber: number ): void{
    create(name: string, depNumber: number ): void{
    if (name.length == 0)
    return;

    const newTask = new Task();
    newTask.Number = this.newTaskNumber;
    newTask.Name = name;
    newTask.DepNumber = depNumber;
    this.tasks.push(newTask);
    this.creatingTask = false;
    }

    delete(): void{
      const selectedTaskIndex = this.tasks.indexOf(this.selectedTask);
      this.tasks.splice(selectedTaskIndex, 1);
      this.selectedTask = null;
    }
    getTasks(): void {
      this.tasks = this.tasksService.getTasks();
    }

    getEmployees(): void {
      this.allemployees = this.employeesSevice.getEmployees();
      this.newTaskNumber = this.tasks.length + 1;
    }
    getDepartments(): void {
      this.allDepartmanet = this.departmentsService.getDepartments();
    }
    
    getSelectedTask(): void {
      this.selectedTask = this.tasksService.getSelectedService();
    }

}
