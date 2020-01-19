class Base {
    click(selector, elementName) {
        try {
            $(selector).scrollIntoView({ block: 'center' });
            $(selector).waitForEnabled();
            $(selector).click();
            console.log(`${elementName} was clicked`);
        } catch (err) {
            console.log(`${elementName} was not clicked. Exception: ${err}`);
        }
    }

    clickNth(selector, position, elementName) {
        try {
            $$(selector)[position].scrollIntoView({ block: 'center' });
            $$(selector)[position].waitForEnabled();
            $$(selector)[position].click();
            console.log(`${elementName} with position: ${position} was clicked`);
        } catch (err) {
            console.log(`${elementName} with position: ${position} was not clicked. Exception: ${err}`);
        }
    }

    clearInput(selector) {
        try {
            const valueLength = $(selector).getValue().length;
            const backSpaces = new Array(valueLength).fill('Backspace');
            $(selector).setValue(backSpaces);
            console.log(`${selector} has length: ${valueLength} and was cleared`);
        } catch (e) {
            console.log(`${selector} was not cleared with exception: ${e}`);
        }
    }

    fillIn(selector, text, elementName) {
        console.log(`${elementName} is displayed`);
        try {
            this.clearInput(selector);
            $(selector).setValue(text);
            console.log(`${text} was added to ${elementName}`);
        } catch (err) {
            console.log(`An exception occurred when adding a text to the element: ${err}`);
        }
    }

    fillInNth(selectorList, position, text, elementName) {
        try {
            $$(selectorList)[position].setValue(text);
            console.log(`${text} was added to ${elementName}`);
        } catch (err) {
            console.log(`An exception occurred when adding a text to the element: ${err}`);
        }
    }

    getAttribute(selector, attribute, elementName) {
        let attributeValue = null;
        try {
            console.log(`${elementName} was displayed`);
            attributeValue = $(selector).getAttribute(attribute);
            console.log(`${elementName} had value: ${attributeValue}`);
        } catch (err) {
            console.log(`Could not get ${elementName}. Exception: ${err}`);
        }

        return attributeValue;
    }

    getLinkFromElementsArray(selector, position, elementName) {
        let href = null;
        try {
            href = $$(selector)[position].$('a').getAttribute('href').replace('%20', '_');
            console.log(`Link for ${elementName} with position ${position} has value: ${href}`);
        } catch (err) {
            console.log(`Could not get link for ${elementName}. Exception: ${err}`);
        }

        return href;
    }

    isEnabled(selector, elementName) {
        console.log(`${elementName} is displayed`);
        const isEnabled = $(selector).isEnabled();
        console.log(`${elementName} is enabled: ${isEnabled}`);

        return isEnabled;
    }

    isDisplayed(selector, elementName, customTimeout) {
        let isDisplayed = false;
        try {
            isDisplayed = $(selector).isDisplayed(customTimeout, true);
            console.log(`${elementName} is displayed: ${isDisplayed}`);
        } catch (err) {
            console.log(`${elementName} is displayed: ${isDisplayed}. Exception: ${err}`);
        }

        return isDisplayed;
    }

    isNthDisplayed(selectorsList, position, elementName, customTimeout) {
        let isDisplayed = false;
        try {
            isDisplayed = $$(selectorsList)[position].isDisplayed(customTimeout, true);
            console.log(`${elementName} with position ${position} is displayed: ${isDisplayed}`);
        } catch (err) {
            console.log(`${elementName} with position ${position} is displayed: ${isDisplayed}. Exception: ${err}`);
        }

        return isDisplayed;
    }

    waitForDisplayed(selector, elementName) {
        browser.waitUntil(() => {
            try {
                return $(selector).isDisplayed();
            } catch (e) {
                console.log(`${elementName} is not displayed. Exception: ${e}`);
                return false;
            }
        }, 5000, `Expected ${selector} to be displayed after 5s`);
    }

    waitForNthElementDisplayed(selectorList, position, elementName) {
        browser.waitUntil(() => {
            try {
                return $$(selectorList)[position].isDisplayed();
            } catch (e) {
                console.log(`${elementName} with position ${position} is not displayed. Exception: ${e}`);
                return false;
            }
        }, 5000, `Expected ${elementName} with position ${position} to be displayed after 5s`, 500);
    }

    waitForNotDisplayed(selector, elementName, customTimeout) {
        browser.waitUntil(() => {
            try {
                return !$(selector).isDisplayed(customTimeout, true);
            } catch (e) {
                console.log(`${elementName} is still displayed. Exception: ${e}`);
                return true;
            }
        }, 5000, `Expected ${elementName} to be displayed after 5s`, 500);
    }

    waitForEnabled(selector, elementName) {
        browser.waitUntil(() => {
            try {
                return !$(selector).isEnabled();
            } catch (e) {
                console.log(`${elementName} is not enabled. Exception: ${e}`);
                return true;
            }
        }, 5000, `Expected ${selector} to be enabled after 5s`, 500);
    }

    isChildDisplayedForParent(parentElementSelector, position, childElementSelector, childElementName) {
        const isDisplayed = $$(parentElementSelector)[position].$(childElementSelector).isDisplayed();
        console.log(`${childElementName} is displayed: ${isDisplayed}`);

        return isDisplayed;
    }

    waitForCookiesSet(cookies) {
        cookies.forEach((cookie) => {
            browser.waitUntil(
                () => browser.getCookies([cookie.name]) !== null,
                5000,
                `Could not find cookie ${cookie.name}`,
                500
            );
        });
        browser.refresh();
    }

    wait(timeout) {
        setTimeout(() => { console.log(`This is a explicit wait of ${timeout}`); }, timeout);
    }
}

module.exports = new Base();