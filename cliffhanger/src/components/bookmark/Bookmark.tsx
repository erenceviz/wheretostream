import { useContext } from "react";
import styles from "./Bookmark.module.css";
import { BookmarkContext } from "@/pages/_app";

const BookmarkPage = () => {
  const bookmarkList = useContext(BookmarkContext);
  console.log("BookmarkState: ", bookmarkList);

  return (
    <>
      <h2 className={styles.bookmarkedHeadline}>Your Watchlist</h2>
      <div className={styles.bookmarkContainer}>
        {bookmarkList?.bookmarkState.movies.map((movie) => (
          <div className={styles.bookmarkedMovie} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt=""
            />
            <div className={styles.bookmarkedContent}>
              <h4>{movie.titel}</h4>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookmarkPage;
