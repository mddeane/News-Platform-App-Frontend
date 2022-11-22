import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Row } from '../../row.model';

@Component({
  selector: 'app-page-cell',
  templateUrl: './page-cell.component.html',
  styleUrls: ['./page-cell.component.css']
})
export class PageCellComponent implements OnInit {

  @Input() row: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", ""), new Date(), new User(-1, "", "", "", "", ""), new Date(), -1, new User(-1, "", "", "", "", ""), new Date(), new Date(), "", "");

  @Input() isLocked: boolean = false;

  @Output() newPageNumber = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
