import React from 'react';
import backGround from '../assets/kingCovers/janko-ferlic-sfL_QOnmy00-unsplash.jpg'
import {Link} from "react-router-dom";


const BookInfo = ({ selectedBook }) => {
  return (
      <div className='book-card-container' style={{
        backgroundImage: {backGround}
      }}>
        <div className='book-stats-container'>
          <img className='backdrop-img'
              // src={selectedBook.poster_path}
              // alt={selectedBook.book_title}
          />
          <div className='book-stats stats-wrap'>
            <h3 className='book-title'>{selectedBook.title}</h3>
            <Link to="/" style={{textDecoration:'none'}}>
            </Link >
          </div>
        </div>
        <div className="overview-container stats-wrap">
          <p className='book-overview'>{selectedBook.overview}</p>
          <Link to="/" style={{textDecoration:'none'}}>
            <h5 className='home-button'>Return Home</h5>
          </Link >
        </div>
      </div>
  )
}

export default BookInfo;