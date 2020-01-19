const { addStep } = require('@wdio/allure-reporter').default;
const { expect } = require('chai');

const common = require('../../base/common');
const navigate = require('../../base/navigation');
const Login = require('../../components/login');
const Note = require('../../components/note');
const AddNote = require('../../components/add-note');

describe('Creation note', () => {
    it('as logged user', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Add Note to the Topic');
        const date = `${common.noteName}`
        addnote.addNameToNote(`${common.topic}${date}`).addSubjectToNote(common.subject).addTopicToNote(date).addNote(common.ecceIpsum);
        addnote.clickAddNoteButton();

        addStep('Verify if the topic is created');
        const note = new Note();
        expect(note.getTextFromSubject(), 'Topic should be Testy automatyczne').to.equal(common.subject);
        note.clickLastNoteButton();

        addStep('Select last added note');
        note.clickLastTopicButton();
        note.clickYourNoteButton();

        addStep('Verify if Note contains text and subject');
        expect(note.getTitleNote(), 'Title note should be displayed as the same as added').to.equal(`${common.titleNote}${common.topic}${date}`);
        expect(note.isNoteDisplayed(), 'Note field should be displayed').to.be.true;
        expect(note.getTextNote(), 'Text note should contain ecce ipsum text').to.equal(common.ecceIpsum);
    })
});

describe('Formatting buttons', () => {
    it('bold styling is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if bold button is enabled');
        const date = `${common.noteName}`
        addnote.clickFormattingButton(3);
        expect(addnote.isFormattingButtonEnabled(3), 'Bold button is enabled').to.be.true;
    })

    it('bold styling is disabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if bold button is disabled');
        const date = `${common.noteName}`
        addnote.clickFormattingButton(3).clickFormattingButton(3);
        expect(addnote.isFormattingButtonEnabled(3), 'Bold button is disabled').to.be.false;
    })

    it('italic styling is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if Italic button is enabled');
        const date = `${common.noteName}`
        addnote.clickFormattingButton(4);
        expect(addnote.isFormattingButtonEnabled(4), 'Italic button is enabled').to.be.true;
    })

    it('italic styling is disabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if Italic button is disabled');
        const date = `${common.noteName}`
        addnote.clickFormattingButton(4).clickFormattingButton(4);
        expect(addnote.isFormattingButtonEnabled(4), 'Italic button is disabled').to.be.false;
    })
});
