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
    query:string = '';
    newTaskNumber: number;
    creatingTask: boolean =  false;
    ColumnsForTasks: string[] = ['Number', 'Name'];

    model: NgbDateStruct;
    date: {year: number, month: number};




    constructor(private tasksService: TasksService,
                private employeesSevice: EmployeesService,
                private departmentsService: DepartmentsService,
                private calendar: NgbCalendar ) { }

    ngOnInit() {
      this.getTasks();
      this.getEmployees();
      this.getDepartments();
      this.getSelectedTask();
      //this.newTaskNumber = this.tasks.length + 1;
      //console.log(this.tasks.length);
    }

    selectToday() {
      this.model = this.calendar.getToday();
    }

    taskOnClick(task: Task):void{
      this.selectedTask = task;
      this.selectedTask.Departments = this.allDepartmanet.filter(dep => {
        return dep.id === this.selectedTask.department_id
      });
      this.selectedTask.Employees = this.allemployees.filter( emp => {
        return this.selectedTask.employees.includes(emp.id)
      });
    }

    //create(number: string,　name: string, DepNumber: number ): void{
    create(name:string, dep_id:number ): void{
    if (name.length == 0)
    return;

    const newTask = new Task();
    newTask.id = this.newTaskNumber;
    newTask.name = String(name);
    newTask.department_id = dep_id;
    //console.log(newTask);
    //this.tasks = this.tasks.push(newTask);
    //console.log(this.update(newTask));
    this.creatingTask = false;
    }

    delete(): void{
      const selectedTaskIndex = this.tasks.indexOf(this.selectedTask);
      //const selectedId = this.selectedTask.id
      //const i = this.tasks.findIndex(t => t.id === selectedId);
      this.tasks = this.tasks.filter(tsk =>{return tsk.id !== this.selectedTask.id});
      this.selectedTask = null;
    }

    getTasks(): void {
      //this.tasks = this.tasksService.getTasks();
      this.tasksService.getTasks()
        .subscribe(tasks => {this.tasks = tasks; this.newTaskNumber = this.tasks.length + 1});

        //.subscribe(tasks => {this.tasks = tasks; console.log(this.tasks)} );
      //this.newTaskNumber = this.tasks.length + 1;
    }

    getEmployees(): void {
      //this.allemployees = this.employeesSevice.getEmployees();
      this.employeesSevice.getEmployees()
        .subscribe(allemployees => this.allemployees = allemployees);
    }
    getDepartments(): void {
      //this.allDepartmanet = this.departmentsService.getDepartments();
      this.departmentsService.getDepartments()
        .subscribe(allDepartmanet => this.allDepartmanet = allDepartmanet);
    }

    getSelectedTask(): void {
      //this.selectedTask = this.tasksService.getSelectedTask();
      this.tasksService.getSelectedTask()
        .subscribe(selectedTask => this.selectedTask = selectedTask);
    }
    onclick(value: string) {
      this.query = value ;
      //console.log(value);
      this.tasks = this.tasks.filter( tsk => {
      return tsk.name.toLowerCase().includes(this.query.toLowerCase())
      });
    }
    /*
    update(tsk: Task) {
      for (let task of this.tasks){
        if (task.id == tsk.id){
          this.tasksService.addObject(tsk)
            .subscribe(tsk =>this.tasks.push(tsk));
        }
      }
    }
    */
}
