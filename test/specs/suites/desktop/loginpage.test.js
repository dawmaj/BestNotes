const { addStep } = require('@wdio/allure-reporter').default;
const { expect } = require('chai');

const common = require('../../base/common');
const navigate = require('../../base/navigation');
const Login = require('../../components/login');
const Note = require('../../components/note');

describe('Login page in BestNotes', () => {
   it('should be displayed', () => {
       const login = new Login();

       addStep('Redirect to Login Page');
       navigate.toLoginPage();

       addStep('Check if Login Form is displayed and URL ');
       expect(browser.getUrl(), 'Login page URL is the same as expected').to.equal(common.bestNotesLink + 'accounts/login/');
       expect(login.isLoginFormDisplayed(), 'Login form should be displayed').to.be.true;
   })

   it('shouldnt logged user with incorrect credentials', () => {
    const login = new Login();

    addStep('Redirect to Login Page');
    navigate.toLoginPage();

    addStep('Check if Login Form is displayed');
    expect(login.isLoginFormDisplayed(), 'Login form should be displayed').to.be.true;

    addStep('Fill credentials and try to login');
    login.fillCredentials(login.emailField, common.testName);
    login.fillCredentials(login.passwordField, common.testName);
    login.clickLoginButton();

    addStep('Check if the error message is displayed');
    expect(login.getErrorMessage(), 'Message about wrong credentials should be displayed').to.equal(common.errorLoginMessage);
})

it('should logged user with correct credentials', () => {
    const login = new Login();

    addStep('Redirect to Login Page');
    navigate.toLoginPage();

    addStep('Check if Login Form is displayed');
    expect(login.isLoginFormDisplayed(), 'Login form should be displayed').to.be.true;

    addStep('Fill credentials and try to login');
    login.fillCredentials(login.emailField, common.correctName);
    login.fillCredentials(login.passwordField, common.correctName);
    login.clickLoginButton();

    addStep('Check if the page is displayed and URL matches');
    expect(browser.getUrl(), 'Subject page URL is the same as expected').to.equal(common.bestNotesLink + 'subject/');
    expect(new Note().isNavbarDisplayed(), 'Subject page should be displayed').to.be.true;
})
});