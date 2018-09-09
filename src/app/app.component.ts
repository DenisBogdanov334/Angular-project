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
  id: number;
  name: string;
}
export class Task {
  id: number;
  name: string;
}
export class Employee {
  id: number;
  name: string;
}