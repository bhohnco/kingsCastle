import React, {useRef} from 'react';

const SearchBar = ({ pushSearchResults }) => {
  const searchValue = useRef()

  return (
      <div className='search'>
        <input
    className='search-bar'
    type="text"
    name="input"
    ref={searchValue}
    onChange={() => pushSearchResults(searchValue.current.value)}
    placeholder='Type to search books...'
        />
      </div>
  );
}

export default SearchBar;