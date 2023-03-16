import { User } from "../user/user.model";

export class Row {
    rowId: number = 0;
    pageNumber: string = "";
    storySlug: string = "";
    segment: string = "";
    anchor: string = "";
    estTime: string = "";
    actTime: string = "";
    body: string = "";
    status: string = "";
    slugRowSpan: number = -1;
    createdBy: string = "";
    createdAt: Date = new Date();
    modifiedBy: string = "";
    modifiedAt: Date = new Date();
    storyId: number = -1;
    writer: string = "";
    backTime: Date = new Date();
    frontTime: Date = new Date();
    notes: string = "";
    rowType: string = "";


    constructor(rowId: number, pageNumber: string, storySlug: string, segment: string, anchor: string, estTime: string, actTime: string, body: string, status: string, slugRowSpan: number, createdBy: string, createdAt: Date, modifiedBy: string, modifiedAt: Date, storyId: number, writer: string, backTime: Date, frontTime: Date, notes: string, rowType: string) {
        this.rowId = rowId;
        this.pageNumber = pageNumber;
        this.storySlug = storySlug;
        this.segment = segment;
        this.anchor = anchor;
        this.estTime = estTime;
        this.actTime = actTime;
        this.body = body;
        this.status = status;
        this.slugRowSpan = slugRowSpan;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.modifiedBy = modifiedBy;
        this.modifiedAt = modifiedAt;
        this.storyId = storyId;
        this.writer = writer;
        this.backTime = backTime;
        this.frontTime = frontTime;
        this.notes = notes;
        this.rowType = rowType;
    }
}