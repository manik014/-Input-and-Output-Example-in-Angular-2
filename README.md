# -Input-and-Output-Example-in-Angular-2

**Project Descripion

Details: Input and Output used Child-Parent Component in this projects.

@Input:
     It binds the value with in one Component to receive a value from other component. This is a one way communication from parent         to child. It can be annotated by any type of property such as number, string, array or user defined data. 
     
 @Output:
     It binds a property of component to send data from one componet to calling component. This is one way communication from child       to component. It bind the property of the type of angular EventEmitter class. 
    
 **Component Property Binding using @Input**:
    Step1:
         Create the property in **Parent Component**  
         Ex:  stdLeaderObj = new Employee('Mani', 'K');     -----(parent-component.ts)
         
    Step2:     
         Create a custom element in parent component that is a selector of one of our child component.
         Ex: <app-employee [feed]='stdLeaderObj'></app-employee>
         
    Step3:
        Use @Input decorator to declare child component property as an input property that will receive value from parent using                  component property binding.
         EX: @Input('feed') myStdLeader : Employee
         
    Step4:
         Now we are ready to fetch values from input component property in our child component.
         EX: {{myStdLeader.fname +' '+ myStdLeader.lname}}  
         
     Student.ts:
          export class Student {
                    constructor(public fname?: string, public lname?: string) { 
                      }
                    } 
                    
    **Custom Event Binding using @Output and EventEmitter**
    Step1:
        Create text box using element property binding in child component. input event is fired when there is any change in text                box. $event.target.value fetches the current value of text box entered by user.
        EX:
           <div>
             Casual Leave :<input (input) ="num1= $event.target.value"/><br/><br/>
             Privilege Leave :<input (input) = "num2=$event.target.value"/><br/><br/>
             <button (click)="addNum()">Calculate</button>
            </div>	 
           
     Step2: 
          Find the method created in child component that will be fired when click event is invoked on click of button from above             (step-1) code snippet. emit() is the method of EventEmitter class that emits event payload.
          EX:
              num1 : '';
                 num2 : '';
              addNum()
              {
               this.addNumEvent.emit(parseInt(this.num1) +parseInt(this.num2));
               } 
     Step3:
          In the child component, create an instance of EventEmitter annotated by @Output decorator. This instance will work as                 custom event name. Here we are using aliasing for custom event name.  
          EX:
           @Output('addNumberEvent') 
           addNumEvent = new EventEmitter<number>();   
    Step4: 
        Now we are performing custom event binding. The custom event addNumberEvent will be invoked in parent component when emit()           method is invoked from child component. The event payload is accessed by $event object
        EX:
        <app-employee-detail (addNumberEvent) = "printSum($event)"></app-employee-detail>
        <p>Total Leave: {{sum}}</p>
        
    Step4:
       The event addNumberEvent will call printSum() method.
       sum = '';
      
      printSum(res) {
         this.sum = res;
        }
