import { Component, OnInit } from '@angular/core';
import { Department } from './departments';
import { DEPARTMENTS } from './mock-department'
import { DepartmentsService } from './departments.service'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})


export class DepartmentsComponent implements OnInit {
    departments: Department[];
    selectedDepartment: Department;
    creatingDepartment: boolean =  false;

    constructor(private departmentService: DepartmentsService) {}


    ngOnInit() {
      this.getDepartments();
    }

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

    getDepartments(): void{
      this.departments = this.departmentService.getDepartments();
    }
  }
