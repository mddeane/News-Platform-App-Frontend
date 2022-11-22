import { Injectable } from '@angular/core';
import { Row } from '../row/row.model';

@Injectable({
  providedIn: 'root'
})
export class RundownService {

  constructor() { }

  setRowSpans(rows: Row[]) {
    let previousSlug = "";
    let spans = 1;
    for (let i = 0; i < rows.length; i++) {
      if (i == 0) {
        previousSlug = rows[i].storySlug;
        rows[i].slugRowSpan = spans;
      } else {
        if (rows[i].storySlug != previousSlug) {
          previousSlug = rows[i].storySlug;
          spans = 1;
          rows[i].slugRowSpan = spans;
        } else {
          rows[i].slugRowSpan = 0;
          rows[i - spans].slugRowSpan = spans + 1;
          spans++;
        }
      }
    }
    // for (let row of rows) {
    //   console.log("Row span: " + row.slugRowSpan);
    // }
    return rows;
  }
}
