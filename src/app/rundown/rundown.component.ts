import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rundown',
  templateUrl: './rundown.component.html',
  styleUrls: ['./rundown.component.css']
})
export class RundownComponent implements OnInit {

  colWidths: number[] = [33, 17, 50, 200, 150];

  xPos: number = 0;
  yPos: number = 0;

  xStart: number = 0;
  yStart: number = 0;

  startWidth: number = 0;
  startHeight: number = 0;

  xEnd: number = 0;
  yEnd: number = 0;

  activeColIndex: number = 3;

  isMoveActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // @HostListener('mousemove', ['$event'])
  getMoveX(event: MouseEvent): number {
    return event.clientX;
  }

  // @HostListener('mousemove', ['$event'])
  getMoveY(event: MouseEvent): number {
    return event.clientY;
  }
}
