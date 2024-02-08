import React from "react";
import S from "./SearchResult.module.css";
import Link from 'next/link';

export const SearchResult = ({ result, handleResultClick }) => {
    return (
      <Link href={`/movie/${result.id}`} className={S.link} onClick={() =>handleResultClick(result)}>
        
          <div className={S.searchResult}>{result.title}</div>
        
      </Link>
    );
  };