const base = require('./base');
const Login = require('../components/login');

class Navigation {
    constructor() {
        this.loginUrl = 'http://bestnotes.pythonanywhere.com/bestnotes/accounts/login/';
    }

    toLoginPage() {
        browser.url(this.loginUrl);
        return new Login();
    }
}
module.exports = new Navigation();
