import {Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective{
  @Input('zoom') size

  constructor(private el: ElementRef){}

  @HostListener('mouseenter') onMouseEnter(){
    this.setFontSize(this.size);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setFontSize(15);
  }

  setFontSize(value: number | string): void{
    this.el.nativeElement.style.fontSize = `${value}px`;
  }
}