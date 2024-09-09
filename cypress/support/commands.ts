const {Commands} = Cypress;

function waitForSeconds(seconds: number = 1): void {
    cy.wait(seconds * 1000)
}

Commands.add('waitForSeconds', waitForSeconds)

function clickToItem(item: string) {
    cy.get(item).click()
}

Commands.add('clickToItem', clickToItem)

function clickEachItem(item: Array<string>) {
    for (let i = 0; i < item.length; i++) {
        cy.get(item[i]).click()
        cy.wait(1000)
    }
}

Commands.add('clickEachItem', clickEachItem)

function typeToInput(item: string, value: string) {
    cy.get(item).type(value)
}

Commands.add('typeToInput', typeToInput)

function typeToEachInput(item: { [x: string]: string; }) {
    for (let i in item) {
        cy.get(i).first().type(item[i])
    }
}

Commands.add('typeToEachInput', typeToEachInput)

function selectItem(item: string, value: string): void {
    cy.get(item).click()
    cy.contains(value).last().click()
}

Commands.add('selectItem', selectItem)

function selectMultiple(item) {
    for (let i in item) {
        cy.get(i).click()
        cy.wait(500)
        cy.get('.t-content >.t-dropdown').within(() => {
            cy.contains(item[i]).click()
        })
    }
}

Commands.add('selectMultiple', selectMultiple)

function containOneAndSelectItem(items): void {
    for (let item in items) {
        cy.wait(500)
        cy.get(item).last().type(items[item])
        cy.wait(1000)
        cy.get('.t-content >.t-dropdown').contains(items[item]).first().click()
    }
}

Commands.add('containOneAndSelectItem', containOneAndSelectItem)

function containsChecker(items): void {
    for (let item in items) {
        cy.get(item).contains(items[item], {timeout: 10000})
        cy.wait(500)
    }
}

Commands.add("containsChecker", containsChecker)

function requiredCheck(selections: Array<string>) {
    selections.forEach((item) => {
        cy.get(item)
            .should('have.class', 'ng-invalid');
    })
}

Commands.add('requiredCheck', requiredCheck)

function scrollTo(items): void {
    for (let item in items) {
        cy.get(item).scrollTo(items[item])
    }
}

Commands.add("customScrollTo", scrollTo)

function containsClick(selector: string, value: string): void {
    cy.get(selector).contains(value).click()
}

Commands.add("containsClick", containsClick)

function firstClick(selector: string): void {
    cy.get(selector).should(`exist`).first().click()
}

Commands.add("firstClick", firstClick)

function lastClick(selector: string): void {
    cy.get(selector).should(`exist`).last().click()
}

Commands.add("lastClick", lastClick)

function clearAndTypeToInput(item: string, value: string) {
    cy.get(item).clear().type(value)
}

Commands.add('clearAndTypeToInput', clearAndTypeToInput)

function clearAndTypeToEachInputs(item: { [x: string]: string; }) {
    for (let i in item) {
        cy.get(i).first().clear().type(item[i])
    }
}

Commands.add('clearAndTypeToEachInputs', clearAndTypeToEachInputs)

function checkForExists(value: Array<string>, trueValue: boolean = true) {
    for (let i of value) {
        cy.waitForSeconds(0.5)
        if (trueValue) {
            cy.contains(i).should('exist')
        } else {
            cy.contains(i).should('not.exist')
        }
    }
}

Commands.add('checkForExists', checkForExists)

function checkEnableDisable(items) {
    for (let item in items) {
        if (items[item] === 'false') {
            cy.get(item).should('be.disabled')
        }
        else {
            cy.get(item).should('not.be.disabled')
        }
    }
}

Commands.add('checkEnableDisable', checkEnableDisable)

declare namespace Cypress {
    interface Chainable<Subject> {
        waitForSeconds: typeof waitForSeconds
        clickToItem: typeof clickToItem
        clickEachItem: typeof clickEachItem
        typeToInput: typeof typeToInput
        typeToEachInput: typeof typeToEachInput
        selectItem: typeof selectItem
        selectMultiple: typeof selectMultiple
        containsChecker: typeof containsChecker
        customScrollTo: typeof scrollTo
        containsClick: typeof containsClick
        requiredCheck: typeof requiredCheck
        firstClick: typeof firstClick
        lastClick: typeof lastClick
        clearAndTypeToInput: typeof clearAndTypeToInput
        clearAndTypeToEachInputs: typeof clearAndTypeToEachInputs
        checkForExists: typeof checkForExists
        containOneAndSelectItem: typeof containOneAndSelectItem
        checkEnableDisable: typeof checkEnableDisable
    }
}