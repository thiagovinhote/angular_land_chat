import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {

    console.log(this.elementRef)

  }

}
