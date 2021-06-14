import React, { useState, useEffect} from "react";
import Header from '../Header/Header'
import SearchBar from "../SearchBar /SearchBar";
import Books from '../Books/Books'
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import RemoveFavorites from "../RemoveFavorites/RemoveFavorites";
import './_app.scss';
import {getBooks} from "../../utilities/ApiCalls";
import utils from "../../utilities/utils";



function App() {

  const [books, setBooks,] = useState([])
  const [searchedBooks, setSearchedBooks] = useState('')
  const [favorites, setFavorites] = useState([])

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
console.log(searchedBooks)

  return (
    <div className="App">
      <div className='site-container'>
      <Header/>
        <>
        <SearchBar pushSearchResults={pushSearchResults} searchValue={searchedBooks} setSearchValue={setSearchedBooks}/>
        </>
        <div className='card-display'>
        <h1 className='container-title'>Books</h1>
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
