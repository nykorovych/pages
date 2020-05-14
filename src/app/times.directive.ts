import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  constructor(
    // ViewContainerRef is kindof ElementRef but ViewContainerRef allows us more easilt to work with the co0ntent of it
    //  (delete/replace)
    private viewContainer: ViewContainerRef,
    // TemplateRef -  more or less the referamce to what is inside of the element that we apply our DIRECTIVE itself (appTime)
    private templateRef: TemplateRef<any>) { }

    @Input('appTimes') set render (times:number) {
      this.viewContainer.clear();
      for (let i = 0; i< times; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef, {numberOf: i});
      }
    }

}
