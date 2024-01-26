import React, { useState, ChangeEvent, useEffect } from 'react';
import { SearchResult } from '@/types/SearchResult';
import S from "./SearchBar.module.css";



export const SearchBar = ({ setResults }) => {
  const [inputText, setInputText] = useState<string>("");
  // const [results, setResults] = useState<SearchResult[]>([]);

  const fetchData = async (query: string) => {
    try {
      
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputText(value);
  };

  const handleResultClick = (result: SearchResult) => {
    // Handle the click on the search result
    // ...

    // Reset the search term and clear the results
    setInputText("");
    setResults([]);
  };

  useEffect(() => {
    // Fetch data when inputText changes
    fetchData(inputText);
  }, [inputText]);

  return (
    <div className={S.inputWrapper}>
      {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            <input
                className={S.input}
                placeholder="Search..."
                value={inputText}
                onChange={handleInputChange}
                
            />

    
    </div>
  );
}

export default SearchBar;
