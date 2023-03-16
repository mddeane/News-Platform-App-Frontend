import { Constants } from './../../../common/constants';
import { Component, Input, OnInit } from '@angular/core';
import { Row } from 'src/app/row/row.model';
import { User } from 'src/app/user/user.model';
import { Rundown } from '../rundown.model';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-delete-rundown-modal',
  templateUrl: './delete-rundown-modal.component.html',
  styleUrls: ['./delete-rundown-modal.component.css']
})
export class DeleteRundownModalComponent implements OnInit {

  @Input() rundown: Rundown = Constants.defaultRundown;


  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
  }

}
