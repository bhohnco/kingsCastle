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

  it('Should be able to visit the main page', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should display title on main page view', () => {
    cy.get('.App-header').should('contain', 'Castle')
  });

  it("The header information should render on load", () => {
    cy.get('.App-header').should('be.visible')
    cy.contains('.title', "Kings Castle")
    cy.contains('.page-quote', "The place to find all of Stephen Kings works")
  })

  it('Should have color on our page title', () => {
    cy.get('.App-header').should('have.css', 'background-color')
  });

  // it('Should display card background image inside the book cards', () => {
  //   cy.get('.book-card').should('have.css', 'background-size', 'cover')
  // });

  it('should render card class attributes', () => {
    cy.get('img').each($el => {
      cy.wrap($el).should('have.attr', 'src')
      cy.wrap($el).should('have.attr', 'alt')
      cy.wrap($el).should('have.attr', 'id')
    })
  })

  it('should render book cards in cardContainer from API data', () => {
    cy.get(".card-display").should('be.visible')
    cy.get(".book-card").should('be.visible')
    cy.get(".book-card").should('have.length', 44)
    cy.get(".book-card").should('have.attr', 'alt',)
    cy.get(".book-card").should('have.attr', 'id')
  });

  it('Should render search bar from its component', () => {
    cy.get('.search-bar').should('be.visible')
  });

  it("Should contain a searchBar input", () => {
    cy.get('input[placeholder="Type to search books..."]')
        .get('input[type="text"]')
        .get('input[name="input"]')
  })
  //
  // it('Should have a small book title at the bottom of each card', () => {
  //   cy.get('.card-title').should('contain', 'Peur bleue')
  // });

  it('Should load books onto the main view of the page on load', () => {
    cy.get('.book-card').should('have.length', 44)
  });

  it('should be able to type into the search input and see that value in the input', () => {
    cy.get('input[name="input"]').type('The Dark Half')
        .should('have.value', 'The Dark Half')
  })

  it('should find book by name', () => {
    cy.get('input[name="input"]').type('The Dark Half')
        .should('have.value', 'The Dark Half')
  })

  // it('Should display an error message if data is not returned from the API', () => {
  //   const errorMessage = 'Uh oh! There was a problem loading the book, please try again!';
  //   cy.intercept(
  //       {
  //         method: 'GET',
  //         url: 'http://openlibrary.org/authors/OL2162284A/works.json?limit=107'
  //       }, {
  //         statusCode: 500,
  //         message: errorMessage
  //       }
  //   )
  //   cy.visit('http://localhost:3000')
  //       .wait(1000)
  //       .get('.card-display').contains(errorMessage)
  // })

  describe('Books', () => {
    beforeEach(() => {
      cy.stub()
      cy.visit('http://localhost:3000/')
    })

    it('User should be able to add books to read-list', () => {
      cy.get('.favorite-button').eq(1).click()
    })

  //   it('Should show error if books cannot be fetched', () => {
  //     cy.intercept(
  //         {
  //           method: 'GET',
  //           url: 'http://openlibrary.org/authors/OL2162284A/works.json?limit=107'
  //         },
  //         {statusCode: 404, body: ''}
  //     )
  //         .get('.display-error-message, [class="error-message"]')
  //   })
  })

})



