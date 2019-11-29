const { addStep } = require('@wdio/allure-reporter').default;
const { expect } = require('chai');

const common = require('../../base/common');
const navigate = require('../../base/navigation');
const Login = require('../../components/login');

describe('Login page in BestNotes', () => {

   it('should be displayed', () => {
       const login = new Login();
       navigate.toLoginPage();
       expect(login.isLoginFormDisplayed(), 'Login form should be displayed').to.be.true;
   })
   
});