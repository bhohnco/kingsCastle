import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import PropTypes from "prop-types";


const Books = ({books, favoriteButtonComponent, favoritesBox, favoritedBooks, searchedBooks }) => {

  const FavoriteComponent = favoriteButtonComponent
  // const CompletedComponent = props.addCompletedBook

  if (searchedBooks.length) {
    const searchBooks = books?.filter(book => {
      return book.title.toLowerCase().includes(searchedBooks.toLowerCase())
    })
    return searchBooks.map(book => {
      const {title, key, covers} = book
      // let first = function(covers) { return !!covers }
      // console.log(covers)
      // let findCoverID = covers.find(first)
      // console.log(findCoverID)

      const bookImage = `http://covers.openlibrary.org/b/id/${covers}-M.jpg`
      return <div className="book-link" key={key}>
        <img className="book-card" style={{
          backgroundImage: `url(${bookImage})`
        }}
             key={key}
             src={bookImage}
             alt={title}
             id={title}
        />
        <FavoriteComponent book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks}
                           className='overlay d-flex align-items-center justify-content-center'/>
        <h3 className="card-title">{title}</h3>
        <div>
        </div>

      </div>
    })
  }


  if (books.length) {
    return books.map(book => {
      const {title, key, covers} = book
      // let first = function(covers) { return !!covers }
      // console.log(covers)
      // let findCoverID = covers.find(first)
      // console.log(findCoverID)

      const bookImage = `http://covers.openlibrary.org/b/id/${covers}-M.jpg`
      return <div className="book-link" key={key}>
        <img className="book-card" style={{
          backgroundImage: `url(${bookImage})`
        }}
             key={key}
             src={bookImage}
             alt={title}
             id={title}
        />
        <FavoriteComponent book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks}
                           className='overlay d-flex align-items-center justify-content-center'/>
        <h3 className="card-title">{title}</h3>
        <div>
        </div>

      </div>
    })
  } else {
    return null;
  }
};

export default Books;

Books.propTypes = {
  favoritesBox:PropTypes.array,
  book:PropTypes.array,
  favoritedBooks:PropTypes.func,
  favoriteButtonComponent:PropTypes.func,
  removeFavoriteComponent:PropTypes.func,
  key: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.string,
  bookImage: PropTypes.string
};
