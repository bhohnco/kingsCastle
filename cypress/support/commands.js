Cypress.Commands.add("allBooksPath", () => {
  cy.intercept('http://openlibrary.org/authors/OL2162284A/works.json?limit=107')
  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('stub', ()=> {
  cy.fixture('mock-books-stubbing-data.json')
      .then(data => {
        cy.intercept('GET', 'http://openlibrary.org/authors/OL2162284A/works.json?limit=107', {
          statusCode: 201,
          delay: 100,
          body: data
        })
      })
})