import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[IsVisible]'
})
export class IsVisibleDirective {
  @Input() visible: boolean
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (!this.visible)
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none')
    else
      this.renderer.setStyle(this.element.nativeElement, 'display', 'true')
  }
}
