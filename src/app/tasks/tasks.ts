import { Employee } from '../employees/employees';
import { Department } from '../departments/departments';

export class Task{
   Number: number;　// should make it unique
   Name: string;
   DepNumber?: number;
   //startday?: string
   //endday?: string;


   Employees?: Employee[];
   Departments?: Department[];
}
