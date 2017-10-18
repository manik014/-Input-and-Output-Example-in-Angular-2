import { Component,Input } from '@angular/core';
import { Employee } from '../app.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {

  @Input('feed') myStdLeader : Employee
  constructor(){console.log("child initiated");}

}

    