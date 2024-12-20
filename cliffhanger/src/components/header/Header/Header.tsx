import style from "./Header.module.css";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import Search from "../Search/Search/Search";
import YourComponent from "@/components/button/Button";


function Header() {
  const [results, setResults] = useState([]);

  return (
    <div className={style.wrapper}>
      <Link className={style.logoButton} href="/" passHref>
        <Logo />
      </Link>

      <div className={style.searchWrapper}>
        <Search />
      </div>
      <div className={style.buttonWrapper}>
        {/* <Link href="/movies" passHref>
          <YourComponent buttonText="Movies" buttonType="movies" />
        </Link> */}
        <Link href="/movieList" passHref>
          <YourComponent buttonText="Movies & TV Shows" buttonType="tvShows" />
        </Link>
        <Link href="/watchlist">
        <YourComponent buttonText="Make a list!" buttonType="makeList" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
