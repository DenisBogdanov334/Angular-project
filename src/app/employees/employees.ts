import { Task } from '../tasks/tasks';
import { Department } from '../departments/departments';

export class Employee{
  EmpNumber: number;
  FirstName: string;
  LastName: string;

  Number?: number;  //means task number
  Name?: string;  //means employees number
  DepNumber?: number;
  DepName?: string;

  Tasks?: Task[];
  Departments?: Department[];
}
