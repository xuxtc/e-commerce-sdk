Cypress.Commands.add('nextPageByText', text => {
    cy.contains(text).click({ force: true })
})

Cypress.Commands.add('nextPageByLocator', locator => {
    cy.get(locator).click({ force: true })
})