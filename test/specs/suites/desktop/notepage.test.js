const { addStep } = require('@wdio/allure-reporter').default;
const { expect } = require('chai');

const common = require('../../base/common');
const navigate = require('../../base/navigation');
const Login = require('../../components/login');
const Note = require('../../components/note');


describe('Note page in BestNotes', () => {
    it('should be displayed properly as anon', () => {
        const note = new Note();
 
        addStep('Redirect to Note Page as anon');
        navigate.toNotesPage();
 
        addStep('Check if Note Form URL matches');
        expect(browser.getUrl(), 'Note Form URL is displayed as expected').to.equal(common.bestNotesLink + 'notes/1');

        addStep('Click Note with Lorem Ipsum');
        note.clickNoteButton();

        addStep('Check if Note has a correct URL, title and contains text');
        expect(browser.getUrl(), 'Note URL is displayed as expected').to.equal(common.bestNotesLink + 'note/1');
        expect(note.getTitleNote(), 'Title note should be displayed about Lorem ipsum').to.equal(`${common.titleNote}${common.loremIpsum}`);
        expect(note.getTextNote(), 'Text note should contained lorem ipsum text').to.contain(common.loremIpsum);
    })

    it('should be displayed properly as logged user', () => {
        addStep('Login to BestNotes');
        const login = new Login();
        navigate.toLoginPage();
        expect(login.isLoginFormDisplayed(), 'Login form should be displayed').to.be.true;
        login.fillCredentials(login.emailField, common.correctName);
        login.fillCredentials(login.passwordField, common.correctName);
        login.clickLoginButton();

        addStep('Choose first subject from the list by clicking Manage Button');
        const note = new Note();
        note.clickSubjectButton();
        
        addStep('Check if Topic Page is displayed and URL matches');
        expect(browser.getUrl(), 'Topic Page URL is displayed as expected').to.equal(common.bestNotesLink + 'topics_by_subject_id/1');

        addStep('Click topic Programowanie obiektowe');
        expect(note.getTextFromListButton(), 'Title of topic shoukd be equal Programowanie obiektowe').to.equal('Programowanie obiektowe');
        note.clickTopicButton();

        addStep('Click note Lorem ipsum 1');
        expect(note.getTextFromListButton(), 'Title of note shoukd be equal Lorem ipsum 1').to.equal('Lorem ipsum 1');
        note.clickNoteButton();

        addStep('Check if Note has a correct URL, title and contains text');
        expect(browser.getUrl(), 'Note URL is displayed as expected').to.equal(common.bestNotesLink + 'note/3');
        expect(note.getTitleNote(), 'Title note should be displayed about Lorem ipsum 1').to.equal(`${common.titleNote}Lorem ipsum 1`);
        expect(note.getTextNote(), 'Text note should contained Lorem ipsum 1 text').to.contain('Lorem ipsum 1');
    })
});

describe('User Notes in BestNotes', () => {
    it('Edit and Delete Button should be displayed in user notes', () => {
    addStep('Login to BestNotes');
        const login = new Login();
        navigate.toLoginPage();
        expect(login.isLoginFormDisplayed(), 'Login form should be displayed').to.be.true;
        login.fillCredentials(login.emailField, common.correctName);
        login.fillCredentials(login.passwordField, common.correctName);
        login.clickLoginButton();

        addStep('Choose first subject from the list by clicking Manage Button');
        const note = new Note();
        note.clickSubjectButton();
        
        addStep('Check if Topic Page is displayed and URL matches');
        expect(browser.getUrl(), 'Topic Page URL is displayed as expected').to.equal(common.bestNotesLink + 'topics_by_subject_id/1');

        addStep('Click topic Programowanie obiektowe');
        expect(note.getTextFromListButton(), 'Title of topic shoukd be equal Programowanie obiektowe').to.equal('Programowanie obiektowe');
        note.clickTopicButton();

        addStep('Click note Lorem ipsum');
        expect(note.getTextFromYourNotesListButton(), 'Title of note shoukd be equal Lorem ipsum').to.equal('Lorem ipsum');
        note.clickYourNoteButton();

        addStep('Check if Note has a correct URL, title and contains text');
        expect(browser.getUrl(), 'Note URL is displayed as expected').to.equal(common.bestNotesLink + 'note/1');
        expect(note.getTitleNote(), 'Title note should be displayed about Lorem ipsum').to.equal(`${common.titleNote}Lorem ipsum`);
        expect(note.getTextNote(), 'Text note should contained Lorem ipsum text').to.contain('Lorem ipsum');

        addStep('Check if Note has a edit and delete button');
        expect(note.isEditButtonDisplayed(), 'Edit button should be displayed').to.equal(true);
        expect(note.isDeleteButtonDisplayed(), 'Delete button should be displayed').to.equal(true);
    })
});