import React from "react";
// import { Link } from 'react-router-dom'

const Header = ({ handleChange, input, books}) => {
  return (
      <header className="App-header">
      <h5 className='header-button'>Kings Castle</h5>
        <nav className='nav-buttons' >
            <h5 className='home header-button'>Home</h5>
        </nav>
      </header>
  );
};

export default Header;