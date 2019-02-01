import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p [appIsVisible] = true>
      Custom directive with isVisible!
      </p>
    
      <div appLoggable>Double click me</div>
    
      <app-dumb [states]="state"></app-dumb>
      
    
  `,
  styles: []
})
export class SmartComponent implements OnInit {
 state = [{name:'ali',age:26},{name:'asad',age:36}];
  constructor() { }

  ngOnInit() {
  }

}
