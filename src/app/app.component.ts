import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
export class Department {
title = 'my-departments';
  Number: number;
  Name: string;
}
export class Task {
title = 'my-tasks';
  Number: number;
  Name: string;
}
export class Employee {
title = 'my-employees';
  FirstName: string;
  LastName: string;
}