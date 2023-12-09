import React from "react";
import S from "./SearchResult.module.css";

export const SearchResult = ({ result }) => {
    return <div className={S.searchResult}>{result.title} </div>;
}