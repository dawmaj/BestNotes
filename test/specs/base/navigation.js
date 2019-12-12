const base = require('./base');
const Login = require('../components/login');
const Note = require('../components/note');

class Navigation {
    constructor() {
        this.loginUrl = 'http://bestnotes.pythonanywhere.com/bestnotes/accounts/login/';
        this.notesUrl = 'http://bestnotes.pythonanywhere.com/bestnotes/notes/1';
    }

    toLoginPage() {
        browser.url(this.loginUrl);
        return new Login();
    } 
    
    toNotesPage() {
        browser.url(this.notesUrl);
        return new Note();
    }
}
module.exports = new Navigation();
