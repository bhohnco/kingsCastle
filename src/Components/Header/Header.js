import React from "react";
import {Link} from "react-router-dom"

const header = () => {
  return (
      <header className="App-header">
      <h5 className='title'>Kings Castle</h5>
          <div className='page-quote'>The place to find all of Stephen Kings works</div>
          <Link to = "/readinglist" >
            <button className="reading-list-button">Reading-List</button>
          </Link>
      </header>
  );
};

export default header;