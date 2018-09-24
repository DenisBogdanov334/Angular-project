import { Component, OnInit } from '@angular/core';
import { Task } from './tasks';
import { TasksService } from './tasks.service';
import { Employee } from '../employees/employees';
import { EmployeesService } from '../employees/employees.service';
import { Department } from '../departments/departments';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
    allemployees : Employee[];

    tasks: Task[];
    selectedTask: Task;

    creatingTask: boolean =  false;
    constructor(private tasksService: TasksService,
                private employeesSevice: EmployeesService) { }

    ngOnInit() {
      this.getTasks();
      this.getEmployees();
    }

    taskOnClick(task: Task):void{
      let newtask = task;
      newtask.Employees = this.allemployees.filter(emp => {
        return task.EmpNumber.includes(emp.EmpNumber);
      })
      this.selectedTask = newtask;
    }

    create(number: number,name: string, DepNumber: string ,EmpNmuber: number): void{
    if (name.length == 0)
    return;
      const newTask = new Task();
      newTask.Number = number;
      newTask.Name = name;
      newTask.EmpNumber = [EmpNmuber];
      newTask.DepNumber = Number(DepNumber);
      //this.tasks.push(newTask);
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
    }

}
