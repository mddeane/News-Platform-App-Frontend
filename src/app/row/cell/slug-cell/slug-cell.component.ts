import { RundownService } from './../../../rundown/rundown.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { Row } from '../../row.model';
import { Rundown } from 'src/app/rundown/rundown.model';

@Component({
  selector: 'app-slug-cell',
  templateUrl: './slug-cell.component.html',
  styleUrls: ['./slug-cell.component.css']
})
export class SlugCellComponent implements OnInit {

  @Input() rows: Row[] = [];

  @Input() row: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", "").username, new Date(), new User(-1, "", "", "", "", "").username, new Date(), -1, new User(-1, "", "", "", "", "").username, new Date(), new Date(), "", "");

  @Input() rundown: Rundown = new Rundown(-1, new User(-1, "", "", "", "", "").username, new Date(), new User(-1, "", "", "", "", "").username, new Date(), "", new Date(), new Date(), false, "",
    []);


  // @Output() newSlug = new EventEmitter<string>();

  // @Output() newRows = new EventEmitter<Row[]>();

  constructor(public rundownService: RundownService) { }

  ngOnInit(): void {
  }


}
