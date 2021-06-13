const allWorksURL = 'http://openlibrary.org/authors/OL2162284A/works.json?limit=50'

export const getBooks = () => {
  return fetch(allWorksURL)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`Uh oh! Books not found, please try again`)
        }
      })
}