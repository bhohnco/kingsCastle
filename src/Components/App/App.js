import React, { useState, useEffect} from "react";
import Header from '../Header/Header'
import SearchBar from "../SearchBar /SearchBar";
import Books from '../Books/Books'
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CompletedBookButton from "../CompletedBookButton/CompletedBookButton";
import {getBooks} from "../../utilities/ApiCalls";
import utils from "../../utilities/utils";
import {Link, Route, Redirect} from "react-router-dom";
import './_app.scss';

function App() {

  const [books, setBooks,] = useState([])
  const [searchedBooks, setSearchedBooks] = useState('')
  const [favorites, setFavorites] = useState([])
  const [completedBooks, setCompletedBooks] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
        getBooks()
            .then(data => {
              const narrowObject = data.entries
              const finalData = utils.removeDuplicates(narrowObject)
              setBooks(finalData)
      })
            .catch(error => setError({error}))
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
          <Route exact path='/'
                 render={() => (
                     !error ?
                         <>
                         <SearchBar
                          pushSearchResults={pushSearchResults}
                          searchValue={searchedBooks}
                          setSearchValue={setSearchedBooks}
                          displayErrorMessage={displayErrorMessage}/>
            <div className='card-display'>
                <Books
                  books={books}
                  searchedBooks={searchedBooks}
                  bookGroup={setBooks}
                  favoritesBox={favorites}
                  favoritedBooks={setFavorites}
                  favoriteButtonComponent={FavoriteButton}
                  completedBooks={completedBooks}
                  completeGroup={setCompletedBooks}
                  addCompletedBookComponent={CompletedBookButton}
                  displayErrorMessage={displayErrorMessage}/>
                  />
            </div>
                         </> : displayErrorMessage()
                 )} />
          <Redirect to='/' />
      </div>
    </div>
  );
}

export default App;
