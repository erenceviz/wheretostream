// Header.js

import Button from "@/components/button/Button";
import React, { useState } from "react";
import SearchBar from "../Search/SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import { SearchResultList } from "../Search/SearchResultList/SearchResultList";
import S from "./Header.module.css";
import Search from "../Search/Search/Search";
import YourComponent from "@/components/button/Button";
import Link from "next/link";


function Header() {
  const [results, setResults] = useState([]);

  return (
    <div className={S.wrapper}>
      <Logo />
      <div className={S.searchWrapper}>
        <Search/>
      </div>
      <Link href="/movies" passHref>
        <YourComponent buttonText="Movies" buttonType="movies" />
      </Link>
      <YourComponent buttonText="TV Shows" buttonType="tvShows" />
      <YourComponent buttonText="Make a list!" buttonType="makeList" />
    </div>
  );
}

export default Header;
