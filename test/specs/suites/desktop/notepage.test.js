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

        addStep('Check if Note has a correct URL, title and contains text')
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
        note.clickManageButton();

        addStep('Redirect to Note Page as logged user');
        navigate.toNotesPage();

        addStep('Check if Note Form is displayed and URL matches');
        expect(browser.getUrl(), 'Note Form URL is displayed as expected').to.equal(common.bestNotesLink + 'notes/1');

        addStep('Click Note about Thomas Pesquet');
        expect(note.getTextFromNoteButton(), 'Title of note shoukd be equal as Notatka - Thomas Pesquet').to.equal('Notatka - Thomas Pesquet');
        note.clickNoteButton();

        addStep('Check if Note has a correct URL, title and contains text')
        expect(browser.getUrl(), 'Note URL is displayed as expected').to.equal(common.bestNotesLink + 'note/3');
        expect(note.getTitleNote(), 'Title note should be displayed about Thomas Pasquet').to.equal(`${common.titleNote}Notatka - Thomas Pesquet`);
        expect(note.getTextNote(), 'Text note should contained Thomas Pesquet text').to.contain('Thomas Pesquet');
    })
});