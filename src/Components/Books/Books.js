import React from 'react';
import PropTypes from "prop-types";
import '../../assets/kingCovers/kingcollection.jpeg'

const Books = ({books, favoriteButtonComponent, favoritesBox, favoritedBooks, addCompletedBookComponent, completedBooks, completeGroup, searchedBooks, displayErrorMessage }) => {

  const FavoriteComponent = favoriteButtonComponent
  const AddBookComponent = addCompletedBookComponent

  if (searchedBooks.length) {
    const searchBooks = books?.filter(book => {
      return book.title.toLowerCase().includes(searchedBooks.toLowerCase())
    })
    return searchBooks.map(book => {
      const {title, key, covers} = book
      let coverImage = covers
      if(Array.isArray(covers)) {
        coverImage = covers[0]
      }
      const bookImage = `http://covers.openlibrary.org/b/id/${coverImage}-M.jpg`
      return <div className="book-link" key={key}>
        <AddBookComponent book={book} completedBooks={completedBooks} completeGroup={completeGroup}/>
        <img className="book-card"
             key={key}
             src={bookImage}
             alt={title}
             id={title}
        />
        <FavoriteComponent book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks}/>
        <h3 className="card-title">{title}</h3>
        <div>
        </div>
      </div>
    })
  }

  if (books.length) {
    return books.map(book => {
      const {title, key, covers} = book
      let coverImage = covers
      if(Array.isArray(covers)) {
        coverImage = covers[0]
      }
      const bookImageCover = `http://covers.openlibrary.org/b/id/${coverImage}-M.jpg`
      return <div className="book-link" key={key}>
        <div className="completed">
        <AddBookComponent book={book} completedBooks={completedBooks} completeGroup={completeGroup}/>
      </div>
        <img className="book-card"
             key={key}
             src={bookImageCover}
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
  else{
    return null
  }
};

Books.propTypes = {
  favoritesBox:PropTypes.array,
  books:PropTypes.array,
  favoritedBooks:PropTypes.func,
  completedBooks:PropTypes.array,
  favoriteButtonComponent:PropTypes.func,
  addCompletedBookComponent:PropTypes.func,
  key: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.string,
  bookImage: PropTypes.string,
  displayErrorMessage: PropTypes.func
};

export default Books;

