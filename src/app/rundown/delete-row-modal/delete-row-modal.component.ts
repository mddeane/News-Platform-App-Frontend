import { Rundown } from './../rundown.model';
import { RundownService } from './../rundown.service';
import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/alert/alert.service';
import { Row } from 'src/app/row/row.model';
import { Constants } from 'src/common/constants';

@Component({
  selector: 'app-delete-row-modal',
  templateUrl: './delete-row-modal.component.html',
  styleUrls: ['./delete-row-modal.component.css']
})
export class DeleteRowModalComponent implements OnInit {

  @Input() row: Row = Constants.defaultRow;
  @Input() rowIndex: number = 0;
  @Input() rundown: Rundown = Constants.defaultRundown;


  constructor(public alertService: AlertService, private rundownService: RundownService) { }

  ngOnInit(): void {
  }

  deleteRow() {
    this.rundownService.deleteRow(this.rowIndex, this.rundown.rows);
    this.rundownService.setRowSpans(this.rundown);
    !this.rundown.isLocked ? this.rundownService.setPageNumbers(this.rundown) : '';
  }

  // deleteRow(rowIndex, rundown.rows); rundownService.setRowSpans(rundown); !rundown.isLocked ? setPageNumbers(rundown) : '';"

}
function Output() {
  throw new Error('Function not implemented.');
}

