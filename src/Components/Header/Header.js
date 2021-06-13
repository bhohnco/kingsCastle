import React from "react";
// import { Link } from 'react-router-dom'

const Header = ({ handleChange, input, books}) => {
  return (
      <header className="App-header">
      <h5 className='header-button'>Kings Castle</h5>
    <form className='search-bar'>
      <input
          type='text'
          placeholder='Search By Book Title'
          name='input'
          value= {input}
          onChange={event => handleChange(event)}
      />
      <button className='search-btn'>Search</button>
    </form>
        <nav className='nav-buttons' >
            <h5 className='home header-button'>Home</h5>
        </nav>
      </header>
  );
};

export default Header;