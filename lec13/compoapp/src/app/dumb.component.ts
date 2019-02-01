import { Input, Component, OnInit } from '@angular/core';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-dumb',
  template: `
    <p>
      dumb works!
    </p>
    <ul>
      <li *ngFor="let item of states">Name: {{item.name}}, Age: {{item.age}} </li>
    </ul>
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input() states;
  constructor() { }

  ngOnInit() {
  }

}
