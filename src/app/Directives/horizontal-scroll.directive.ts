import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]'
})
export class HorizontalScrollDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const target = this.el.nativeElement;
    const scrollAmount = 300;

    if (event.target && (event.target as HTMLElement).classList.contains('scroll-left')) {
      target.scrollLeft -= scrollAmount;
    } else if (event.target && (event.target as HTMLElement).classList.contains('scroll-right')) {
      target.scrollLeft += scrollAmount;
    }
  }
}
