import YourComponent from "@/components/button/Button";
import styles from "./Welcome.module.css";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import PopularMovies from "@/types/PopularMovies";

function WelcomePage() {
  const [popularMovies, setPopularMovies] = useState<PopularMovies | null>(
    null
  );
  // const [popularSeries, setPopularSeries] = useState([]);
// const [latestMovies, setLatestMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchCounter, setFetchCounter] = useState(0);


  useEffect(() => {
    const getListData = async () => {
      if (fetchCounter < 10) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
          );

          const popularMoviesData: PopularMovies = await response.json();
          console.log(popularMoviesData);
          setPopularMovies(popularMoviesData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
          setFetchCounter(prevCounter => prevCounter + 1);
        }
      }
    };

    getListData();
  }, [fetchCounter]);

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
          {popularMovies?.results.map((movie) => (
            <div className={styles.item} key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
              <p>Filmtitel</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={styles.container}>
        {([...movieData?.results, ...tvData?.results]
          .filter((item) => {
            if (filter === "All") {
              return true;
            } else if (filter === "Movies") {
              return item instanceof TvListData;
            } else if (filter === "TV Shows") {
              return item instanceof TvListData;
            } else {
              // Handle other filters if needed
              return false;
            }
          })
          .map((item) => (
            <div className={styles.container2} key={item.id}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title || item.original_name}
              />
              <p>{item.title || item.original_name}</p>
              {}
            </div>
          ))) || <p>No results found</p>}
      </div> */}
    </>
  );
}

export default WelcomePage;
