import React, {useRef} from 'react';

const SearchBar = ({ pushSearchResults }) => {
  const searchValue = useRef()

  return (
      <div className='col col-sm-4'>
        <input
    className='form-control'
    type="text"
    name="input"
    ref={searchValue}
    onChange={() => pushSearchResults(searchValue.current.value)}
    placeholder='Type to search...'
        />
      </div>
  );
}

export default SearchBar;