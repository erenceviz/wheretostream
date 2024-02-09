import { useState, useEffect } from 'react';
import styles from "./RandomMovieBanner.module.css";
const RandomMovieBanner = ({ movieData }) => {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    if (movieData && movieData.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * movieData.results.length);
      setRandomMovie(movieData.results[randomIndex]);
    }
  }, [movieData]);

  return (
    <div className={styles.bannerContainer}>
        <div className={styles.gradientOverlay}></div>
      {randomMovie && (
        <div >
         
          <img className={styles.imageContainer}
            src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
            alt={randomMovie.title || randomMovie.original_name}
          />
          <p className={styles.bannerContent}>{randomMovie.title || randomMovie.original_name}</p>
        </div>
      )}
    </div>
  );
};

export default RandomMovieBanner;
