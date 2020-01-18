const base = require('./base');
const Login = require('../components/login');
const Note = require('../components/note');
const AddNote = require('../components/add-note');

class Navigation {
    constructor() {
        this.baseUrl = 'bestnotes.pythonanywhere';
        this.loginUrl = 'http://bestnotes.pythonanywhere.com/bestnotes/accounts/login/';
        this.notesUrl = 'http://bestnotes.pythonanywhere.com/bestnotes/notes/9';
        this.subjectUrl = 'http://bestnotes.pythonanywhere.com/bestnotes/subject/';
        this.topicUrl = 'http://bestnotes.pythonanywhere.com/bestnotes/topics_by_subject_id/9';
        this.addNoteUrl = 'http://bestnotes.pythonanywhere.com/bestnotes/addnote/';
        this.loggedInCookiesSet = [
            {
                name: 'sessionid',
                value: '8h635pv4mwwj4y4bgmcyli678pxd8vsl',
                path: '/',
                domain: `.${this.baseUrl}.com`,
            },
        ];
        this.anonCookiesSet = [
            {
                name: 'sessionid',
                value: 'abcdef',
                path: '/',
                domain: `.${this.baseUrl}.com`,
            },
        ];
    }

    toLoginPage() {
        browser.url(this.loginUrl);
        return new Login();
    } 
    
    toNotesPage(user) {
        browser.url(this.notesUrl);
        this.setUser(user);
        return new Note();
    }

    toAddNotePage(user) {
        browser.url(this.addNoteUrl);
        this.setUser(user);
        return new AddNote();
    }

    toSubjectPage(user) {
        browser.url(this.notesUrl);
        this.setUser(user);
        return new Note();
    }

    toTopicPage(user) {
        browser.url(this.topicUrl);
        this.setUser(user);
        return new Note();
    }

    setUser(user) {
        switch (user.toLowerCase()) {
            case 'anon':
                browser.setCookies(this.anonCookiesSet);
                base.waitForCookiesSet(this.anonCookiesSet);
                break;
            case 'user':
                browser.setCookies(this.loggedInCookiesSet);
                base.waitForCookiesSet(this.loggedInCookiesSet);
                break;
            default:
                throw new Error('setUser() method parameter is invalid');
        }
    }
}
module.exports = new Navigation();
