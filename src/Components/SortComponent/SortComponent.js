import React, {useState, useEffect} from 'react';
import Books from '../Books/Books'
// import SearchBar from "../SearchBar/SearchBar";

const SortComponent = ({books, sortedValue, setSortValue}) => {

  const [sortType, setSortType] = useState('Sort Books');


  useEffect(() => {

    const sortArray = type => {
      const types = {
        goodReadsRank: 'goodReadsRank',
        pageCount: 'pageCount',
        dateReleased: 'dateReleased',
      };
      const sortProperty = types[type];
      const sorted = [...books].sort((a, b) => b[sortProperty] - a[sortProperty]);

      setSortValue(sorted);
    };
    sortArray(sortType);
  }, [sortType]);

  return (
      <select  className='dropdown select'
               onChange={(e) => setSortType(e.target.value)}>
      <option placeholder='Select contact' value="goodReadsRank">Good Reads Rank</option>
        <option value="pageCount">Page Count</option>
        <option value="dateReleased">Date Released</option>
      </select>

  )
}

export default SortComponent;