import { AlertService } from 'src/app/alert/alert.service';
import { Constants } from 'src/common/constants';
import { Rundown } from './../rundown.model';
import { TodayRundownsService } from './today-rundowns.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-rundowns',
  templateUrl: './today-rundowns.component.html',
  styleUrls: ['./today-rundowns.component.css']
})
export class TodayRundownsComponent implements OnInit {

  @Input() todayRundowns: Rundown[] = [];

  constructor(private todayRundownsService: TodayRundownsService, public alertService: AlertService) { }

  // todayRundowns: Rundown[] = this.data;

  selectAll: boolean = false;
  checkedRundowns: any[] = [];
  checkedRundownsString: string = "";
  isChecked: boolean = false;

  ngOnInit(): void {
  }

  addRundownToArray(index: number, checkStatus: boolean) {
    this.log("Inside addRundownToArray");
    let hasIndex: boolean = false;
    for (let i = 0; i < this.checkedRundowns.length; i++) {
      if (this.checkedRundowns[i].index == index) {
        this.checkedRundowns[i]['checkStatus'] = checkStatus;
        hasIndex = true;
      }
    }
    if (!hasIndex) {
      this.checkedRundowns.push({ index: index, checkStatus: checkStatus });
    }
    this.log("this.checkedRundowns -> " + JSON.stringify(this.checkedRundowns))
  }

  log(message: any) {
    console.log(message);
  }

  // findAllRundowns() {

  //   this.todayRundownsService.findAllRundowns()
  //     .subscribe(data => {
  //       this.todayRundowns = data;
  //       console.log(data);
  //     },
  //       error => console.log(error))
  // }

}
