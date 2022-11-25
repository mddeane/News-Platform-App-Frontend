import { RundownService } from './rundown.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Row } from '../row/row.model';
import { User } from '../user/user.model';
import { Rundown } from './rundown.model';


@Component({
  selector: 'app-rundown',
  templateUrl: './rundown.component.html',
  styleUrls: ['./rundown.component.css']
})
export class RundownComponent implements OnInit {

  pageCell?: HTMLElement;

  xPos: number = 0;
  yPos: number = 0;

  xStart: number = 0;
  yStart: number = 0;

  startWidth: number = 0;
  startHeight: number = 0;

  xEnd: number = 0;
  yEnd: number = 0;

  tableHeight: number = 0;

  activeColIndex: number = -1;

  isMoveActive: boolean = false;

  isLocked: boolean = false;

  previousSlug: string = "";

  storyModalRow: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", ""), new Date(), new User(-1, "", "", "", "", ""), new Date(), -1, new User(-1, "", "", "", "", ""), new Date(), new Date(), "", "");

  jdoe: User = new User(1, "John", "Doe", "jdoe", "password", "admin");
  jadoe: User = new User(2, "Jane", "Doe", "jadoe", "password", "producer");
  mdavis: User = new User(3, "Miles", "Davis", "mdavis", "password", "writer");

  rows: Row[] = [];

  showRows: Row[] = [];

  colWidths: number[] = [50, 200, 150, 100, 100, 100, 100, 110, 110, 200];

  headings: string[] = ["Page", "Slug", "Segment", "Anchor", "Est Time", "Act Time", "Writer", "Back Time", "Front Time", "Notes"];

  cells: string[] = ["Segment", "Anchor", "Est Time", "Act Time", "Writer", "Back Time", "Front Time", "Notes"];

  rowsFromDb: Row[] = [
    new Row(1, "", "Story Slug 1", "INTRO VO", "AB CD", "0:30", "0:30", "Contains words 1", "unapproved", 1, this.jdoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "These are notes.", ""),

    new Row(2, "", "Story Slug 2", "INTRO PKG", "AB CD", "0:45", "0:45", "", "unapproved", 1, this.jadoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "", ""),

    new Row(3, "", "Story Slug 3", "INTRO PKG", "CD", "1:30", "1:30", "Contains words 3", "unapproved", 1, this.jadoe, new Date(), this.jadoe, new Date(), -1, this.jadoe, new Date(), new Date(), "", ""),

    new Row(4, "", "Story Slug Same", "INTRO", "AB", "", "", "Contains words 4", "unapproved", 1, this.mdavis, new Date(), this.mdavis, new Date(), -1, this.mdavis, new Date(), new Date(), "", ""),

    new Row(5, "", "Story Slug Same", "PKG", "", "", "", "Contains words 5", "unapproved", 1, this.jdoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "", ""),

    new Row(6, "", "Story Slug Same", "TAG", "AB", "", "", "Contains words 6", "unapproved", 1, this.jdoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "", ""),

    new Row(7, "", "Story Slug 7", "INTRO PKG", "AB", "", "", "Contains words 7", "unapproved", 1, this.jdoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "", "")
  ];


  rundown0: Rundown = new Rundown(1, this.jdoe, new Date(), this.jdoe, new Date(), "5pm News", new Date(), new Date(), "deactivated",
    [new Row(1, "", "Story Slug 1", "INTRO VO", "AB CD", "0:30", "0:30", "Contains words 1", "unapproved", 1, this.jdoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "These are notes.", ""),

    new Row(2, "", "Story Slug 2", "INTRO PKG", "AB CD", "0:45", "0:45", "", "unapproved", 1, this.jadoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "", ""),

    new Row(3, "", "Story Slug 3", "INTRO PKG", "CD", "1:30", "1:30", "Contains words 3", "unapproved", 1, this.jadoe, new Date(), this.jadoe, new Date(), -1, this.jadoe, new Date(), new Date(), "", "")
    ]);

  rundown1: Rundown = new Rundown(2, this.jdoe, new Date(), this.jdoe, new Date(), "6pm News", new Date(), new Date(), "deactivated",
    [new Row(4, "", "Story Slug Same", "INTRO", "AB", "", "", "Contains words 4", "unapproved", 1, this.mdavis, new Date(), this.mdavis, new Date(), -1, this.mdavis, new Date(), new Date(), "", ""),

    new Row(5, "", "Story Slug Same", "PKG", "", "", "", "Contains words 5", "unapproved", 1, this.jdoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "", "")
    ]);

  rundown2: Rundown = new Rundown(3, this.jdoe, new Date(), this.jdoe, new Date(), "10pm News", new Date(), new Date(), "deactivated",
    [new Row(6, "", "Story Slug Same", "TAG", "AB", "", "", "Contains words 6", "unapproved", 1, this.jdoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "", ""),

    new Row(7, "", "Story Slug 7", "INTRO PKG", "AB", "", "", "Contains words 7", "unapproved", 1, this.jdoe, new Date(), this.jdoe, new Date(), -1, this.jdoe, new Date(), new Date(), "", "")
    ]);

  rundowns: Rundown[] = [
    this.rundown0,
    this.rundown1,
    this.rundown2
  ];

  num: number = Date.now();
  d: Date = new Date();

  constructor(public rundownService: RundownService) { }

  ngOnInit(): void {
    // this.rows = this.setRows(this.rowsFromDb);
    // this.rows = this.setRows(this.rundown.rows);
    // this.showRows = this.rundownService.setRowSpans(this.rows);

    for (let i = 0; i < this.rundowns.length; i++) {
      this.rundowns[i].rows = this.setRows(this.rundowns[i]);
      this.showRows = this.rundownService.setRowSpans(this.rundowns[i]);
    }
  }

  // @HostListener('mousemove', ['$event'])
  getMoveX(event: MouseEvent): number {
    return event.clientX;
  }

  // @HostListener('mousemove', ['$event'])
  getMoveY(event: MouseEvent): number {
    return event.clientY;
  }

  setStatusIcon(status: string): string {
    let classString = "";
    switch (status) {
      case "unwritten":
        classString = "bi bi-dash-lg"
        break;
      case "unapproved":
        classString = "bi bi-text-left"
        break;
      case "ready":
        classString = "bi bi-star-fill"
        break;
      case "approved":
        classString = "bi bi-check-lg"
        break;
      default:
        classString = "bi bi-record-fill"
    }
    return classString;
  }

  setStatusBg(status: string): string {
    let classString = "";
    switch (status) {
      case "unwritten":
        classString = "bg-danger"
        break;
      case "unapproved":
        classString = "bg-warning"
        break;
      case "ready":
        classString = "bg-primary"
        break;
      case "approved":
        classString = "bg-success"
        break;
      default:
        classString = "bg-secondary"
    }
    return classString;
  }

  dragActive: boolean = false;
  dragStartIndex: number = -1;
  dragActiveIndex: number = -1;
  dragRows: HTMLElement[] = [];
  dragActiveRundownId: number = -1;

  handleDragstart(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    //    console.log("Drag start row index " + index);
    this.dragActive = true;
    this.dragStartIndex = index;
    this.dragActiveRundownId = rundown.id;
  }

  handleDrag(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    //  console.log("Dragging row index " + index);
  }

  handleDragend(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    // console.log("Drag end row index " + index);
    this.dragActive = false;
    this.dragActiveIndex = -1;
    this.dragStartIndex = -1;
    !this.isLocked ? this.setPageNumbers(rundown) : '';
  }

  handleDragenter(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    // console.log("Drag enter row index " + index);
    this.dragActiveIndex = index;
    // !this.dragRows.includes(el) ? this.dragRows.push(el) : '';
    event.preventDefault();
  }

  handleDragleave(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    // console.log("Drag leave row index " + index);
    event.preventDefault();
  }

  handleDragover(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    // console.log("Drag over row index " + index);
    event.preventDefault();
    return false;
  }

  handleDrop(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    // console.log("Drop row index " + index);
    for (let row of rundown.rows) {
      row.slugRowSpan = 1;
    }
    this.moveRow(this.dragStartIndex, this.dragActiveIndex, rundown);
    this.rundownService.setRowSpans(rundown);
    event.stopPropagation(); // stops the browser from redirecting.
    return false;
  }

  moveRow(startIndex: number, endIndex: number, rundown: Rundown) {
    console.log("startIndex: " + startIndex);
    console.log("endIndex: " + endIndex);
    if (startIndex > endIndex) {           // moving a story from bottom to top (moving up)
      rundown.rows.splice(endIndex, 0, rundown.rows[startIndex]); // insert start index item above end index, which pushes all items down one
      rundown.rows.splice(startIndex + 1, 1); // delete one item at the start index plus one because it has moved down one with the insertion of end index item
    } else if (endIndex > startIndex) {    // moving a story from top to bottom (moving down)
      rundown.rows.splice(endIndex + 1, 0, rundown.rows[startIndex]); // insert start index item above end index
      rundown.rows.splice(startIndex, 1);  // delete item at the start index
    }
  }

  updateRows(rundown: Rundown) {
    //this.rows = this.setPageNumbers(rows);
    //this.rows = this.setPageNumbers(this.rows);
    for (let row of rundown.rows) {
      row.slugRowSpan = 1;
      row.pageNumber = "1";
    }
    this.rundownService.setRowSpans(rundown);
    !this.isLocked ? this.setPageNumbers(rundown) : '';
  }

  setRows(rundown: Rundown): Row[] {
    let orderedPages: Row[] = this.setPageNumbers(rundown);
    return orderedPages;
  }

  setShowRows(rundown: Rundown): Row[] {
    let showRowsWithRowSpans: Row[] = this.rundownService.setRowSpans(rundown);
    return showRowsWithRowSpans;
  }

  setPageNumbers(rundown: Rundown): Row[] {
    console.log("inside setPageNumbers");
    let blockLetter: string = "A";
    let pageCounter: number = 1;

    for (let row of rundown.rows) {
      row.pageNumber = blockLetter + pageCounter;
      console.log("row.pageNumber: " + row.pageNumber);
      pageCounter++;
    }
    return rundown.rows;
  }

  defaultUser: User = new User(0, "", "", "", "", "reader");
  newRowCounter = 1;

  addRow(rowIndex: number, rundown: Rundown) {
    rundown.rows.splice(rowIndex, 0, new Row((rundown.rows.length + 1), "", "New Row " + this.newRowCounter, "", "", "0:00", "0:00", "", "unapproved", 1, this.defaultUser, new Date(), this.defaultUser, new Date(), -1, this.defaultUser, new Date(), new Date(), "", ""));
    this.newRowCounter++;
  }

  deleteRow(rowIndex: number, rows: Row[]) {
    rows.splice(rowIndex, 1);
  }

  // setRowSpans(rows: Row[]) {

  //   let previousSlug = "";
  //   let spans = 1;
  //   for (let i = 0; i < rows.length; i++) {
  //     if (i == 0) {
  //       previousSlug = rows[i].storySlug;
  //       rows[i].slugRowSpan = spans;
  //     } else {
  //       if (rows[i].storySlug != previousSlug) {
  //         previousSlug = rows[i].storySlug;
  //         spans = 1;
  //         rows[i].slugRowSpan = spans;
  //       } else {
  //         rows[i].slugRowSpan = 0;
  //         rows[i - spans].slugRowSpan = spans + 1;
  //         spans++;
  //       }
  //     }
  //   }
  //   // for (let row of rows) {
  //   //   console.log("Row span: " + row.slugRowSpan);
  //   // }
  //   return rows;
  // }
}
