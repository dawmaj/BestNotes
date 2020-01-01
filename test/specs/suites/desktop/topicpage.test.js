const { addStep } = require('@wdio/allure-reporter').default;
const { expect } = require('chai');

const common = require('../../base/common');
const navigate = require('../../base/navigation');
const Login = require('../../components/login');
const Note = require('../../components/note');

describe('Topic page in BestNotes', () => {
    it('should be displayed properly as logged user', () => {
        addStep('Redirect to Topic Page as logged user');
        const topic = navigate.toTopicPage('user');
        topic.clickSubjectButton();
        
        addStep('Check if Topic Page is displayed and URL matches');
        expect(browser.getUrl(), 'Topic Page URL is displayed as expected').to.equal(common.bestNotesLink + 'topics_by_subject_id/1');
        expect(topic.getTextFromListButton(), 'Title of topic shoukd be equal Programowanie obiektowe').to.equal('Programowanie obiektowe');
    })
});