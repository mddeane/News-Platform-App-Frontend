import { Injectable } from '@angular/core';
import { Row } from '../row/row.model';
import { Rundown } from './rundown.model';

@Injectable({
  providedIn: 'root'
})
export class RundownService {

  constructor() { }

  setRowSpans(rundown: Rundown) {
    let previousSlug = "";
    let spans = 1;
    for (let i = 0; i < rundown.rows.length; i++) {
      if (i == 0) {
        previousSlug = rundown.rows[i].storySlug;
        rundown.rows[i].slugRowSpan = spans;
      } else {
        if (rundown.rows[i].storySlug != previousSlug) {
          previousSlug = rundown.rows[i].storySlug;
          spans = 1;
          rundown.rows[i].slugRowSpan = spans;
        } else {
          rundown.rows[i].slugRowSpan = 0;
          rundown.rows[i - spans].slugRowSpan = spans + 1;
          spans++;
        }
      }
    }
    // for (let row of rows) {
    //   console.log("Row span: " + row.slugRowSpan);
    // }
    return rundown.rows;
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
}
