export class AlertBox {
    id: number;
    alertType: string;
    message: string;

    constructor(id: number, alertType: string, message: string) {
        this.id = id;
        this.alertType = alertType;
        this.message = message;
    }



}