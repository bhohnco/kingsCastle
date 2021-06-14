import React from "react";

const Header = ({ handleChange, input, books}) => {
  return (
      <header className="App-header">
      <h5 className='title'>Kings Castle</h5>
        <nav className='nav-buttons' >
            <h5 className='home header-button'>The place to find all of Stephen Kings works</h5>
        </nav>
      </header>
  );
};

export default Header;