const { addStep } = require('@wdio/allure-reporter').default;
const { expect } = require('chai');

const common = require('../../base/common');
const navigate = require('../../base/navigation');
const Login = require('../../components/login');
const Note = require('../../components/note');


describe('Note page in BestNotes', () => {
    it('should be displayed properly as anon', () => {
        addStep('Redirect to Note Page as anon');
        const note = navigate.toNotesPage('anon');

        addStep('Check if Note Form URL matches');
        expect(browser.getUrl(), 'Note Form URL is displayed as expected').to.equal(common.bestNotesLink + 'notes/9');

        addStep('Click Note with Va Banque cite');
        note.clickNoteButton();

        addStep('Check if Note has a correct URL, title and contains text');
        expect(browser.getUrl(), 'Note URL is displayed as expected').to.equal(common.bestNotesLink + 'note/12');
        expect(note.getTitleNote(), 'Title note should be displayed about Va Banque').to.equal(`${common.titleNote}${common.loremIpsum}`);
        expect(note.isNoteDisplayed(), 'Note field should be displayed').to.be.true;
        //expect(note.getTextNote(), 'Text note should contained Va Banque text').to.contain('Va Banque');
    })

    it('should be displayed properly as logged user', () => {
        addStep('Redirect to Topic Page as logged user');
        const topic = navigate.toTopicPage('user');
        topic.clickSubjectButton();
        
        addStep('Check if Topic Page is displayed and URL matches');
        expect(browser.getUrl(), 'Topic Page URL is displayed as expected').to.equal(common.bestNotesLink + 'topics_by_subject_id/9');

        addStep('Click topic Podstawowe informacje');
        expect(topic.getTextFromListButton(), 'Title of topic shoukd be equal Podstawowe informacje').to.equal('Podstawowe informacje');
        topic.clickTopicButton();

        addStep('Click note Nowy program Va Banque w TV');
        expect(topic.getTextFromListButton(), 'Title of note shoukd be equal Nowy program Va Banque w TV').to.equal('Nowy program Va Banque w TV');
        topic.clickNoteButton();

        addStep('Check if Note has a correct URL, title and contains text');
        expect(browser.getUrl(), 'Note URL is displayed as expected').to.equal(common.bestNotesLink + 'note/12');
        expect(topic.getTitleNote(), 'Title note should be displayed about Nowy program Va Banque w TV').to.equal(`${common.titleNote}Nowy program Va Banque w TV`);
        expect(topic.isNoteDisplayed(), 'Note field should be displayed').to.be.true;
        //expect(topic.getTextNote(), 'Text note should contained Va Banque in text').to.contain('Va Banque');
    })
});


//commented till adding notes will be implemented

/* describe('User Notes in BestNotes', () => {
    it('Edit and Delete Button should be displayed in user notes', () => {
        addStep('Redirect to Topic Page as anon');
        const topic = navigate.toTopicPage();
        topic.clickSubjectButton();
        
        addStep('Check if Topic Page is displayed and URL matches');
        expect(browser.getUrl(), 'Topic Page URL is displayed as expected').to.equal(common.bestNotesLink + 'topics_by_subject_id/1');

        addStep('Click topic Programowanie obiektowe');
        expect(topic.getTextFromListButton(), 'Title of topic shoukd be equal Programowanie obiektowe').to.equal('Programowanie obiektowe');
        topic.clickTopicButton();

        addStep('Click note Lorem ipsum');
        expect(topic.getTextFromYourNotesListButton(), 'Title of note shoukd be equal Lorem ipsum').to.equal('Lorem ipsum');
        topic.clickYourNoteButton();

        addStep('Check if Note has a correct URL, title and contains text');
        expect(browser.getUrl(), 'Note URL is displayed as expected').to.equal(common.bestNotesLink + 'note/1');
        expect(topic.getTitleNote(), 'Title note should be displayed about Lorem ipsum').to.equal(`${common.titleNote}Lorem ipsum`);
        expect(topic.getTextNote(), 'Text note should contained Lorem ipsum text').to.contain('Lorem ipsum');

        addStep('Check if Note has a edit and delete button');
        expect(topic.isEditButtonDisplayed(), 'Edit button should be displayed').to.equal(true);
        expect(topic.isDeleteButtonDisplayed(), 'Delete button should be displayed').to.equal(true);
    })
});
*/