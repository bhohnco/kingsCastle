import React, { useEffect } from "react";
import Books from '../Books/Books'
import './_app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Books/>
      </header>
    </div>
  );
}

export default App;
