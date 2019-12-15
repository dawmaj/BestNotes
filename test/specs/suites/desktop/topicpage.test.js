const { addStep } = require('@wdio/allure-reporter').default;
const { expect } = require('chai');

const common = require('../../base/common');
const navigate = require('../../base/navigation');
const Login = require('../../components/login');
const Note = require('../../components/note');

describe('Topic page in BestNotes', () => {
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
        expect(note.getTextFromListButton(), 'Title of topic shoukd be equal Programowanie obiektowe').to.equal('Programowanie obiektowe')
    })
});