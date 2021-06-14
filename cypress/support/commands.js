Cypress.Commands.add("allBooksPath", () => {
  cy.intercept('http://openlibrary.org/authors/OL2162284A/works.json?limit=107')
  cy.visit('http://localhost:3000')
})
