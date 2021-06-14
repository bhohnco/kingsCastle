import React from 'react';
import PropTypes from "prop-types";
import Toggle from "../Toggle/Toogle";

const RemoveFavorites = ({book, favoritedBooks}) => {

  const removeFavouriteBook = (book) => {
    const newFavouriteList = favoritedBooks.filter(
        (favoritedBook) => favoritedBook.title !== book.title
    );
    favoritedBooks(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem('app-favorites', JSON.stringify(items));
  };

  return (
      <div onClick={()=>removeFavouriteBook(book)}>
        <span className='remove-favorite'>Remove from favourites</span>
        <Toggle/>
      </div>
  );
};

export default RemoveFavorites;

RemoveFavorites.propTypes = {
  removeFavouriteBook: PropTypes.func,
  saveToLocalStorage: PropTypes.string
}