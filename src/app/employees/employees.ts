import { Task } from '../tasks/tasks';
import { Department } from '../departments/departments';

export class Employee{
  id: number;
  department_id: number;
  first_name: string;
  last_name: string;
  birth_date?: string;



  //Number?: number;  //means task number
  task_name?: string;  //means employees number
  DepNumber?: number;
  DepName?: string;

  Tasks?: Task[];
  Departments?: Department[];
}
