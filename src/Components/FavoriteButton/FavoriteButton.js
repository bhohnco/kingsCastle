import React from 'react';
import PropTypes from "prop-types";
import Toggle from '../Toggle/Toogle'


const FavoriteButton = ({book, favoritesBox, favoritedBooks, }) => {

  const saveToLocalStorage = (items) => {
    localStorage.setItem('app-favorites', JSON.stringify(items));
  };

  const addFavoriteBook = (book) => {
    const breakDownBook = {book: book.title}
    favoritedBooks((favoritesBox) => [
        ...favoritesBox,
      breakDownBook,
    ])
    saveToLocalStorage(book)
  }

  return (
      <div onClick={()=>addFavoriteBook(book)}>
        <span className='favorite-button'>Add to Reading List  </span>
        <Toggle/>
      </div>
  );
};

FavoriteButton.propTypes = {
  addFavoriteBook: PropTypes.func,
  saveToLocalStorage: PropTypes.string,
  book:PropTypes.object,
  favoritesBox:PropTypes.array,
  favoritedBooks:PropTypes.func,
}

export default FavoriteButton;

