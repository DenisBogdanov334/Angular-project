import { Employee } from '../employees/employees';
import { Department } from '../departments/departments';

export class Task{
   id?: number;　
   department_id?: number;
   name?: string;
   employees?: number[];
   Employees?: Employee[];
   Departments?: Department[];
   due_date?: string;
}
