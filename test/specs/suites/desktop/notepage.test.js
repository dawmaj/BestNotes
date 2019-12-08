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
 
        addStep('Check if Note Form is displayed and URL matches');
        expect(browser.getUrl(), 'Post details URL should include post ID').to.equal(common.bestNotesLink + 'notes/1');

        addStep('Click Note with Lorem Ipsum');
        note.clickNoteButton();

        addStep('Check if Note has a correct title and contains text')
        expect(note.getTitleNote(), 'Post details URL should include post ID').to.equal(`${common.titleNote}${common.loremIpsum}`);
        expect(note.getTextNote(), 'Post details URL should include post ID').to.contain(common.loremIpsum);
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
        expect(browser.getUrl(), 'Post details URL should include post ID').to.equal(common.bestNotesLink + 'notes/1');

        addStep('Click Note about Thomas Pesquet');
        expect(note.getTextFromNoteButton(), 'Post details URL should include post ID').to.equal('Notatka - Thomas Pesquet');
        note.clickNoteButton();

        addStep('Check if Note has a correct title and contains text')
        expect(note.getTitleNote(), 'Post details URL should include post ID').to.equal(`${common.titleNote}Notatka - Thomas Pesquet`);
        expect(note.getTextNote(), 'Post details URL should include post ID').to.contain('Thomas Pesquet');
    })
});