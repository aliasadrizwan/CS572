import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor(private e: ElementRef) {  }
@HostListener('dblclick') display(){
  console.log(this.e.nativeElement.tagName + " element has been clicked");
}
}
