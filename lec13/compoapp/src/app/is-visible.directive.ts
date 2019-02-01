import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit {
@Input() appIsVisible;
  constructor(private elementRef: ElementRef) {
   }
   ngOnInit(){
     if(this.appIsVisible == true)
     this.elementRef.nativeElement.style.visibility = 'visible';
     else if(this.appIsVisible == false)
     this.elementRef.nativeElement.style.visibility = 'hidden';
   }
}
