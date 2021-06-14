import React from 'react';
import Toggle from '../Toggle/Toogle'

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
        <span className='completed-button'>Add to Completed</span>
      <Toggle/>
      </div>
  );
};

export default CompletedBookButton;
