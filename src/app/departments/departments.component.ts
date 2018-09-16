import { Component, OnInit } from '@angular/core';
import {Department} from './department';
@Component({ 
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})


export class DepartmentsComponent implements OnInit {
  	export const department: Department[] = [
  	{Number: 1, Name: '.Aisne'},
  	{Number: 2, Name: '.Ardennes'},
  	{Number: 3, Name: '.Creuse'},
  	{Number: 4, Name: '.Doubs'},
  	{Number: 5, Name: '.Mayenne'},
  	{Number: 6, Name: '.Nord'},
  	{Number: 7, Name: '.Yvelines'},
  	];
  constructor() { 
  		

  }


  ngOnInit() {
  	
  }

}
