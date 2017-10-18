import { Component } from '@angular/core';
 
export class Employee { 
  constructor(public fname?: string, public lname?: string) { 
}
}
// const HEROES: Employee[] = [
//   { id: 11, name: 'Mani' },
//   { id: 12, name: 'Kabi' },
//   { id: 13, name: 'Ravi' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  sum = '';
  stdLeaderObj = new Employee('Mani', 'K');  
  constructor(){
    console.log("App componenet initiaated");
  }
  printSum(res){
    this.sum = res;
  }
}

