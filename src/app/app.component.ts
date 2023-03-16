import { Constants } from 'src/common/constants';
import { Functions } from './../common/functions';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News Platform App';
  screenWidth: number = 0;
  screenHeight: number = 0;

  navbarHeight: number = 49;
  defaultSidebarWidth: number = Constants.defaultSideBarLeftWidth;
  sidebarWidth: number = this.defaultSidebarWidth;
  mainWidth: number = this.screenWidth - this.sidebarWidth;

  xPos: number = 0;
  yPos: number = 0;

  xStart: number = 0;
  yStart: number = 0;

  startWidth: number = 0;
  startHeight: number = 0;

  xEnd: number = 0;
  yEnd: number = 0;

  activeElement!: HTMLElement;

  isMoveActive: boolean = false;

  ngOnInit() {

    /**
     * When the page loads, get the width and height of the window.
     * This determines the width and height of the sidebar and main content.
     * For height, substract navbar.
     */
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  /**
   * Add HostListener to sense changes in window size.
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }


  getChange(start: number, end: number): number {
    return (end - start);
  }

  // @HostListener('mousemove', ['$event'])
  getMoveX(event: MouseEvent): number {
    return event.clientX;
  }

  // @HostListener('mousemove', ['$event'])
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

  setStartWidth(w: number) {
    this.startWidth = w;
  }

  // changeWidth(el: HTMLElement, change: number): number {
  //   let rects = el.getClientRects();
  //   let elementWidth: number = rects[0].width;
  //   return (this.startWidth + change);
  // }

}
