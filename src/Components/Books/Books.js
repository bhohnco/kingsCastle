import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
import {getBooks} from '../../utilities/ApiCalls';
import utils from '../../utilities/utils';
import kingCollection from '../../assets/kingCovers/kingcollection.jpeg'

const Books = () => {
  const [books, setBooks] = useState([])

    useEffect(() => {
      const fetchBooks = async () => {
        const bookData = await getBooks()
        const narrowObject = bookData.entries
        // console.log(narrowObject)
        utils.removeDuplicates(narrowObject)
        // console.log(narrowObject)
        setBooks(narrowObject)
      }
      fetchBooks()
    }, [])




  return books.map (book => {
    const {title, key, covers} = book
    const bookImage = `http://covers.openlibrary.org/b/id/${covers}-M.jpg`
    const fulfilled = true;
        return <div className="book-link" key={key}>
          {fulfilled ? (
          <img className="book-card" style={{
            backgroundImage: `url(${bookImage})`}}
               key={key}
               src={bookImage}
               alt={title}
               id={title}
          /> ) : (
            <img className="book-card" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlc9PP7wQNl70osbYG4XhHLgEGnKATtA2tNzaCnoXfRCQ3CMugQsMev9Ar_xHdrCkOL3fz3YiwRw&usqp=CAc)"}}
                 key={key}
                 src={bookImage}
                 alt={title}
                 id={title}/>
              )}
          <h3 className="card-title">{title}</h3>
        </div>
  })
}





export default Books;

// const addBookCovers = (covers) =>{
//   if(covers === ''){
//     bookImage = {kingCollection}
//   }else {
//     bookImage = `http://covers.openlibrary.org/b/id/${covers}-M.jpg`
//   }