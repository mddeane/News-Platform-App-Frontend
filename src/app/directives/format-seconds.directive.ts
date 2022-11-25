import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormatSeconds]'
})
export class FormatSecondsDirective {

  @Input() previousValue: string = "";

  constructor(private el: ElementRef) { }

  // @HostListener('focus') setPreviousValue() {
  //   this.previousSeconds = this.previousSecsValue;
  // }

  @HostListener('keydown.enter') formatSeconds() {
    let secondsChars = this.el.nativeElement.innerText.split("");
    console.log(secondsChars);
    if (this.el.nativeElement.innerText.length < 1) {
      this.el.nativeElement.innerText = "00";
    } else if (this.el.nativeElement.innerText.length < 2) {
      this.el.nativeElement.innerText = "0" + this.el.nativeElement.innerText;
    } else if (this.el.nativeElement.innerText.length > 2) {
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.slice(1);
    }
  }

}
