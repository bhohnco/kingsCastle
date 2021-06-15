import React from 'react';
import Toggle from '../Toggle/Toogle'
import PropTypes from "prop-types";


const CompletedBookButton = ({book, completedBooks, completeGroup, }) => {

  const saveToLocalStorage = (items) => {
    localStorage.setItem('app-completed', JSON.stringify(items));
  };

  const addCompletedBook = (book) => {
    const breakDownComplete = {book: book.title}
    completeGroup((completedBooks) => [
        ...completedBooks,
        breakDownComplete,
    ])
    saveToLocalStorage(breakDownComplete)
  }

  return (
      <div onClick={()=>addCompletedBook(book)}>
        <Toggle/>
        <span className='completed-button'>  Add to Completed Books</span>
      </div>
  );
};


export default CompletedBookButton;

CompletedBookButton.propTypes = {
  addCompletedBook: PropTypes.func,
  saveToLocalStorage: PropTypes.string,
  book:PropTypes.object,
  completedBooks: PropTypes.array,
  completeGroup:PropTypes.func,
}