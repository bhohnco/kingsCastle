import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import {getBooks} from '../../utilities/ApiCalls';
import utils from '../../utilities/utils';


const Books = (props) => {
console.log(props)
  const [books, setBooks,] = useState([])

  const FavoriteComponent = props.favoriteButtonComponent
  const CompletedComponent = props.addCompletedBook


  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getBooks()
      const narrowObject = bookData.entries
      utils.removeDuplicates(narrowObject)
      setBooks(narrowObject)
    }
    fetchBooks()
  }, [])




  return books.map (book => {
    const {title, key, covers} = book
    const bookImage = `http://covers.openlibrary.org/b/id/${covers}-M.jpg`
        return <div className="book-link" key={key}>
          <img className="book-card" style={{
            backgroundImage: `url(${bookImage})`}}
               key={key}
               src={bookImage}
               alt={title}
               id={title}
               />
          <div className="overlay"/>
          <FavoriteComponent book={book} favorites={props.favoriteBooksContainer} favoritedBooks={props.favoritedBooks}/>
          <h3 className="card-title">{title}</h3>
          <div>
          </div>

        </div>
  })
}

export default Books;

{/*<CompletedComponent book={book} completedBooks={props.completedList} addCompletedBook={props.completedBooks}/>*/}
