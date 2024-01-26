import React from "react";
import S from "./SearchResult.module.css";
import Link from 'next/link';

export const SearchResult = ({ result }) => {
    return (
      <Link href={`/movie/${result.id}`} className={S.link}>
        
          <div className={S.searchResult}>{result.title}</div>
        
      </Link>
    );
  };