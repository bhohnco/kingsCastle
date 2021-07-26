import React, { useState, useEffect} from "react";
import Header from '../Header/Header'
import SearchBar from "../SearchBar/SearchBar";
import SortComponent from '../SortComponent/SortComponent';
import Books from '../Books/Books'
import bookData from "../../bookData";
import utils from "../../utilities/utils";
import {Link, Route, Switch} from "react-router-dom";
import './_app.scss';
import Popup from 'react-popup';

function App() {

  const [books, setBooks,] = useState([])
  const [searchedBooks, setSearchedBooks] = useState('')
  const [sortedBooks, setSortedBooks] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    const narrowObject = utils.randomArrayShuffle(bookData)
    setBooks(narrowObject)
  }, [])

  const pushSearchResults = (search) => {
    setSearchedBooks(search)
  }


  const displayErrorMessage = () => {
    <article className="display-error-message">
      <h3 className="error-message">Whoops! Looks like you're in the wrong spot</h3>
      <Link to='/'>
        <h4 className="back-to-home" onClick={() => this.setError({error: ''})}>
          Back to the Castle
        </h4>
      </Link>
    </article>
  }

  return (
    <div className="App">
      <Popup />
      <div className='site-container'>
        <Header/>
        <Switch>
          <Route exact path='/'
                 render={() => (
                     !error && !books.length?
                   <p>There was a problem grabbing the books, please try again later!</p> :
                         <>
                         <SearchBar
                          pushSearchResults={pushSearchResults}
                          searchValue={searchedBooks}
                          setSearchValue={setSearchedBooks}
                          displayErrorMessage={displayErrorMessage}/>
                           <SortComponent
                            placeholder="Sort Books"
                            books={books}
                            sortedValue={sortedBooks}
                            setSortValue={setSortedBooks}
                            displayErrorMessage={displayErrorMessage}/>
            <div className='card-display'>
                <Books
                  books={books}
                  searchedBooks={searchedBooks}
                  sortedBooks={sortedBooks}
                  bookGroup={setBooks}
                  favoritesBox={favorites}
                  favoritedBooks={setFavorites}
                  displayErrorMessage={displayErrorMessage}/>
            </div>
                         </>
                 )} />
            <Route exact path='/readinglist'
                   render={() => (
                       !error && !favorites.length?
                           <p>You don't have any favorites yet, return home to add some!</p> :
                           <>
                             <SearchBar
                                 pushSearchResults={pushSearchResults}
                                 searchValue={searchedBooks}
                                 setSearchValue={setSearchedBooks}
                                 displayErrorMessage={displayErrorMessage}/>
                             <div className='card-display'>
                   <Books
                   books={favorites}
                   searchedBooks={searchedBooks}
                   bookGroup={setBooks}
                   favoritesBox={favorites}
                   favoritedBooks={setFavorites}
                   displayErrorMessage={displayErrorMessage}/>
                             </div>
                           </>
              )} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
