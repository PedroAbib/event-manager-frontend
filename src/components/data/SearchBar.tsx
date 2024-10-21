import React from 'react';
import '../../styles/data/SearchBar.css'
import { LuSearch } from "react-icons/lu";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  return (
    <div className='search-bar-container'>
      <LuSearch className='search-icon'/>
      <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="search-input"
      />
    </div>
  );
};

export default SearchBar;
