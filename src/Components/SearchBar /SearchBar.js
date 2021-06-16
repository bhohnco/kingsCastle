import React, {useRef} from 'react';
import PropTypes from 'prop-types'

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

SearchBar.prototype = {
  pushSearchResults: PropTypes.func,
  searchedBooks:PropTypes.string,
  setSearchedBooks:PropTypes.func,
  displayErrorMessage: PropTypes.func
}
export default SearchBar;