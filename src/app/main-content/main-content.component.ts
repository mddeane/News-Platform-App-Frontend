import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  xPos: number = 0; // bound to the return value of getMoveX()
  // yPos: number = 0; // not used yet

  currentScrollLeft: number = 0;

  screenWidth: number = 0;
  screenHeight: number = 0;

  showMaintenance: boolean = false;

  constructor() { }

  // @HostListener('mousemove', ['$event'])
  getMoveX(event: MouseEvent): number {
    return event.clientX;
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

}
