import React from 'react';
import PropTypes from "prop-types";
import '../../assets/kingCovers/kingcollection.jpeg'

const Books = ({books, favoriteButtonComponent, removeFavoriteComponent, favoritesBox, favoritedBooks, searchedBooks }) => {

  const FavoriteComponent = favoriteButtonComponent
  const RemoveComponent = removeFavoriteComponent




  if (searchedBooks.length) {
    const searchBooks = books?.filter(book => {
      return book.title.toLowerCase().includes(searchedBooks.toLowerCase())
    })
    return searchBooks.map(book => {
      const {title, key, covers} = book
      // let first = function(covers) { return !!covers }
      // console.log(covers)
      // let findCoverID = covers.find(first)
      // console.log(findCoverID)

      const bookImage = `http://covers.openlibrary.org/b/id/${covers}-M.jpg`
      return <div className="book-link" key={key}>
        <img className="book-card" style={{
          backgroundImage: `url(${bookImage})`
        }}
             key={key}
             src={bookImage}
             alt={title}
             id={title}
        />
        <FavoriteComponent book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks}/>
        {/*<RemoveComponent book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks}/>*/}
        <h3 className="card-title">{title}</h3>
        <div>
        </div>

      </div>
    })
  }


  if (books.length) {
    return books.map(book => {
      const {title, key, covers} = book

      // let first = function(covers) { return !!covers }
      // console.log(covers)
      // let findCoverID = covers.find(first)
      // console.log(findCoverID)

      const bookImageCover = `http://covers.openlibrary.org/b/id/${covers}-M.jpg`
      return <div className="book-link" key={key}>
        <img className="book-card" style={{
          backgroundImage: `url(${bookImageCover})`
        }}
             key={key}
             src={bookImageCover}
             alt={title}
             id={title}
        />
        <FavoriteComponent book={book} favorites={favoritesBox} favoritedBooks={favoritedBooks}
                           className='overlay d-flex align-items-center justify-content-center'/>
        <h3 className="card-title">{title}</h3>
        <div>
        </div>

      </div>
    })
  } else {
    return null;
  }
};

export default Books;

Books.propTypes = {
  favoritesBox:PropTypes.array,
  book:PropTypes.array,
  favoritedBooks:PropTypes.func,
  favoriteButtonComponent:PropTypes.func,
  removeFavoriteComponent:PropTypes.func,
  key: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.string,
  bookImage: PropTypes.string
};
