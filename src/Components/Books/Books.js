import React, {useEffect, useState} from 'react';
import axios from "axios";
// import {Link} from 'react-router-dom';
// import {getAllBooks} from '../../utilities/apiCalls';
// import utils from '../../utilities/utils';

const allWorksURL = 'http://openlibrary.org/authors/OL2162284A/works.json'

const Books = () => {
  const [books, setBooks] = useState([])

    useEffect(() => {
      const fetchBooks = async () => {
        const res = await axios.get(allWorksURL)
        console.log(res.data.entries)
      }
      fetchBooks()
    }, [])

      return (
          <div>
          <h1>Books</h1>
          </div>
  )
}


export default Books;