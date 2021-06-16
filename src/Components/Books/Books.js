import React from 'react';
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import PropTypes from "prop-types";
import '../../assets/kingCovers/kingcollection.jpeg'

const Books = ({books, favoritesBox, favoritedBooks, searchedBooks, displayErrorMessage }) => {

  if (searchedBooks.length) {
    const searchBooks = books?.filter(book => {
      console.log(books)
      console.log(searchedBooks)
      console.log(book.title)
      return book.title.toLowerCase().includes(searchedBooks.toLowerCase())
    })
    return searchBooks.map((book, i) => {
      const {title, covers} = book
      let coverImage = covers
      if(Array.isArray(covers)) {
        coverImage = covers[0]
      }
      const bookImage = `http://covers.openlibrary.org/b/id/${coverImage}-M.jpg`
      return <div className="book-link" key={i}>
        <img className="book-card"
             key={i}
             src={bookImage}
             alt={title}
             id={title}
        />
        <div className="favorite-button">
          <FavoriteButton book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks} searchedBooks={favoritedBooks}/>
        </div>
        <h3 className="card-title">{title}</h3>
        <div>
        </div>
      </div>
    })
  }

  if (books.length) {
    return books.map((book, i) => {
      const {title, covers} = book
      let coverImage = covers
      if(Array.isArray(covers)) {
        coverImage = covers[0]
      }
      const bookImageCover = `http://covers.openlibrary.org/b/id/${coverImage}-M.jpg`
      return <div className="book-link" key={i}>
        <div className="completed">
      </div>
        <img className="book-card"
             key={i}
             src={bookImageCover}
             alt={title}
             id={title}
        />
        <FavoriteButton book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks}
        />
        <h3 className="card-title">{title}</h3>
        <div>
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

