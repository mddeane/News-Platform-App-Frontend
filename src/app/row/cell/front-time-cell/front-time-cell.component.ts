import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Row } from '../../row.model';

@Component({
  selector: 'app-front-time-cell',
  templateUrl: './front-time-cell.component.html',
  styleUrls: ['./front-time-cell.component.css']
})
export class FrontTimeCellComponent implements OnInit {

  @Input() row: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", "").username, new Date(), new User(-1, "", "", "", "", "").username, new Date(), -1, new User(-1, "", "", "", "", "").username, new Date(), new Date(), "", "");

  constructor() { }

  ngOnInit(): void {
  }

}
