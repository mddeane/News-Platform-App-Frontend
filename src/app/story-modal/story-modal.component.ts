import { RundownService } from './../rundown/rundown.service';
import { Component, Input, OnInit } from '@angular/core';
import { Row } from '../row/row.model';
import { User } from '../user/user.model';

@Component({
  selector: 'app-story-modal',
  templateUrl: './story-modal.component.html',
  styleUrls: ['./story-modal.component.css']
})
export class StoryModalComponent implements OnInit {

  @Input() row: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", ""), new Date(), new User(-1, "", "", "", "", ""), new Date(), -1, new User(-1, "", "", "", "", ""), new Date(), new Date(), "", "");

  constructor(public rundownService: RundownService) { }

  ngOnInit(): void {
  }

}
