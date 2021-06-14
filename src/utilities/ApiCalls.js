const allWorksURL = 'http://openlibrary.org/authors/OL2162284A/works.json?limit=107'

export const getBooks = () => {
  return fetch(allWorksURL)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Uh oh! There was a problem loading the book, please try again!')
        }
      })
}

