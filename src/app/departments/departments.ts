import { Employee } from '../employees/employees'
import { Task } from '../tasks/tasks'

export class Department{
  id: number;
  name: string;
  building: string;
  employees: number[]

  task_name: string;
  Employees?: Employee[];
  Tasks?: Task[];


  //Number: number;

  /*
  constructor(DepNumber:number,DepName:string){
    this.DepNumber = DepNumber;
    this.DepName = DepName;
    }
    */
}
