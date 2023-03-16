import { Rundown } from './../app/rundown/rundown.model';
import { Row } from "src/app/row/row.model";
import { User } from "src/app/user/user.model";

export class Constants {
    static blockLetters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    static defaultRundown: Rundown = new Rundown(-1, "", new Date(), "", new Date(), "", new Date(), new Date(), false, "", []);

    static defaultRow: Row = new Row(-1, "", "", "", "", "", "", "", "", 1, new User(-1, "", "", "", "", "").username, new Date(), new User(-1, "", "", "", "", "").username, new Date(), -1, new User(-1, "", "", "", "", "").username, new Date(), new Date(), "", "");

    // Default column widths
    // This will come from a database in future
    static defaultColWidthsJSON = `{
        "page": 50,
        "slug" : 200,
        "segment" : 150,
        "anchor" : 100,
        "estTime" : 100,
        "actTime" : 100,
        "writer" : 100,
        "backTime" : 110,
        "frontTime" : 110,
        "notes" : 200
        }`;

    static defaultColWidthsObj = JSON.parse(this.defaultColWidthsJSON);

    // heading default column widths
    // static pageColWidth: number = 50;
    // static slugColWidth: number = 200;
    // static segmentColWidth: number = 150;
    // static anchorColWidth: number = 100;
    // static estTimeColWidth: number = 100;
    // static actTimeColWidth: number = 100;
    // static writerColWidth: number = 100;
    // static backTimeColWidth: number = 110;
    // static frontTimeColWidth: number = 110;
    // static notesColWidth: number = 200;

    static defaultColWidths: number[] = [
        this.defaultColWidthsObj.page,
        this.defaultColWidthsObj.slug,
        this.defaultColWidthsObj.segment,
        this.defaultColWidthsObj.anchor,
        this.defaultColWidthsObj.estTime,
        this.defaultColWidthsObj.actTime,
        this.defaultColWidthsObj.writer,
        this.defaultColWidthsObj.backTime,
        this.defaultColWidthsObj.frontTime,
        this.defaultColWidthsObj.notes
    ];

    // Default column widths
    // This will come from a database in future
    static defaultColHeadingsJSON = `{
        "pageHeading": "Page",
        "slugHeading" : "Slug",
        "segmentHeading" : "Segment",
        "anchorHeading" : "Anchor",
        "estTimeHeading" : "Est Time",
        "actTimeHeading" : "Act Time",
        "writerHeading" : "Writer",
        "backTimeHeading" : "Back Time",
        "frontTimeHeading" : "Front Time",
        "notesHeading" : "Notes"
        }`;

    static defaultColHeadingsObj = JSON.parse(this.defaultColHeadingsJSON);

    static defaultHeadings: string[] = [
        this.defaultColHeadingsObj.pageHeading,
        this.defaultColHeadingsObj.slugHeading,
        this.defaultColHeadingsObj.segmentHeading,
        this.defaultColHeadingsObj.anchorHeading,
        this.defaultColHeadingsObj.estTimeHeading,
        this.defaultColHeadingsObj.actTimeHeading,
        this.defaultColHeadingsObj.writerHeading,
        this.defaultColHeadingsObj.backTimeHeading,
        this.defaultColHeadingsObj.frontTimeHeading,
        this.defaultColHeadingsObj.notesHeading
    ];

    static defaultSideBarLeftWidth: number = 200;
    // static defaultHeadings: string[] = ["Page", "Slug", "Segment", "Anchor", "Est Time", "Act Time", "Writer", "Back Time", "Front Time", "Notes"];

    static defaultUser: User = new User(0, "", "", "", "", "reader");

    static guestUser: User = new User(0, "guest", "guest", "guest", "guest", "guest");

    static weekdays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    static showTemplates: Object[] = [
        {
            templateName: "5pm News",
            startTime: "17:00:00",
            endTime: "17:28:00"
        },
        {
            templateName: "6pm News",
            startTime: "18:00:00",
            endTime: "18:28:00"
        },
        {
            templateName: "10pm News",
            startTime: "22:00:00",
            endTime: "22:28:00"
        }

    ]
}