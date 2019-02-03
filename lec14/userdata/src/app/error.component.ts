import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
      No user found!
    </p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
