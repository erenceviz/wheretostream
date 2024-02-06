import { useContext } from "react";
import styles from "./Bookmark.module.css";
import { BookmarkActionOptions, BookmarkContext } from "@/pages/_app";
import Button from "@mui/material/Button";

const BookmarkPage = () => {
  const { bookmarkState, dispatch } = useContext(BookmarkContext);
  console.log("BookmarkState: ", bookmarkState);

  const handleClearList = () => {
    // Aktion auslösen, um die Liste der Bookmarks zurückzusetzen
    dispatch({ type: BookmarkActionOptions.RESET, payload: null });
  };

  return (
    <>
      <h2 className={styles.bookmarkedHeadline}>Your Watchlist</h2>
      <div className={styles.bookmarkContainer}>
        {bookmarkState.movies.length === 0 ? (
          <p className={styles.emptyListWarning}>You have no bookmarked movies yet</p>
        ) : (
          bookmarkState.movies.map((movie) => (
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
          ))
        )}
      </div>
      <Button
        className={styles.clearListBtn}
        variant="contained"
        onClick={handleClearList}
      >
        Clear List
      </Button>
    </>
  );
};

export default BookmarkPage;
