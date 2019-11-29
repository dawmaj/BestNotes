const path = require('path');
const base = require('../base/base');

class Login {
    constructor() {
        this.loginForm = '.login-form-2';
    }

    isLoginFormDisplayed() {
        base.waitForDisplayed(this.loginForm);
        return base.isDisplayed(this.loginForm);
    }
}

module.exports = Login;