import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../departments/departments';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  @Input() selectedDepartment: Department;
  constructor() { }

  ngOnInit() {
  }

}
