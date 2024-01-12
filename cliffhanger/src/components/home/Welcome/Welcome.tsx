import YourComponent from "@/components/button/Button";
import styles from "./Welcome.module.css";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import PopularMovies from "@/types/PopularMovies";
import { jsonDataPopularMovies } from "@/types/PopularMovies";

// const [popularSeries, setPopularSeries] = useState([]);
// const [latestMovies, setLatestMovies] = useState([]);

function WelcomePage() {
  const [popularMovies, setPopularMovies] = useState<PopularMovies | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getListData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const popularMovies: PopularMovies = await response.json();
        console.log(popularMovies);
        setPopularMovies(popularMovies);
        const seriesResponse = await fetch(
          `https://api.themoviedb.org/3/movie/872585/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        // const popularSeries = await seriesResponse.json();
        // setPopularSeries(popularSeries);
        // const latestMovieResponse = await fetch(
        //   `https://api.themoviedb.org/3/movie/872585/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        // );
        // const latestMovies = await latestMovieResponse.json();
        // setLatestMovies(latestMovies);
      } finally {
        setIsLoading(false);
      }
    };

    getListData();
  }, []);

  return (
    <>
      <div className={styles.opener}>
        <div className={styles.openerContent}>
          <h2>
            Finde Serien und Filme auf <br /> deinen gewünschten <br />{" "}
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
        <div className={styles.singleListDiv}>
          <h4 style={{ marginBottom: "1rem" }}>PopularMovies</h4>
          <div className={styles.item}>
            <img src="https://m.media-amazon.com/images/I/81oMfvordkL._AC_UF1000,1000_QL80_.jpg" />
            <p>Filmtitel</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
