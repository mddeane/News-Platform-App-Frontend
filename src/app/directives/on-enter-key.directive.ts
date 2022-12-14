import { OnEscKeyDirective } from './on-esc-key.directive';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnEnterKey]'
})
export class OnEnterKeyDirective {

  constructor(private el: ElementRef) { }

  /**
   * This listens for enter key down.
   * Calls blur event to shift focus off of element.
   */
  @HostListener('keydown.enter') onBlur() {
    // this.el.nativeElement.keyEsc;
    this.el.nativeElement.blur();
  }
}
