import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent  {
  
  constructor() { }
  @Output('addNumberEvent') 
  addNumEvent = new EventEmitter<number>();  
  num1 : '';
	num2 : '';
  addNum()
  {
    this.addNumEvent.emit(parseInt(this.num1) +parseInt(this.num2));
  }
}
