import React, { useState, useEffect} from "react";
import Header from '../Header/Header'
import SearchBar from "../SearchBar /SearchBar";
import Books from '../Books/Books'
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CompletedBookButton from "../CompletedBookButton/CompletedBookButton";
import './_app.scss';


function App() {

  const [searchedBooks, setSearchedBooks] = useState([])
  const [favorites, setFavorites] = useState([])
  const [completedBooks, setCompletedBooks] = useState([])

  const getBookRequest = async (searchValue) => {
    const url = `http://openlibrary.org/search.json?title=${searchValue}`;
    const response = await fetch(url);
    console.log(response)
    const responseJson = await response.json();

    if (responseJson.Search) {
      setSearchedBooks(responseJson.Search);
    }
  };

  useEffect(() => {
    getBookRequest(searchedBooks);
  }, [searchedBooks]);


console.log(favorites)

  return (
    <div className="App">
      <div className='site-container'>
      <Header/>
        <>
        <SearchBar searchValue={searchedBooks} setSearchValue={setSearchedBooks}/>
        </>
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
