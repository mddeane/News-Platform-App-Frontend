import { Injectable } from '@angular/core';
import { Alert } from './alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alerts: Alert[] = [];
  ALERT_DEFAULT_DURATION: number = 3000;
  ALERT_DEFAULT_TYPE: string = "dark";
  alertCounter: number = 1;
  hasAlerts: boolean = false;

  constructor() { }

  showAlert(alertMessage: string, alertType: string = this.ALERT_DEFAULT_TYPE, alertDuration: number = this.ALERT_DEFAULT_DURATION): void {
    let alertCreatedMilli: number = Date.now();
    let alert: Alert = new Alert(alertMessage, new Date(alertCreatedMilli), alertType, alertDuration);

    this.alerts.push(alert);
    this.hasAlerts = true;
    setTimeout(() => {
      this.alerts.shift()?.alertText;
      this.hasAlerts = false;
    }, alertDuration);
    this.alertCounter++;
  }

  removeAlert(alertDiv: HTMLElement): void {
    alertDiv.style.display = "none";
  }

}
