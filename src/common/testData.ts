import { Row } from "src/app/row/row.model";
import { Rundown } from "src/app/rundown/rundown.model";
import { User } from "src/app/user/user.model";

export class TestData {
    static jdoe: User = new User(1, "John", "Doe", "jdoe", "password", "admin");
    static jadoe: User = new User(2, "Jane", "Doe", "jadoe", "password", "producer");
    static mdavis: User = new User(3, "Miles", "Davis", "mdavis", "password", "writer");

    static testRows: Row[] = [
        new Row(1, "", "Story Slug 1", "INTRO VO", "AB CD", "0:30", "0:30", "Contains words 1", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "These are notes.", "story"),

        new Row(2, "", "Story Slug 2", "INTRO PKG", "AB CD", "0:45", "0:45", "", "unapproved", 1, this.jadoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", "story"),

        new Row(3, "", "Story Slug 3", "INTRO PKG", "CD", "1:30", "1:30", "Contains words 3", "unapproved", 1, this.jadoe.username, new Date(), this.jadoe.username, new Date(), -1, this.jadoe.username, new Date(), new Date(), "", "story"),

        new Row(4, "", "Story Slug Same", "INTRO", "AB", "1:00", "1:00", "Contains words 4", "unapproved", 1, this.mdavis.username, new Date(), this.mdavis.username, new Date(), -1, this.mdavis.username, new Date(), new Date(), "", "story"),

        new Row(5, "", "Story Slug Same", "PKG", "", ":30", ":30", "Contains words 5", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", "story"),

        new Row(6, "", "Story Slug Same", "TAG", "AB", ":35", ":35", "Contains words 6", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", "story"),

        new Row(7, "", "Story Slug 7", "INTRO PKG", "AB", "2:00", "2:00", "Contains words 7", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", "story"),

        new Row(8, "", "BREAK", "", "", "3:00", "", "", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", "break"),

        new Row(9, "", "BREAK", "", "", "3:00", "", "", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", "break"),
    ];

    static testRundowns: Rundown[] = [
        new Rundown(1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), "5pm News", new Date(), new Date(), false, "deactivated",
            [new Row(1, "", "Story Slug 1", "INTRO VO", "AB CD", "0:30", "0:30", "Contains words 1", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "These are notes.", ""),

            new Row(2, "", "Story Slug 2", "INTRO PKG", "AB CD", "0:45", "0:45", "", "unapproved", 1, this.jadoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", ""),

            new Row(8, "", "BREAK", "", "", "3:00", "", "", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", "break"),

            new Row(3, "", "Story Slug 3", "INTRO PKG", "CD", "1:30", "1:30", "Contains words 3", "unapproved", 1, this.jadoe.username, new Date(), this.jadoe.username, new Date(), -1, this.jadoe.username, new Date(), new Date(), "", "")
            ]),

        new Rundown(2, this.jdoe.username, new Date(), this.jdoe.username, new Date(), "6pm News", new Date(), new Date(), false, "deactivated",
            [new Row(4, "", "Story Slug Same", "INTRO", "AB", "", "", "Contains words 4", "unapproved", 1, this.mdavis.username, new Date(), this.mdavis.username, new Date(), -1, this.mdavis.username, new Date(), new Date(), "", ""),

            new Row(5, "", "Story Slug Same", "PKG", "", "", "", "Contains words 5", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", ""),

            new Row(8, "", "BREAK", "", "", "3:00", "", "", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", "break"),

            new Row(3, "", "Story Slug 3", "INTRO PKG", "CD", "1:30", "1:30", "Contains words 3", "unapproved", 1, this.jadoe.username, new Date(), this.jadoe.username, new Date(), -1, this.jadoe.username, new Date(), new Date(), "", ""),
            ]),

        new Rundown(3, this.jdoe.username, new Date(), this.jdoe.username, new Date(), "10pm News", new Date(), new Date(), false, "deactivated",
            [new Row(6, "", "Story Slug Same", "TAG", "AB", "", "", "Contains words 6", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", ""),

            new Row(7, "", "Story Slug 7", "INTRO PKG", "AB", "", "", "Contains words 7", "unapproved", 1, this.jdoe.username, new Date(), this.jdoe.username, new Date(), -1, this.jdoe.username, new Date(), new Date(), "", "")
            ])
    ];

    static testRundown: Rundown = new Rundown(0, this.jdoe.username, new Date(), this.jdoe.username, new Date(), "10pm News", new Date(), new Date(), false, "deactivated",
        []);
}
