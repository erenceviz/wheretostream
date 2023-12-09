import React from "react";
import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultList } from "../SearchResultList/SearchResultList";
import S from "./search.module.css";
function Search() {
    const [results, setResults] = useState([]);
    return(
        <div className={S.wrapper}>
            <SearchBar setResults={setResults} />
            <SearchResultList results={results} />
        </div>
    )
}

export default Search;