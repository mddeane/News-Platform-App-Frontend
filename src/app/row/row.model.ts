export class Row {
    rowId: number = 0;
    pageNumber: string = "";
    storySlug: string = "";
    segment: string = "";
    anchor: string = "";
    body: string = "";
    status: string = "";
    slugRowSpan: number = -1;

    constructor(rowId: number, pageNumber: string, storySlug: string, segment: string, anchor: string, body: string, status: string, slugRowSpan: number) {
        this.rowId = rowId;
        this.pageNumber = pageNumber;
        this.storySlug = storySlug;
        this.segment = segment;
        this.anchor = anchor;
        this.body = body;
        this.status = status;
        this.slugRowSpan = slugRowSpan;
    }
}