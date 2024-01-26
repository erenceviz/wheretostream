import React from "react";
import S from "./SearchResultList.module.css";
import { SearchResult } from "../SearchResult/SearchResult";

export const SearchResultList = ({ results }) => {
    return (
        <div className={S.resultsList}>
            {results.map((result, id) => (
                <SearchResult result={result} key={id} />
            ))}
        </div>
    );
};
