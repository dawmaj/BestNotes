const path = require('path');
const base = require('../base/base');

class Login {
    constructor() {
        this.loginForm = '.login-form-2';
        this.emailField = '#id_username';
        this.passwordField = '#id_password';
        this.loginButton = '.btnSubmit';
        this.warringMessage = '.text-warning';
    }

    isLoginFormDisplayed() {
        base.waitForDisplayed(this.loginForm);
        return base.isDisplayed(this.loginForm);
    }

    fillCredentials(selector, text) {
        base.fillIn(selector, text, 'Fill credentials');
        return this;
    }

    clickLoginButton() {
        base.click(this.loginButton, 'Login button');
        return this;
    }

    getErrorMessage() {
        base.waitForDisplayed(this.warringMessage);
        return base.getAttribute(this.warringMessage, 'textContent', 'Error message text');
    }
    
}

module.exports = Login;