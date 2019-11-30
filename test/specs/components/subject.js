const path = require('path');
const base = require('../base/base');

class Subject {
    constructor() {
        this.subjectNavbar = '.navbar';
    }

    isNavbarDisplayed() {
        base.waitForDisplayed(this.subjectNavbar);
        return base.isDisplayed(this.subjectNavbar);
    }
}
module.exports = Subject;