import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  @Input() background: string;

  constructor(private element: ElementRef) { 
    console.log (element.nativeElement)
    setTimeout (()=> { this.element.nativeElement.style.color = this.background}, 50)
   
  }

}
