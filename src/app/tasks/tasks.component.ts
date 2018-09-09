import { Component, OnInit } from '@angular/core';
import {Task} from './task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	export const task: Task[] = [
  	{id: 1, name: 'Denis'},
  	{id: 2, name: 'Denis'},
  	{id: 3, name: 'ae'},
  	{id: 5, name: '21'},
  	{id: 8, name: 'er'},
  	{id: 11, name: 'Viktor'},
  	{id: 55, name: 'th'},
  	];
  constructor() { }

  ngOnInit() {
  }

}
