import React, { useState, useEffect} from "react";
import Header from '../Header/Header'
import Books from '../Books/Books'
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CompletedBookButton from "../CompletedBookButton/CompletedBookButton";
import './_app.scss';


function App() {

  const [favorites, setFavorites] = useState([])
  const [completedBooks, setCompletedBooks] = useState([])


console.log(favorites)

  return (
    <div className="App">
      <div className='site-container'>
      <Header/>
        <div className='card-display'>
        <h1 className='container-title'>Books</h1>
        <Books
            favorites ={favorites}
            favoritedBooks ={setFavorites}
            favoriteButtonComponent ={FavoriteButton}
            completedBooks = {completedBooks}
            addCompletedBook = {setCompletedBooks}
            completeBookComponent = {CompletedBookButton}
        />
        </div>
    </div>
      </div>
  );
}

export default App;
