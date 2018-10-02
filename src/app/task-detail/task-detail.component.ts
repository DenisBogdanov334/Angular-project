import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tasks/tasks';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

}
