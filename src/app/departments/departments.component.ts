import { Component, OnInit } from '@angular/core';
import {Department} from './department'
@Component({ 
	
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})


export class DepartmentsComponent implements OnInit {
  	export const department: Department[] = [
  	{id: 1, name: 'Viktor'},
  	{id: 2, name: 'Denis'},
  	{id: 3, name: 'ae'},
  	{id: 5, name: '21'},
  	{id: 8, name: 'er'},
  	{id: 11, name: 'rtg'},
  	{id: 55, name: 'th'},
  	];
  constructor() { 
  		

  }


  ngOnInit() {
  	
  }

}
