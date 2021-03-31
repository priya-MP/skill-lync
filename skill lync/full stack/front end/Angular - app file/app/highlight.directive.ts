import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() color = '';
  @Input() defaultColor = '';
  @Output() tellColor = new EventEmitter();

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseOver() {
    console.log("onMouseOver.....")
    var colorToBeApplied = this.color || this.defaultColor || "yellow";
    this.el.nativeElement.style["background-color"] = colorToBeApplied;
    this.tellColor.emit(colorToBeApplied);
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("onMouseLeave......")
    this.el.nativeElement.style["background-color"] = null;
  }

}
