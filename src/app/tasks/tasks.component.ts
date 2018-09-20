import { Component, OnInit } from '@angular/core';
import { Task } from './tasks';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

    /* tasks: Task[] = [
  	{Number: 1, Name: 'Clean'},
  	{Number: 2, Name: 'Read'},
  	{Number: 3, Name: 'Study'},
  	{Number: 4, Name: 'Work'},
  	{Number: 5, Name: 'Shop'},
  	{Number: 6, Name: 'Workout'},
  	{Number: 7, Name: 'Swim'},
  ]; */
    tasks: Task[];
    selectedTask: Task;
    creatingTask: boolean =  false;
    constructor(private tasksService:TasksService) { }

    ngOnInit() {
      this.getTasks();
    }

    taskOnClick(task: Task):void{
    this.selectedTask = task;
    }

    create(number:number,name:string): void{
    if (name.length == 0)
    return;
      const newTask = new Task();
      newTask.Number = number;
      newTask.Name = name;
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
}
