import { Directive, Input, ElementRef, Renderer2, HostListener, HostBinding, } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {
  @Input() fontSize: string = '10'
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('dblclick') changeSize() {
    this.size = parseInt(this.element.nativeElement.style.fontSize) + 2 + "px";
  }

  @HostBinding('style.font-size') size;
  ngOnInit() {
    this.size = this.fontSize + "px"
  }
}
