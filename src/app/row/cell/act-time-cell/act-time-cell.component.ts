import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Row } from '../../row.model';

@Component({
  selector: 'app-act-time-cell',
  templateUrl: './act-time-cell.component.html',
  styleUrls: ['./act-time-cell.component.css']
})
export class ActTimeCellComponent implements OnInit {

  @Input() row: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", ""), new Date(), new User(-1, "", "", "", "", ""), new Date(), -1, new User(-1, "", "", "", "", ""), new Date(), new Date(), "", "");

  constructor() { }

  ngOnInit(): void {
  }

}
