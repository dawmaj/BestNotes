const { addStep } = require('@wdio/allure-reporter').default;
const { expect } = require('chai');

const common = require('../../base/common');
const navigate = require('../../base/navigation');
const Login = require('../../components/login');
const Subject = require('../../components/subject');

const testName = 'test';
const corrrectName = 'admin';

describe('Login page in BestNotes', () => {
   it('should be displayed', () => {
       const login = new Login();

       addStep('Redirect to Login Page');
       navigate.toLoginPage();

       addStep('Check if Login Form is displayed and URL ');
       expect(browser.getUrl(), 'Post details URL should include post ID').to.equal(common.bestNotesLink + 'accounts/login/');
       expect(login.isLoginFormDisplayed(), 'Login form should be displayed').to.be.true;
   })

   it('shouldnt logged user with incorrect credentials', () => {
    const login = new Login();

    addStep('Redirect to Login Page');
    navigate.toLoginPage();

    addStep('Check if Login Form is displayed');
    expect(login.isLoginFormDisplayed(), 'Login form should be displayed').to.be.true;

    addStep('Fill credentials and try to login');
    login.fillCredentials(login.emailField, testName);
    login.fillCredentials(login.passwordField, testName);
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
    login.fillCredentials(login.emailField, corrrectName);
    login.fillCredentials(login.passwordField, corrrectName);
    login.clickLoginButton();

    addStep('Check if the page is displayed and URL matches');
    expect(browser.getUrl(), 'Post details URL should include post ID').to.equal(common.bestNotesLink + 'subject/');
    expect(new Subject().isNavbarDisplayed(), 'Subject page should be displayed').to.be.true;
})
});