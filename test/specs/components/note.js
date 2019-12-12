const path = require('path');
const base = require('../base/base');

class Note {
    constructor() {
        this.subjectNavbar = '.navbar';
        this.manageButton = '.nolink';
        this.noteHeader = '.mt-4 > h1';
        this.noteText = 'h3';
        this.noteSelect = '.cProductsList > a:nth-child(1)';
        this.manageNotesButton = '.list-group-item > .btn-primary > a';
    }

    isNavbarDisplayed() {
        base.waitForDisplayed(this.subjectNavbar);
        return base.isDisplayed(this.subjectNavbar);
    }

    getTextFromNoteButton() {
        base.waitForDisplayed(this.noteSelect);
        return base.getAttribute(this.noteSelect, 'textContent', 'Text in note');
    }

    clickNoteButton() {
        base.click(this.noteSelect, 'Note button');
        return this;
    }

    clickManageButton() {
        base.click(this.manageNotesButton, 'Manage Note button');
        return this;
    }

    getTitleNote() {
        base.waitForDisplayed(this.noteHeader);
        return base.getAttribute(this.noteHeader, 'textContent', 'Header in note');
    }

    getTextNote() {
        base.waitForDisplayed(this.noteText);
        return base.getAttribute(this.noteText, 'textContent', 'Text in note');
    }
}
module.exports = Note;