import { AlertService } from './../../alert/alert.service';
import { TestData } from './../../../common/testData';
import { AddRundownService } from './add-rundown.service';
import { Constants } from 'src/common/constants';
import { Rundown } from './../rundown.model';
import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/services/date.service';
import { FormsModule } from '@angular/forms';
import { Row } from 'src/app/row/row.model';

@Component({
  selector: 'app-add-rundown',
  templateUrl: './add-rundown.component.html',
  styleUrls: ['./add-rundown.component.css']
})
export class AddRundownComponent implements OnInit {

  currentDate: Date = new Date();
  currentDateString: string = "";
  startDate: string = "";
  endDate: string = "";
  startTime: string = "";
  endTime: string = "";
  rundownStartDate: Date = new Date();
  rundownEndDate: Date = new Date();
  startDatePlusTime: Date = new Date(this.startDate + "T" + this.startTime);
  endDatePlusTime: Date = new Date(this.endDate + "T" + this.endTime);
  showTemplates: any[] = Constants.showTemplates;

  createdBy: string = "";
  createdAt: Date = new Date();
  modifiedBy: string = "";
  modifiedAt: Date = new Date();
  title: string = "";
  start: string = "";
  end: string = "";
  isLocked: boolean = false;
  status: string = "";
  rows: Row[] = [];

  isActive: boolean = false;

  // rundown: Rundown = new Rundown(0, this.createdBy, this.createdAt, this.modifiedBy, this.modifiedAt, this.title, new Date(), new Date(), this.isLocked, this.status, this.rows);

  public rundown: Rundown = new Rundown(0, this.title, new Date(), "", new Date(), "", new Date(), new Date(), false, "", []);


  // testRundown: Rundown = TestData.testRundown;
  testRundown: Rundown = new Rundown(0, 'guest', new Date(), 'guest', new Date(), this.title, new Date(this.start), new Date(this.end), this.isLocked, this.status, this.rows);

  constructor(public dateService: DateService, private addRundownService: AddRundownService, public alertService: AlertService) { }

  ngOnInit(): void {
    // set up default values
    this.startDate = this.dateService.getISODateString(this.currentDate);
    // console.log("this.startDate: " + this.startDate);
    this.startTime = this.dateService.getISOTimeString(this.currentDate);
    console.log("this.startTime: " + this.startTime);
    this.endDate = this.dateService.setEndDate(this.currentDate, (30 * 60));  // 30 * 60 is 30 minutes in seconds
    this.endTime = this.dateService.setEndTime(this.currentDate, (30 * 60));

  }

  updateEndDateAndTime(startDate: string, startTime: string, addSeconds: number) {
    this.endDate = this.dateService.updateEndDate(startDate, startTime, addSeconds);
    this.endTime = this.dateService.updateEndTime(startDate, startTime, addSeconds);
  }

  updateTitle(templateName: string, startDate: string): string {
    let title: string = "";
    let date: Date = new Date(startDate);
    let weekday: string = Constants.weekdays[date.getDay()];
    title = templateName + " " + weekday + " " + startDate;
    return title;
  }

  updateTemplateStart(templateName: string): string {
    let startTime: string = "";
    let templates: any[] = Constants.showTemplates;
    for (let i = 0; i < templates.length; i++) {
      templates[i].templateName == templateName ? startTime = templates[i].startTime : "";
    }
    console.log("Start Time -> " + startTime);
    return startTime;
  }

  updateTemplateEnd(templateName: string): string {
    let endTime: string = "";
    let templates: any[] = Constants.showTemplates;
    for (let i = 0; i < templates.length; i++) {
      templates[i].templateName == templateName ? endTime = templates[i].endTime : "";
    }
    console.log("Start Time -> " + endTime);
    return endTime;
  }

  buildRundown() {
    this.rundown.createdBy = this.createdBy;
    this.rundown.createdAt = new Date();
    this.rundown.modifiedBy = this.modifiedBy;
    this.rundown.modifiedAt = new Date();
    this.rundown.title = this.title;
    this.rundown.startTime = new Date(this.startDate + "T" + this.startTime);
    this.rundown.endTime = new Date(this.endDate + "T" + this.endTime);
    this.rundown.isLocked = this.isLocked;
    this.rundown.status = this.isActive ? 'activated' : 'deactivated';
    // this.rundown.rows = this.rows;
    this.rundown.rows = TestData.testRows;


  }

  addRundown(): void {

    this.buildRundown();
    this.addRundownService.addRundown(this.rundown).subscribe(
      data => {
        console.log(data)
        this.alertService.showAlert(data.title + " successfully created.", "success");
      },
      error => console.log(error)
    );

  }

}
