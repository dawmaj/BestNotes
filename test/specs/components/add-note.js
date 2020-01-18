const path = require('path');
const base = require('../base/base');

class AddNote {
    constructor() {
        this.noteName = '#name';
        this.noteSubject = '#subject';
        this.noteTopic = '#topic';
        this.noteField = '#tinymce';
        this.frameNote = '#content_ifr';
        this.addNoteButton = '.mt-1';
    }

    addNameToNote(text) {
        base.fillIn(this.noteName, text, 'Name of note');
        return this;
    }

    addSubjectToNote(text) {
        base.fillIn(this.noteSubject, text, 'Subject of note');
        return this;
    }

    addTopicToNote(text) {
        base.fillIn(this.noteTopic, text, 'Subject of note');
        return this;
    }

    addNote(text) {
        browser.switchToFrame($(this.frameNote));
        base.fillIn(this.noteField, text, 'Note');
        return this;
    }

    clickAddNoteButton() {
        browser.switchToFrame(null);
        base.click(this.addNoteButton, 'Subject button');
        return this;
    }
}
module.exports = AddNote;