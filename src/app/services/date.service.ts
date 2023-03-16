import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  addSecondsToDate(seconds: number, startDate: Date): number {
    let secondsMilli: number = seconds * 1000;
    let dateMilli: number = startDate.getTime();
    console.log("dateMilli: " + dateMilli);
    console.log("new Date(dateMilli): " + new Date(dateMilli));
    return dateMilli + secondsMilli;
  }

  getISODateString(date: Date): string {
    let dateString: string = "";
    let timeOffsetMilli: number = date.getTimezoneOffset() * 60 * 1000;
    let dateLocal: Date = new Date(date.getTime() - timeOffsetMilli);
    let dateSplit = dateLocal.toISOString().split("T");
    dateString = dateSplit[0];
    console.log("dateString: " + dateString)
    return dateString;
  }

  getISOTimeString(date: Date): string {
    let timeString: string = "";
    let timeOffsetMilli: number = date.getTimezoneOffset() * 60 * 1000;
    let dateLocal: Date = new Date(date.getTime() - timeOffsetMilli);
    let dateSplit = dateLocal.toISOString().split("T");
    timeString = dateSplit[1].slice(0, 8);
    console.log("timeString: " + timeString)
    return timeString;
  }

  setEndDate(date: Date, addSeconds: number): string {
    let endDate: string = "";
    let dateMilli: number = date.getTime();
    dateMilli += (addSeconds * 1000);
    endDate = this.getISODateString(new Date(dateMilli));
    console.log("endDate: " + endDate);
    return endDate;
  }

  setEndTime(date: Date, addSeconds: number): string {
    let endTime: string = "";
    let dateMilli: number = date.getTime();
    dateMilli += (addSeconds * 1000);
    endTime = this.getISOTimeString(new Date(dateMilli));
    console.log("endTime: " + endTime);
    return endTime;
  }

  updateEndDate(startDate: string, startTime: string, addSeconds: number): string {
    console.log("Inside updateEndDate");
    console.log("startDate: " + startDate);
    console.log("startTime: " + startTime);
    let endDate: string = "";
    let endTime: string = "";
    let date: Date = new Date(startDate + "T" + startTime + "Z");
    console.log("date.toISOString(): " + date.toISOString());
    let dateMilli: number = date.getTime();
    dateMilli += (addSeconds * 1000);
    console.log("new Date(dateMilli).toISOString(): " + new Date(dateMilli).toISOString());

    let dateSplit = new Date(dateMilli).toISOString().split("T");
    endDate = dateSplit[0];
    console.log("endDate: " + endDate)
    endTime = dateSplit[1].slice(0, 8);
    console.log("endTime: " + endTime);
    return endDate;
  }

  updateEndTime(startDate: string, startTime: string, addSeconds: number): string {
    console.log("Inside updateEndDate");
    console.log("startDate: " + startDate);
    console.log("startTime: " + startTime);
    let endDate: string = "";
    let endTime: string = "";
    let date: Date = new Date(startDate + "T" + startTime + "Z");
    console.log("date.toISOString(): " + date.toISOString());
    let dateMilli: number = date.getTime();
    dateMilli += (addSeconds * 1000);
    console.log("new Date(dateMilli).toISOString(): " + new Date(dateMilli).toISOString());

    let dateSplit = new Date(dateMilli).toISOString().split("T");
    endDate = dateSplit[0];
    console.log("endDate: " + endDate)
    endTime = dateSplit[1].slice(0, 8);
    console.log("endTime: " + endTime);
    return endTime;
  }
}
