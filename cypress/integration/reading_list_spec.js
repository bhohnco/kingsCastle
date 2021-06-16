describe('ReadingList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('User should be able to add books to read-list or completed books', () => {
    cy.get('.favorite-button')
        .each(($el, $index) => {
          if($index === 4){
            return false
          }
          cy.wrap($el).click()
        })
  })

  it ("The user should be able to see their add favorite books", () => {
    cy.get('.reading-list-button').click()


  })

})