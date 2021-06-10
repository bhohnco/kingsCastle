import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
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

      return (
          <>
          <h1>Books</h1>
            <section className='card-display'>
              {books.map ((book) => {
                const {book_title } = book
                // const bookImage = `http://covers.openlibrary.org/b/id/${book.title}-L.jpg`
                // console.log(book.description, book.covers)

                return (
                    <div className='book-card' key ={book}>
                     {/*<img src = {} alt ={book.title}/>*/}
                      {book_title}
                      </div>
                )

              })}
            </section>

          </>
  )
}



export default Books;