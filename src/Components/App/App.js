import React from "react";
import Header from '../Header/Header'
import Books from '../Books/Books'
import './_app.scss';

function App() {
  return (
    <div className="App">
      <div className='site-container'>
      <Header/>
        <Books/>
    </div>
      </div>
  );
}

export default App;
