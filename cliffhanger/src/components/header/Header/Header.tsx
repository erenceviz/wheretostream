// Header.js

import Button from "@/components/button/Button";
import React, { useState } from "react";
import SearchBar from "../Search/SearchBar/SearchBar";
import Logo from "../Logo/Logo";
import { SearchResultList } from "../Search/SearchResultList/SearchResultList";
import S from "./Header.module.css";
import Search from "../Search/Search/Search";
import YourComponent from "@/components/button/Button";


function Header() {
  const [results, setResults] = useState([]);

  return (
    <div className={S.wrapper}>
      <Logo />
      <div className={S.searchWrapper}>
        <Search/>
      </div>
      <YourComponent buttonText="Movies" buttonType="movies" />
      <YourComponent buttonText="TV Shows" buttonType="tvShows" />
      <YourComponent buttonText="Make a list!" buttonType="makeList" />
    </div>
  );
}

export default Header;
