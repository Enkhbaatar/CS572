import { Directive, Input, ElementRef, Renderer2, HostListener, HostBinding, } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {
  @Input() fontSize: string = '10px'
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('dblclick') foo() {
    let currfontSize = this.element.nativeElement.style.fontSize.replace("px", "")
    let currentSize = currfontSize == "" ? this.fontSize + 2 : parseInt(currfontSize) + 2;
    this.size = currentSize + "px";
  }

  @HostBinding('style.font-size') size;
  ngOnInit() {
    this.size = this.fontSize + "px"
  }
}
