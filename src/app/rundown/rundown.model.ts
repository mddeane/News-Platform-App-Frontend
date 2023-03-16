import { Row } from "../row/row.model";
import { User } from "../user/user.model";

export class Rundown {
    id: number;
    createdBy: string;
    createdAt: Date;
    modifiedBy: string;
    modifiedAt: Date;
    title: string;
    startTime: Date;
    endTime: Date;
    isLocked: boolean;
    status: string; // activated, deactivated, archived
    rows: Row[];

    constructor(id: number, createdBy: string, createdAt: Date, modifiedBy: string, modifiedAt: Date, title: string, startTime: Date, endTime: Date, isLocked: boolean, status: string, rows: Row[]) {
        this.id = id;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.modifiedBy = modifiedBy;
        this.modifiedAt = modifiedAt;
        this.title = title;
        this.startTime = startTime;
        this.endTime = endTime;
        this.isLocked = isLocked;
        this.status = status;
        this.rows = rows;
    }
}