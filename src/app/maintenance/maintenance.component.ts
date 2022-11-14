import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  xPos: number = 0;
  yPos: number = 0;

  xStart: number = 0;
  yStart: number = 0;

  xEnd: number = 0;
  yEnd: number = 0;

  xPosMinusXStart: number = this.xPos - this.xStart;
  yPosMinusYStart: number = this.yPos - this.yStart;

  activeLeft: number = 0;
  activeTop: number = 0;
  moveActiveElement!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  //@HostListener('mousemove', ['$event'])
  getMoveX(event: MouseEvent): number {
    return event.clientX;
  }

  //@HostListener('mousemove', ['$event'])
  getMoveY(event: MouseEvent): number {
    return event.clientY;
  }

  getXStart(event: MouseEvent): number {
    return event.clientX;
  }

  getYStart(event: MouseEvent): number {
    return event.clientY;
  }

  getXEnd(event: MouseEvent): number {
    return event.clientX;
  }

  getYEnd(event: MouseEvent): number {
    return event.clientY;
  }

  moveElement(el: HTMLElement) {
    let left: number = el.getBoundingClientRect().left;
    let top: number = el.getBoundingClientRect().top;
    // el.style.left = this.xPos + "px";
    // el.style.top = this.yPos + "px";
    // if (el.classList.contains('moveActive')) {
    //   el.style.left = (left - (this.xPos - this.xStart)) + "px";
    //   el.style.top = (top - (this.yPos - this.yStart)) + "px";
    // }
    console.log(this.moveActiveElement);
    // console.log(el.classList.contains('moveActive'));
  }
}
