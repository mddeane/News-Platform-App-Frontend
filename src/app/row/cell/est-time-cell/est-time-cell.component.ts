import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Row } from '../../row.model';

@Component({
  selector: 'app-est-time-cell',
  templateUrl: './est-time-cell.component.html',
  styleUrls: ['./est-time-cell.component.css']
})
export class EstTimeCellComponent implements OnInit {

  @Input() row: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", ""), new Date(), new User(-1, "", "", "", "", ""), new Date(), -1, new User(-1, "", "", "", "", ""), new Date(), new Date(), "", "");

  estTimeString: string = "0:00";

  constructor() { }

  ngOnInit(): void {

  }

  limitTwoChar(prevString: string): string {
    let twoCharString: string = "";
    if (prevString.length > 2) {
      twoCharString = prevString.slice(1);
    } else {
      twoCharString = prevString;
    }
    return twoCharString;
  }

  addZero(prevString: string): string {
    let addZeroString: string = "";
    if (prevString.length < 1) {
    } else if (prevString.length < 2) {
      addZeroString = "0" + prevString;
    }
    return addZeroString;
  }
}
