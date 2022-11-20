import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnEscKey]'
})
export class OnEscKeyDirective {

  @Input() previousValue: string = "";

  escValue: string = "";

  constructor(private el: ElementRef) { }

  /**
   * This listens for focus event on element.
   * It stores the value of the innerText of the element to reinstore if escape is pressed.
   */
  @HostListener('focus') setPreviousValue() {
    this.escValue = this.previousValue;
  }

  /**
   * This listens for the esc key down.
   * Inserts previous value in element and then calls blur event to remove focus.
   */
  @HostListener('keydown.esc') escBlur() {
    this.el.nativeElement.innerText = this.escValue;
    this.el.nativeElement
      .blur();
  }

}
