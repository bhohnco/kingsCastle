import React from 'react';
import PropTypes from "prop-types";
import Popup from 'react-popup';


const AddToReadingList = ({book, favoritesBox, favoritedBooks, }) => {

  const saveToLocalStorage = (items) => {
    localStorage.setItem('app-favorites', JSON.stringify(items));
  };

  const addFavoriteBook = (book) => {
    favoritedBooks((favoritesBox) => [
        ...favoritesBox,
      book,
    ])
    saveToLocalStorage(book)
    Popup.alert('Book added to reading list!')
  }

  return (
      <button onClick={()=>addFavoriteBook(book)} className="favorite-button">
        Add to Reading List  </button>
  );
};

AddToReadingList.propTypes = {
  addFavoriteBook: PropTypes.func,
  saveToLocalStorage: PropTypes.string,
  book:PropTypes.object,
  favoritesBox:PropTypes.array,
  favoritedBooks:PropTypes.func,
}

export default AddToReadingList;

