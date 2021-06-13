describe('Show main view of kings castle App', () => {

  beforeEach(() => {
    cy.fixture('mock-books-stubbing-data.json')
        .then(mockBookFetch => {
          cy.intercept('GET', 'http://openlibrary.org/authors/OL2162284A/works.json?limit=150', {
            statusCode: 200,
            delay: 100,
            body: mockBookFetch
          })
        })

    cy.visit('http://localhost:3000')
  })
})

  it('Should be able to visit the main page', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should display title on main page view', () => {
    cy.get('.App-header').should('contain', 'Castle')
  });

  it('Should have red on our page title', () => {
    cy.get('.App-header').should('have.css', 'background-color')
  });

  it('Should display card background image inside the book cards', () => {
    cy.get('.book-card').should('have.css', 'background-image', 'url("http://covers.openlibrary.org/b/id/10532958-M.jpg")')
  });

  it('Should render search bar from its component', () => {
    cy.get('.search-bar').should('be.visible')
  });

  it('Should give the user the chance to click after searching', () => {
    cy.get('.search-btn').should('contain', 'Search')
        .get('.search-btn').click()
  });

  it('Should have a small book title at the bottom of each card', () => {
    cy.get('.card-title').should('contain', 'Peur bleue')
  });

  it('Should have a subtitle of the top artists listing', () => {
    cy.get('.container-title').should('contain', 'Books')
  });

  it('Should load books onto the main view of the page on load', () => {
    cy.get('.book-card').should('have.length', 50)
  });
