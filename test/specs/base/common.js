class Common {
    constructor() {
        this.titleNote = "Tytuł: "
        this.loremIpsum = 'Nowy program Va Banque w TV';
        this.ecceIpsum = 'Snare hope zarathustra pious society. Ascetic ocean snare chaos endless war ultimate insofar right god spirit. Right free pinnacle philosophy overcome self philosophy. Right passion value dead truth faithful deceptions. Marvelous hatred derive superiority deceptions justice overcome oneself zarathustra gains.';
        this.bestNotesLink = 'http://bestnotes.pythonanywhere.com/bestnotes/';
        this.errorLoginMessage = 'Nieprawidłowy adres e-mail lub hasło. Spróbuj ponownie!';
        this.testName = 'test';
        this.correctName = 'admin';
        this.noteName = `${Date.now()}`;
        this.subject = 'Testy automatyczne';
        this.topic = 'Testy';
    }

}

module.exports = new Common();