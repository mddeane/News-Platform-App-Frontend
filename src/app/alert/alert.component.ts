import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './alert.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Alert } from './alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];
  displayedAlerts: number = 0;
  hasAlerts: boolean = false;

  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
  }


}
