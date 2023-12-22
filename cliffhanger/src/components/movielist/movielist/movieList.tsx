import { useState, useEffect } from "react";
import FilterButton from "@/components/movielist/filterbutton/filterButton";
import { MovieListData } from "@/types/MovieListData";
import styles from "./movieList.module.css";


const MovieList = () => {
  const [error, setError] = useState();
  const [movieData, setMovieData] = useState<MovieListData | null>(null);
  const [tvData, setTvData] = useState<MovieListData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     setIsLoading(true);
  //     try {
  //       let apiUrl =
  //         "https://api.themoviedb.org/3/movie/872585?language=en-US&api_key=dafafcbe0ce651423372ac90650e5dad";
  //       if (filter !== "all") {
  //         apiUrl += `&with_genres=${filter}`;
  //       }

  //       const response = await fetch(apiUrl);
  //       const movieData: MovieData = await response.json();
  //       setMovieData(movieData);
  //     } catch (e: any) {
  //       setError(e);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchMovies();
  // }, [filter]);

  useEffect(() => {
    const getMovieData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
        const movieData: MovieListData = await response.json();
        console.log(movieData);
        setMovieData(movieData);

        const tvresponse = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
        const tvData: MovieListData = await tvresponse.json();
        setTvData(tvData);

      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieData();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    
    <div>
      <div className={styles.filterButtonContainer}>
        <FilterButton
          label={"Genre"}
          options={["All", "Action", "History", "Drama"]}
        />
        <FilterButton
          label={"Type"}
          options={["Movies & TV Shows", "Movies", "TV Shows"]}
        />
        <FilterButton
          label={"Service"}
          options={["Netflix", "Amazon Prime", "hulu", "Disney Plus"]}
        />
      </div>
      <div className={styles.container}>
        
          {movieData?.results?.map((movie) => (
            <div className={styles.container2} key={movie.id}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
              {/* Display other movie details */}
            </div>
          ))}
          {tvData?.results?.map((show) => (
            <div className={styles.container2} key={show.id}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
                alt={show.original_name}
              />
              <p>{show.original_name}</p>
              {/* Display other movie details */}
            </div>
          ))}
      
      </div>
    </div>
  );
};

export default MovieList;
