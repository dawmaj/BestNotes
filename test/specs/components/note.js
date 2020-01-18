const path = require('path');
const base = require('../base/base');

class Note {
    constructor() {
        this.subjectNavbar = '.navbar';
        this.manageButton = '.nolink';
        this.noteHeader = '.mt-4 > h1';
        this.frameNote = '#mce_0_ifr';
        this.noteText = 'body';
        this.allSubjects = '#list_all > a:last-child';
        this.noteSelectButton = '#all_notes_list > a:nth-child(1)';
        this.subjectButton = '#Programowanie1';
        this.topicButton = '.cProductsList > a:nth-child(1)';
        this.lastTopicButton = '.cProductsList > a:last-child';
        this.yourNotesButton = '#your_notes_list > a:nth-child(1)';
        this.deleteNoteButton = '#delete_note';
        this.editNoteButton = '#edit_note';
    }

    isNavbarDisplayed() {
        base.waitForDisplayed(this.subjectNavbar);
        return base.isDisplayed(this.subjectNavbar);
    }

    getTextFromListButton() {
        base.waitForDisplayed(this.topicButton);
        return base.getAttribute(this.topicButton, 'textContent', 'Text in topic');
    }

    getTextFromYourNotesListButton() {
        base.waitForDisplayed(this.yourNotesButton);
        return base.getAttribute(this.yourNotesButton, 'textContent', 'Text in topic');
    }

    getTextFromNoteButton() {
        base.waitForDisplayed(this.noteSelectButton);
        return base.getAttribute(this.noteSelectButton, 'textContent', 'Text in note');
    }

    getTextFromSubject() {
        base.waitForDisplayed(this.allSubjects);
        return base.getAttribute(this.allSubjects, 'textContent', 'Text in note');
    }

    clickLastNoteButton() {
        base.click(this.allSubjects, 'Note button');
        return this;
    }

    clickNoteButton() {
        base.click(this.noteSelectButton, 'Note button');
        return this;
    }

    clickYourNoteButton() {
        base.click(this.yourNotesButton, 'Note button');
        return this;
    }

    clickSubjectButton() {
        base.click(this.subjectButton, 'Subject button');
        return this;
    }

    clickTopicButton() {
        base.click(this.topicButton, 'Topic button');
        return this;
    }

    clickLastTopicButton() {
        base.click(this.lastTopicButton, 'Topic button');
        return this;
    }

    getTitleNote() {
        base.waitForDisplayed(this.noteHeader);
        return base.getAttribute(this.noteHeader, 'textContent', 'Header in note');
    }

    getTextNote() {
        base.waitForDisplayed($(this.frameNote));
        browser.switchToFrame($(this.frameNote));
        //base.waitForDisplayed(this.noteText);
        return base.getAttribute(this.noteText, 'textContent', 'Text in note');
    }

    isNoteDisplayed() {
        base.waitForDisplayed(this.noteText);
        return base.isDisplayed(this.noteText);
    }

    isEditButtonDisplayed() {
        base.waitForDisplayed(this.editNoteButton);
        return base.isDisplayed(this.editNoteButton);
    }

    isDeleteButtonDisplayed() {
        base.waitForDisplayed(this.deleteNoteButton);
        return base.isDisplayed(this.deleteNoteButton);
    }

}
module.exports = Note;