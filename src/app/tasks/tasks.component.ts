import { Component, OnInit } from '@angular/core';
import {Task} from './task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	export const task: Task[] = [
  	{Number: 1, Name: '.Clean'},
  	{Number: 2, Name: '.Read'},
  	{Number: 3, Name: '.Study'},
  	{Number: 4, Name: '.Work'},
  	{Number: 5, Name: '.Shop'},
  	{Number: 6, Name: '.Workout'},
  	{Number: 7, Name: '.Swim'},
  	];
  constructor() { }

  ngOnInit() {
  }

}
