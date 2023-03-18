import { AlertService } from './../alert/alert.service';
import { TestData } from './../../common/testData';
import { RundownService } from './rundown.service';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Row } from '../row/row.model';
import { User } from '../user/user.model';
import { Rundown } from './rundown.model';
import { Constants } from 'src/common/constants';


@Component({
  selector: 'app-rundown',
  templateUrl: './rundown.component.html',
  styleUrls: ['./rundown.component.css']
})
export class RundownComponent implements OnInit {



  message: string = "";
  buttonInChildComponentWasClicked() {
    this.message = 'The button in the child component was clicked';
  }

  // pageCell?: HTMLElement;

  xPos: number = 0; // bound to the return value of getMoveX()
  // yPos: number = 0; // not used yet

  xStart: number = 0; // bound to mousedown event to set start of drag
  // yStart: number = 0; // not used yet

  startWidth: number = 0; // mousedown events passes column width at start of drag, then mousemove event adds (xPos - xStart)
  // startHeight: number = 0;  // not used yet

  // xEnd: number = 0;
  // yEnd: number = 0;

  // tableHeight: number = 0;
  tableWidth: number = 0;

  activeColIndex: number = -1;  // mousedown event sets the active colum index, which draws from colWidths array

  isMoveActive: boolean = false;  // needs to be true for drag to work

  // isLocked: boolean = false;

  // previousSlug: string = "";

  storyModalRow: Row = Constants.defaultRow;

  jdoe: User = TestData.jdoe;
  jadoe: User = TestData.jadoe;
  mdavis: User = TestData.mdavis;

  rows: Row[] = [];

  // showRows: Row[] = [];

  defaultColWidths: number[] = [...Constants.defaultColWidths];
  colWidthsArray: number[][] = [];

  colOffsetWidth: number = 0;

  headings: string[] = [...Constants.defaultHeadings];

  rowsFromDb: Row[] = [...TestData.testRows];

  rundowns: Rundown[] = [...TestData.testRundowns];

  activeRundownIndex: number = 0;

  deleteThisRundown: Rundown = Constants.defaultRundown;

  deleteThisRowIndex: number = 0;
  rundownForDeleteRow: Rundown = Constants.defaultRundown;

  num: number = Date.now();
  d: Date = new Date();

  endOfCell: number = 0;

  showMaintenance: boolean = false;

  public screenWidth: number = 0;
  public screenHeight: number = 0;


  constructor(public rundownService: RundownService, public alertService: AlertService) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    // this.rows = this.setRows(this.rowsFromDb);
    // this.rows = this.setRows(this.rundown.rows);
    // this.showRows = this.rundownService.setRowSpans(this.rows);
    for (let i = 0; i < this.rundowns.length; i++) {
      this.colWidthsArray[i] = [...Constants.defaultColWidths];
      this.rundowns[i].rows = this.setRows(this.rundowns[i]);
      // this.showRows = this.rundownService.setRowSpans(this.rundowns[i]);
      this.selectedRowIndexes.push([]); // this sets up the rundown index (first array)
      this.newStoryCounters[i] = 1;
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
        classString = "bi bi-bookmark"
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
  dragIndexes: number[] = [];

  selectedRows: Row[] = [];
  selectedRowIndexes: number[][] = [];

  copiedRows: Row[] = [];

  handleDragstart(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    //    console.log("Drag start row index " + index);
    this.dragActive = true;
    this.dragStartIndex = index;
    this.dragActiveRundownId = rundown.id;
    // this.dragIndexes.push(this.dragStartIndex);
    // this.dragIndexes.sort();
    // console.log(this.dragIndexes);
  }

  handleDrag(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    //  console.log("Dragging row index " + index);
  }

  handleDragend(event: DragEvent, el: HTMLElement, row: Row, rundown: Rundown, index: number) {
    // console.log("Drag end row index " + index);
    this.dragActive = false;
    this.dragActiveIndex = -1;
    this.dragStartIndex = -1;
    this.dragIndexes = [];
    !rundown.isLocked ? this.setPageNumbers(rundown) : '';
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
    this.unselectAllRows();
    event.stopPropagation(); // stops the browser from redirecting.
    return false;
  }

  moveRow(startIndex: number, endIndex: number, rundown: Rundown) {
    // console.log("startIndex: " + startIndex);
    // console.log("endIndex: " + endIndex);

    if (startIndex > endIndex) {           // moving a story from bottom to top (moving up)
      rundown.rows.splice(endIndex, 0, rundown.rows[startIndex]); // insert start index item above end index, which pushes all items down one
      rundown.rows.splice(startIndex + 1, 1); // delete one item at the start index plus one because it has moved down one with the insertion of end index item
    } else if (endIndex > startIndex) {    // moving a story from top to bottom (moving down)
      rundown.rows.splice(endIndex + 1, 0, rundown.rows[startIndex]); // insert start index item above end index
      rundown.rows.splice(startIndex, 1);  // delete item at the start index
    }
  }

  // moveRows(startIndex: number, endIndex: number, rundown: Rundown) {
  //   let rows = this.selectedRowIndexes[this.activeRundownIndex];
  //   let rowIndex = endIndex;
  //   for (let i = 0; i < rows.length; i++) {
  //     rundown.rows.splice(rowIndex + i, 0, new Row((Math.floor(Math.random() * 1000) + 1), "", rows[i].storySlug, rows[i].segment, rows[i].anchor, rows[i].estTime, rows[i].actTime, rows[i].body, "unapproved", rows[i].slugRowSpan, rows[i].createdBy, rows[i].createdAt, rows[i].modifiedBy, rows[i].modifiedAt, rows[i].storyId, rows[i].writer, rows[i].backTime, rows[i].frontTime, rows[i].notes, rows[i].rowType));

  //   }
  //   if (!rundown.isLocked) {
  //     rundown.rows = this.setRows(rundown);
  //   }
  //   this.rundownService.setRowSpans(rundown);
  //   this.unselectAllRows();
  // }

  updateRows(rundown: Rundown) {
    //this.rows = this.setPageNumbers(rows);
    //this.rows = this.setPageNumbers(this.rows);
    for (let row of rundown.rows) {
      row.slugRowSpan = 1;
      row.pageNumber = "1";
    }
    this.rundownService.setRowSpans(rundown);
    !rundown.isLocked ? this.setPageNumbers(rundown) : '';
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
    // console.log("inside setPageNumbers");
    let blockLetter: string = "A";
    let blockLetterIndex: number = 0;
    let pageCounter: number = 1;

    for (let i = 0; i < rundown.rows.length; i++) {
      rundown.rows[i].pageNumber = Constants.blockLetters[blockLetterIndex] + pageCounter;
      if (rundown.rows[i].rowType == 'break') {
        blockLetterIndex++;
        pageCounter = 0;
      }
      pageCounter++;
    }
    return rundown.rows;
  }

  defaultUser: User = Constants.defaultUser;
  newRowCounter = 1;
  newStoryCounters: number[] = [];

  addRow(rowIndex: number, rundown: Rundown) {
    let rowNumber: number = 0;
    for (let i = 0; i < this.rundowns.length; i++) {
      if (rundown.id == this.rundowns[i].id) {
        rowNumber = this.newStoryCounters[i];
        this.newStoryCounters[i]++;
      }
    }
    rundown.rows.splice(rowIndex, 0, new Row((rundown.rows.length + 1), "", "New Row " + rowNumber, "", "", "0:00", "0:00", "", "unapproved", 1, this.defaultUser.username, new Date(), this.defaultUser.username, new Date(), -1, this.defaultUser.username, new Date(), new Date(), "", ""));

  }

  addBreak(rowIndex: number, rundown: Rundown) {
    rundown.rows.splice(rowIndex, 0, new Row((rundown.rows.length + 1), "", "BREAK", "", "", "0:00", "0:00", "", "unapproved", 1, this.defaultUser.username, new Date(), this.defaultUser.username, new Date(), -1, this.defaultUser.username, new Date(), new Date(), "", "break"));
  }

  resetSelectedRows() {
    // this.selectedRows = [];

    let activeRowArray = this.selectedRowIndexes[this.activeRundownIndex];
    activeRowArray = [];
  }

  selectAllRows(rundown: Rundown) {
    // for (let row of rundown.rows) {
    //   if (!this.selectedRows.includes(row)) {
    //     this.selectedRows.push(row);
    //   }
    // }

    let activeRowArray = this.selectedRowIndexes[this.activeRundownIndex];
    for (let i = 0; i < rundown.rows.length; i++) {
      if (!activeRowArray.includes(i)) {
        activeRowArray.push(i);
      }
    }
    activeRowArray.sort();
    console.log("this.activeRundownIndex: " + this.activeRundownIndex + " activeRowArray: " + activeRowArray);
  }

  unselectAllRows() {
    let numberOfRundowns = this.rundowns.length;
    for (let i = 0; i < numberOfRundowns; i++) {
      let activeRowArray = this.selectedRowIndexes[i];
      activeRowArray.splice(0);
    }
    // let activeRowArray = this.selectedRowIndexes[this.activeRundownIndex];
    // activeRowArray.splice(0);
    // console.log("this.activeRundownIndex: " + this.activeRundownIndex + " activeRowArray: " + activeRowArray);
  }

  selectOrUnselectRow(row: Row, rowIndex: number) {
    // this.selectedRows.includes(row) ? this.selectedRows.splice(this.selectedRows.indexOf(row), 1) : this.selectedRows.push(row);

    let activeRowArray = this.selectedRowIndexes[this.activeRundownIndex];
    activeRowArray.includes(rowIndex) ? activeRowArray.splice(activeRowArray.indexOf(rowIndex), 1)
      : activeRowArray.push(rowIndex);
    activeRowArray.sort();
    console.log("this.activeRundownIndex: " + this.activeRundownIndex + " activeRowArray: " + activeRowArray);
  }

  copyRows() {
    this.copiedRows = [];
    let activeRowArray = this.selectedRowIndexes[this.activeRundownIndex];
    let activeRundown = this.rundowns[this.activeRundownIndex];
    let rows = activeRundown.rows;
    for (let rowIndex of activeRowArray) {
      this.copiedRows.push(rows[rowIndex]);
    }
  }

  copyRow(row: Row) {
    this.copiedRows = [];
    this.copiedRows.push(row);
  }

  pasteRows(rundown: Rundown, rowIndex: number) {
    // let rundown = this.rundowns[this.activeRundownIndex];
    // let rowIndex = rundown.rows.length;
    let rows = this.copiedRows;
    for (let i = 0; i < rows.length; i++) {
      rundown.rows.splice(rowIndex + i, 0, new Row((Math.floor(Math.random() * 1000) + 1), "", rows[i].storySlug, rows[i].segment, rows[i].anchor, rows[i].estTime, rows[i].actTime, rows[i].body, "unapproved", rows[i].slugRowSpan, rows[i].createdBy, rows[i].createdAt, rows[i].modifiedBy, rows[i].modifiedAt, rows[i].storyId, rows[i].writer, rows[i].backTime, rows[i].frontTime, rows[i].notes, rows[i].rowType));

    }
    if (!rundown.isLocked) {
      rundown.rows = this.setRows(rundown);
    }
    this.rundownService.setRowSpans(rundown);
    this.unselectAllRows();
  }

  lockRundown(rundown: Rundown) {
    rundown.isLocked = true;
    this.alertService.showAlert("Rundown is locked.", "danger");
  }

  unlockRundown(rundown: Rundown) {
    rundown.isLocked = false;
    this.alertService.showAlert("Rundown is unlocked.", "success");
    this.setPageNumbers(rundown);
  }

  resetColWidths(activeRundownIndex: number) {
    for (let i = 0; i < this.colWidthsArray[activeRundownIndex].length; i++) {
      this.colWidthsArray[activeRundownIndex][i] = Constants.defaultColWidths[i];
    }
  }

  deleteRow(rowIndex: number, rows: Row[]) {
    rows.splice(rowIndex, 1);
  }

  expandEndOfRundown() {
    this.colWidthsArray[this.activeRundownIndex][this.activeColIndex] = (this.colWidthsArray[this.activeRundownIndex][this.activeColIndex] + 1)
  }
}
