import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Row } from '../../row.model';

@Component({
  selector: 'app-writer-cell',
  templateUrl: './writer-cell.component.html',
  styleUrls: ['./writer-cell.component.css']
})
export class WriterCellComponent implements OnInit {

  @Input() row: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", ""), new Date(), new User(-1, "", "", "", "", ""), new Date(), -1, new User(-1, "", "", "", "", ""), new Date(), new Date(), "", "");

  constructor() { }

  ngOnInit(): void {
  }

}
