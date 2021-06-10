const allWorksURL = "https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=RYjnLebvgEGZoU2o3hlX74KAcas5pRG2" +


export const getAllBooks = () => {
  return fetch(allWorksURL)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`Uh oh! Books not found, please try again`)
        }
      })
}