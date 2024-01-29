import YourComponent from "@/components/button/Button";
import styles from "./Welcome.module.css";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import PopularMovies from "@/types/PopularMovies";
import { TvListData } from "@/types/TvListData";
import Link from 'next/link';

function WelcomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState<PopularMovies | null>(null);
  const [popularSeries, setPopularSeries] = useState<TvListData | null>(null);
  const [releasedSoon, setReleasedSoon] = useState<PopularMovies | null>(null);

  useEffect(() => {
    // Popular Movies
    const getPopularMovies = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
          );
          const popularMoviesData: PopularMovies = await response.json();
          console.log(popularMoviesData);
          setPopularMovies(popularMoviesData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
    };

    // Popular Series
    const getPopularSeries = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`

        );
        const popularSeries: TvListData = await response.json();
        console.log("Popular Series: ", popularSeries);
        setPopularSeries(popularSeries);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    // Released Soon
    const getReleasedSoon = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const releasedSoon: PopularMovies = await response.json();
        console.log("Released Soon: ", releasedSoon);
        setReleasedSoon(releasedSoon);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getPopularMovies();
    getPopularSeries(); 
    getReleasedSoon(); 
  }, []);

  return (
    <>
      <div className={styles.opener}>
        <div className={styles.openerContent}>
          <h2>
            Finde Filme und Serien auf <br /> deinen gewünschten <br />
            Streaming-Portalen
          </h2>
          <Button className={styles.getStartedBtn} variant="contained">
            Get Started!
          </Button>
        </div>
        <div className={styles.threePopularMovies}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
            alt=""
          />
          <img
            src="https://static.posters.cz/image/750/poster/avatar-limited-ed-one-sheet-sun-i7182.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/71qxaSCcuAL._AC_UF1000,1000_QL80_.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.lists}>
        <div className={styles.container}>
          <h4>Popular Movies</h4>
          <div className={styles.singleListDiv}>
            {popularMovies?.results.slice(0,8).map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`} className={styles.link}>
              <div className={styles.item} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </div>
              <a/>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.container}>
          <h4>Popular Series</h4>
          <div className={styles.singleListDiv}>
            {popularSeries?.results.slice(0,8).map((series) => (
              <Link key={series.id} href={`/movie/${series.id}`} className={styles.link}>
              <div className={styles.item} key={series.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${series.poster_path}`}
                  alt={series.title}
                />
                <p>{series.original_name}</p>
              </div>
              <a/>
              </Link>
            ))}
          </div>
        </div>
        
        <div className={styles.container}>
          <h4>Released Soon</h4>
          <div className={styles.singleListDiv}>
            {releasedSoon?.results.slice(0,8).map((movie) => (
              <Link key={movie.id} href={`/movie/${movie.id}`} className={styles.link}>
                <a href=""></a>
              <div className={styles.item} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </div>
              <a/>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default WelcomePage;
