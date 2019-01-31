import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counterapp';
 private componentCounterValue: number;


  change(value: number){
    this.componentCounterValue = value;
    console.log(`app component: ${value}`);
  }
}
