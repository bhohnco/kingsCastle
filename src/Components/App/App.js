import React, { useState, useEffect} from "react";
import Header from '../Header/Header'
import SearchBar from "../SearchBar /SearchBar";
import Books from '../Books/Books'
// import {getBooks} from "../../utilities/ApiCalls";
import testData from "../../assets/testData";
import utils from "../../utilities/utils";
import {Link, Route, Switch} from "react-router-dom";
import './_app.scss';

function App() {

  const [books, setBooks,] = useState([])
  const [searchedBooks, setSearchedBooks] = useState('')
  const [favorites, setFavorites] = useState([])
  const [completedBooks, setCompletedBooks] = useState([])
  const [error] = useState('')


  useEffect(() => {
    const narrowObject = testData.entries
    utils.removeDuplicates(narrowObject)
    setBooks(narrowObject)
  }, [])

  // useEffect(() => {
  //       getBooks()
  //           .then(data => {
  //             const narrowObject = data.entries
  //             const finalData = utils.removeDuplicates(narrowObject)
  //             setBooks(finalData)
  //     })
  //           .catch(error => {
  //             setError(error)
  //           })
  //   }, [])

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
      <div className='site-container'>
        <Header/>
        <Switch>
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
                  completedBooks={completedBooks}
                  completeGroup={setCompletedBooks}
                  displayErrorMessage={displayErrorMessage}/>
            </div>
                         </> : displayErrorMessage()
                 )} />
            <Route exact path='/readinglist'
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
                   books={favorites}
                   searchedBooks={searchedBooks}
                   bookGroup={setBooks}
                   favoritesBox={favorites}
                   favoritedBooks={setFavorites}
                   completedBooks={completedBooks}
                   completeGroup={setCompletedBooks}
                   displayErrorMessage={displayErrorMessage}/>
                             </div>
                           </> : displayErrorMessage()
              )} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
