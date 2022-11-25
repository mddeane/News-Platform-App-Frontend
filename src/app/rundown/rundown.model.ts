import { Row } from "../row/row.model";
import { User } from "../user/user.model";

export class Rundown {
    id: number;
    createdBy: User;
    createdAt: Date;
    modifiedBy: User;
    modifiedAt: Date;
    title: string;
    startTime: Date;
    endTIme: Date;
    status: string;
    rows: Row[];

    constructor(id: number, createdBy: User, createdAt: Date, modifiedBy: User, modifiedAt: Date, title: string, startTime: Date, endTIme: Date, status: string, rows: Row[]) {
        this.id = id;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.modifiedBy = modifiedBy;
        this.modifiedAt = modifiedAt;
        this.title = title;
        this.startTime = startTime;
        this.endTIme = endTIme;
        this.status = status;
        this.rows = rows;
    }
}