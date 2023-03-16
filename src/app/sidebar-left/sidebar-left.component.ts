import { TodayRundownsService } from './../rundown/today-rundowns/today-rundowns.service';
import { RundownService } from './../rundown/rundown.service';
import { Component, OnInit } from '@angular/core';
import { Rundown } from '../rundown/rundown.model';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {

  sidebarLeftWidth: number = 399;
  rundownDataTemp: Rundown[] = [];
  rundownData: Rundown[] = [];
  constructor(public todayRundownsService: TodayRundownsService) { }

  ngOnInit(): void {
    // this.findAllRundowns();
  }

  findAllRundowns() {
    console.log("Inside findAllRundowns");
    this.todayRundownsService.findAllRundowns()
      .subscribe(data => {
        console.log(data);
        this.rundownData = data.sort( // sort by start time ascending
          function (a, b) {
            const startA = a.startTime;
            const startB = b.startTime;
            if (startA < startB) {
              return -1;
            }
            if (startA > startB) {
              return 1;
            }
            return 0;
          }
        );
      },
        error => console.log(error))
  }
}
