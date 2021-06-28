describe('ReadingList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('User should be able to add books to read-list', () => {
    cy.contains('Add to')
        .each(($el, $index) => {
          if($index === 6){
            return false
          }
          cy.wrap($el).click()
        })
    cy.wait(2500)
    cy.get('.reading-list-button').click()
    cy.get('.card-display').should('have.length', 1)
    })
  })

