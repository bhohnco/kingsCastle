import React, { useState, useEffect} from "react";
import Header from '../Header/Header'
import SearchBar from "../SearchBar /SearchBar";
import Books from '../Books/Books'
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import RemoveFavorites from "../RemoveFavorites/RemoveFavorites";
import './_app.scss';
import {getBooks} from "../../utilities/ApiCalls";
import utils from "../../utilities/utils";
import {Link} from "react-router-dom";

function App() {

  const [books, setBooks,] = useState([])
  const [searchedBooks, setSearchedBooks] = useState('')
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
      const fetchBooks = async () => {
        const bookData = await getBooks()
        const narrowObject = bookData.entries
        const finalData= utils.removeDuplicates(narrowObject)
        setBooks(finalData)
      }
      fetchBooks()
    }, [])


  const pushSearchResults = (search) => {
    setSearchedBooks(search)
  }

  const displayErrorMessage = () => {
    <article className="display-error-message">
      <h1>{error.message}</h1>
      <Link to='/'>
        <h4 className="back-to-home" onClick={() => this.setError({error: ''})}>
          Back to the Castle
        </h4>
      </Link>
    </article>
  }

  return (
    <div className="App">
      <div className='site-container'>
        <Header/>
          <SearchBar
              pushSearchResults={pushSearchResults}
              searchValue={searchedBooks}
              setSearchValue={setSearchedBooks}/>
        <div className='card-display'>
          <Books
              books={books}
              searchedBooks={searchedBooks}
              bookGroup={setBooks}
              favoritesBox={favorites}
              favoritedBooks={setFavorites}
              favoriteButtonComponent={FavoriteButton}
              removeFavoriteComponent={RemoveFavorites}/>
        </div>
    </div>
      </div>
  );
}

export default App;
