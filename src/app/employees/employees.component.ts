import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
	export const employee: Employee[] = [
  	{FirstName: 'Viktor ', LastName: 'Bakov'},
  	{FirstName: 'Denis ', LastName: 'Bogdanov'},
  	{FirstName: 'Shin ', LastName: 'Lim'},
  	{FirstName: 'Marc ', LastName: 'Owen'},
  	{FirstName: 'Spas ', LastName: 'Canov'},
  	{FirstName: 'Jake ', LastName: 'Cutler'},
  	{FirstName: 'Pete ', LastName: 'Robinson'},
  	];
  constructor() { }

  ngOnInit() {
  }

}
