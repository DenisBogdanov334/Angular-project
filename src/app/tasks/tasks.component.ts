import { Component, OnInit } from '@angular/core';
import { Task } from './tasks';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

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

    create(number: number,name: string, DepNumber: string ,EmpNmuber: number): void{
    if (name.length == 0)
    return;
      const newTask = new Task();
      newTask.Number = number;
      newTask.Name = name;
      newTask.EmpNumber = [EmpNmuber];
      newTask.DepNumber = Number(DepNumber);
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
