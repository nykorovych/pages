import { Directive, ElementRef, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  
  @Input('appClass') set classNames(classObj:any) {
    
   for (let key in classObj) {
     if (classObj[key]){
       this.element.nativeElement.classList.add(key);
     } else {
        this.element.nativeElement.classList.remove(key);
      
     }
     
    }
  }

  constructor(private element: ElementRef) { }

}

//  FIRST EXAMPLE 11*****************************************************************************
// export class ClassDirective {
//   @Input() set appClass(color: string) {
//     this.element.nativeElement.style.color = color
//   }

//   constructor(private element: ElementRef) { }

// }
//  second EXAMPLE 11*****************************************************************************

// export class ClassDirective {
//   @Input() set background(color: string) {
//     this.element.nativeElement.style.color = color
//   }

//   constructor(private element: ElementRef) { }

// }