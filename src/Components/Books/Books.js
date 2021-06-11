import React, {useEffect, useState} from 'react';
import axios from "axios";
import doctorSleep from '../../assets/kingCovers/doctorsleep.jpeg'
// import {Link} from 'react-router-dom';
// import {getAllBooks} from '../../utilities/apiCalls';
import utils from '../../utilities/utils';

const allWorksURL = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=RYjnLebvgEGZoU2o3hlX74KAcas5pRG2'

const Books = () => {
  const [books, setBooks] = useState([''])

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await axios.get(allWorksURL)
      const narrowObject = bookData.data.results
      // utils.removeDuplicates(narrowObject)
      setBooks(utils.removeDuplicates(narrowObject))
    }
    fetchBooks()
  }, [])

  // const coverPhoto = images[0].photoUrl
  // console.log(coverPhoto)

  return (
      <div>
        <h1>Books</h1>
        <section className='card-display'>
          {books.map ((book) => {
            const {book_title, publication_dt } = book
            // console.log(coverPhotos.photoUrl)
            // if (publication_dt === coverPhotos.photoId) {
            //   coverImage = coverPhotos.url;
            //   console.log(coverImage)
            // }
            // console.log(book_title, publication_dt)
            // const bookImage = `http://covers.openlibrary.org/b/id/${book.title}-L.jpg`
            // console.log(book.description, book.covers)

            return (
                <div className ="book-link" key ={publication_dt}>
                  <img className ="book-card"
                   src={doctorSleep}
                   alt={book_title}
                   id={publication_dt} />
                  <h3 className="card-title">{book_title}</h3>
                </div>
            )

          })}
        </section>

      </div>
  )
}



export default Books;