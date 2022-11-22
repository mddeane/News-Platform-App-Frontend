import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Row } from '../../row.model';

@Component({
  selector: 'app-segment-cell',
  templateUrl: './segment-cell.component.html',
  styleUrls: ['./segment-cell.component.css']
})
export class SegmentCellComponent implements OnInit {

  @Input() row: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", ""), new Date(), new User(-1, "", "", "", "", ""), new Date(), -1, new User(-1, "", "", "", "", ""), new Date(), new Date(), "", "");

  constructor() { }

  ngOnInit(): void {
  }

}
