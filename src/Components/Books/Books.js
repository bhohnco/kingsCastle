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

    const bookCards = books.map((book) =>
        // const bookImage = `http://covers.openlibrary.org/b/id/${book.title}-L.jpg`
        // console.log(book.description, book.covers)

        <Books key={book.isbn13} value={book.book_title}/>
    );

    return (
        <>
          <section className='card-display'>
            <div className='book-card'>
              {bookCards}
            </div>
          </section>
        </>
    );
  }

export default Books;

{/*<img src = {} alt ={book.title}/>*/}