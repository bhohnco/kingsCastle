import React from 'react';
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import PropTypes from "prop-types";


const Books = ({books, favoritesBox, favoritedBooks, searchedBooks, displayErrorMessage }) => {

  if (searchedBooks.length) {
    const searchBooks = books?.filter(book => {
      return book.bookTitle.toLowerCase().includes(searchedBooks.toLowerCase())
    })
    return searchBooks.map((book, i) => {
      const {bookTitle, photoUrl} = book
      return <div className="book-link" key={i}>
        <h3 className="card-title">{bookTitle}</h3>
        <img className="book-card" src={photoUrl} style={{ backgroundImage: `url(${photoUrl})`
        }}
             key={i}
             alt={bookTitle}
             id={bookTitle}
        />
        <div className="add-to-reading">
          <FavoriteButton book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks}
          />
          <div/>

        </div>
      </div>
    })
  }

  if (books.length) {
    console.log(books)
    return books.map((book, i) => {
      const {bookTitle, photoUrl} = book
      // let coverImage = photoUrl
      // if(Array.isArray(photoUrl)) {
      //   coverImage = photoUrl
      // }
      return <div className="book-link" key={i}>
        <h3 className="card-title">{bookTitle}</h3>
        <img className="book-card" src={photoUrl} style={{ backgroundImage: `url(${photoUrl})`
        }}
             key={i}
             alt={bookTitle}
             id={bookTitle}
        />
        <div className="add-to-reading">
        <FavoriteButton book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks}
        />
          <div/>

        </div>
        </div>
    })
  }
  else{
    return null
  }
};

Books.propTypes = {
  books:PropTypes.array,
  searchedBooks:PropTypes.string,
  bookGroup:PropTypes.func,
  favoritesBox:PropTypes.array,
  favoritedBooks:PropTypes.func,
  key: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.array,
  handleClick: PropTypes.string,
  bookImage: PropTypes.string,
  displayErrorMessage: PropTypes.func
}
Books.defaultProps = {
  searchedBooks:[]
}

export default Books;

