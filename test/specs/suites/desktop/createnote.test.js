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
        const date = `${common.noteName}`;
        addnote.clickFormattingButton(3);
        expect(addnote.isFormattingButtonEnabled(3), 'Bold button is enabled').to.be.true;
    })

    it('italic styling is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if Italic button is enabled');
        const date = `${common.noteName}`;
        addnote.clickFormattingButton(4);
        expect(addnote.isFormattingButtonEnabled(4), 'Italic button is enabled').to.be.true;
    })

    it('right align styling is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if right align button is enabled');
        const date = `${common.noteName}`;
        addnote.clickFormattingButton(5);
        expect(addnote.isFormattingButtonEnabled(5), 'Right align button is enabled').to.be.true;
    })

    it('center align styling is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if center align button is enabled');
        const date = `${common.noteName}`;
        addnote.clickFormattingButton(6);
        expect(addnote.isFormattingButtonEnabled(6), 'Center align button is enabled').to.be.true;
    })

    it('left align styling is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if left align button is enabled');
        const date = `${common.noteName}`;
        addnote.clickFormattingButton(7);
        expect(addnote.isFormattingButtonEnabled(7), 'Left align button is enabled').to.be.true;
    })

    it('Insert/edit link is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if insert/edit link option is enabled');
        const date = `${common.noteName}`;
        addnote.clickFormattingButton(8);
        expect(addnote.isFormattingButtonEnabled(8), 'Edit link button is disabled').to.be.false;

        addStep('Check if box is displayed for editing link');
        expect(addnote.isBoxDisplayed(), 'Box to edit link is displayed').to.be.true;
        expect(addnote.getBoxHeaderText(), 'Header of box are about editing link').to.be.equal('Insert/Edit Link');
    })

    it('Insert/edit image is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if insert/edit image option is enabled');
        const date = `${common.noteName}`;
        addnote.clickFormattingButton(9);
        expect(addnote.isFormattingButtonEnabled(9), 'Edit image button is disabled').to.be.false;

        addStep('Check if box is displayed for editing image');
        expect(addnote.isBoxDisplayed(), 'Box to edit image is displayed').to.be.true;
        expect(addnote.getBoxHeaderText(), 'Header of box are about editing image').to.be.equal('Insert/Edit Image');
    })

    it('Insert/edit media is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if insert/edit media option is enabled');
        const date = `${common.noteName}`;
        addnote.clickFormattingButton(10);
        expect(addnote.isFormattingButtonEnabled(10), 'Edit media button is disabled').to.be.false;

        addStep('Check if box is displayed for editing media');
        expect(addnote.isBoxDisplayed(), 'Box to edit media is displayed').to.be.true;
        expect(addnote.getBoxHeaderText(), 'Header of box are about editing media').to.be.equal('Insert/Edit Media');
    })

    it('Insert/edit code sample is enabled', () => {
        addStep('Redirect to Create Note Page as logged user');
        const addnote = navigate.toAddNotePage('user');
        
        addStep('Check if insert/edit code sample option is enabled');
        const date = `${common.noteName}`;
        addnote.clickFormattingButton(11);
        expect(addnote.isFormattingButtonEnabled(11), 'Edit code sample button is disabled').to.be.false;

        addStep('Check if box is displayed for editing code sample');
        expect(addnote.isBoxDisplayed(), 'Box to edit code sample is displayed').to.be.true;
        expect(addnote.getBoxHeaderText(), 'Header of box are about editing code sample').to.be.equal('Insert/Edit Code Sample');
    })
});
