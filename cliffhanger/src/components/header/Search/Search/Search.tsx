import style from "./search.module.css";
import React, {useState} from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResultList } from "../SearchResultList/SearchResultList";

function Search() {
    const [results, setResults] = useState([]);
    return(
        <div className={style.wrapper}>
            <SearchBar setResults={setResults} />
            <SearchResultList results={results} />
        </div>
    )
}

export default Search;