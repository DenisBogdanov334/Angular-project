import { Component, OnInit } from '@angular/core';
import {Employee} from './employee'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
	export const employee: Employee[] = [
  	{id: 1, name: 'Viktor'},
  	{id: 2, name: 'Denis'},
  	{id: 3, name: 'ae'},
  	{id: 5, name: '21'},
  	{id: 8, name: 'LLStylish'},
  	{id: 11, name: 'rtg'},
  	{id: 55, name: 'th'},
  	];
  constructor() { }

  ngOnInit() {
  }

}
