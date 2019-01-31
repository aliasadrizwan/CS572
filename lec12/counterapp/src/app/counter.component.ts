import { Component, Input, Output, EventEmitter } from '@angular/core';
/* import { emit } from 'cluster'; */

@Component({
  selector: 'counter',
  template: `
    <p>
      counter works!
    </p>
    <p>
    <button (click)="increase()" >+</button>
    {{counterValue}}
    <button (click)="decrease()">-</button>
    </p>
  `,
  styles: []
})
export class CounterComponent {
  @Input() counterval;
  @Output() counterChange = new EventEmitter();
  private counterValue;
  constructor() { }
  increase(){
    this.counterValue = this.counterValue + 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  decrease(){
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  ngOnInit(){
    this.counterValue = this.counterval;
    //console.log(this.counterValue);
  }

}
