import React from 'react';
import PropTypes from "prop-types";


const FavoriteButton = ({book, favoritesBox, favoritedBooks, }) => {

  const saveToLocalStorage = (items) => {
    localStorage.setItem('app-favorites', JSON.stringify(items));
  };

  const addFavoriteBook = (book) => {
    // const breakDownBook = {book}
    favoritedBooks((favoritesBox) => [
        ...favoritesBox,
      book,
    ])
    saveToLocalStorage(book)
  }

  return (
      <div onClick={()=>addFavoriteBook(book)} className="favorite-button">
        <span>Add to Reading List  </span>
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

