const path = require('path');
const base = require('../base/base');

class Subject {
    constructor() {
        this.subjectNavbar = '.navbar';
        this.manageButton = '.nolink';
        this.textHeader = 'h1 < .text-white';
        this.noteText = 'h3 < .text-white';
    }

    isNavbarDisplayed() {
        base.waitForDisplayed(this.subjectNavbar);
        return base.isDisplayed(this.subjectNavbar);
    }
}
module.exports = Subject;