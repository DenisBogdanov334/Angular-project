import { Component, OnInit } from '@angular/core';
import { Department } from './departments';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})


export class DepartmentsComponent implements OnInit {
    departments: Department [] = [
    {DepNumber: 1, DepName: 'Clean'},
    {DepNumber: 2, DepName: 'Read'},
    {DepNumber: 3, DepName: 'Study'},
    {DepNumber: 4, DepName: 'Work'},
    {DepNumber: 5, DepName: 'Shop'},
    {DepNumber: 6, DepName: 'Workout'},
    {DepNumber: 7, DepName: 'Swim'},
    ];

    selectedDepartment: Department;
    creatingDepartment: boolean =  false;

    constructor() {}


    ngOnInit() {}

    departmentOnClick(department: Department): void{
      this.selectedDepartment = department;
    }

    create(depnumber:number,depname:string): void{
      if (depname.length == 0)
      return;
      const newDepartment = new Department();
      newDepartment.DepNumber=depnumber;
      newDepartment.DepName=depname;
      this.departments.push(newDepartment);
      //this.creatingDepartment = false;
    }

    delete(): void{
      const selectedDepartmentIndex = this.departments.indexOf(this.selectedDepartment);
      this.departments.splice(selectedDepartmentIndex, 1);
      this.selectedDepartment = null;
    }
  }
