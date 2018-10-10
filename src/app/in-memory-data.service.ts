import { InMemoryDbService } from 'angular-in-memory-web-api';

//import { Task } from './tasks/tasks';
//import { Employee } from './departments/departments';
//import { Department } from './employees/employees';

export class InMemoryDataService implements InMemoryDbService {

  createTasksDB() {
    const tasks = [
      {Number: 1, Name: 'Project Management', DepNumber: 1 },
      {Number: 2, Name: 'Coding', DepNumber: 1},
      {Number: 3, Name: 'Requirement Definition', DepNumber: 1 },
      {Number: 4, Name: 'Recruitment', DepNumber: 2 },
      {Number: 5, Name: 'Training of New Employees', DepNumber: 2 },
      {Number: 6, Name: 'New Product Development', DepNumber: 3 },
      {Number: 7, Name: 'Promotion', DepNumber: 3 },
    ];
    return { tasks };
  }

  createEmployeesDB(){
    const employees = [
      { EmpNumber: 1 ,FirstName: 'Viktor', LastName: 'Bakov', Number:1, DepNumber:1 },
      { EmpNumber: 2 ,FirstName: 'Denis', LastName: 'Bogdanov', Number:1, DepNumber:1 },
      { EmpNumber: 3 ,FirstName: 'Shin', LastName: 'Lim', Number:2, DepNumber:1 },
      { EmpNumber: 4 ,FirstName: 'Marc', LastName: 'Owen', Number:2, DepNumber:1 },
      { EmpNumber: 5 ,FirstName: 'Spas', LastName: 'Canov', Number:3, DepNumber:1 },
      { EmpNumber: 6 ,FirstName: 'Jake', LastName: 'Cutler', Number:3, DepNumber:2 },
      { EmpNumber: 7 ,FirstName: 'Pete', LastName: 'Robinson', Number:4, DepNumber:2 },
      { EmpNumber: 8 ,FirstName: 'Harry', LastName: 'Potter', Number:4, DepNumber:2 },
      { EmpNumber: 9 ,FirstName: 'Hermione', LastName: 'Granger', Number:5, DepNumber:2 },
      { EmpNumber: 10 ,FirstName: 'Ron', LastName: 'Weasley', Number:5, DepNumber:2 },
      { EmpNumber: 11 ,FirstName: 'Severus', LastName: 'Snape', Number:6, DepNumber:3 },
      { EmpNumber: 12 ,FirstName: 'Albus', LastName: 'Dumbledore', Number:6, DepNumber:3 },
      { EmpNumber: 13 ,FirstName: 'Draco', LastName: 'Malfoy', Number:6, DepNumber:3 },
      { EmpNumber: 14 ,FirstName: 'Cho', LastName: 'Chang', Number:7, DepNumber:3 },
      { EmpNumber: 15 ,FirstName: 'Sean', LastName: 'Hung', Number:7, DepNumber:3 },
    ];
    return { employees };
  }

  createDepartmentsDB() {
    const departments = [
      { DepNumber: 1, DepName: 'IT', EmpName:[], Name:[] },
      { DepNumber: 2, DepName: 'Personnel', EmpName:[], Name:[] },
      { DepNumber: 3, DepName: 'Marketing', EmpName:[], Name:[]},
    ];
    return { departments };
  }

  createDb(){
    const tasks = this.createTasksDB()
    const emps = this.createEmployeesDB()
    const dpts = this.createDepartmentsDB()
    return {tasks, emps, dpts}
  }
}
