import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true)
  }

  @HostListener('mouseleave') onMouserLeave() {
    this.hover(false)
  }

  private hover(a: boolean) {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'border-info', a)
    this.renderer.setElementClass(this.elementRef.nativeElement, 'border-danger', !a)
  }

}
