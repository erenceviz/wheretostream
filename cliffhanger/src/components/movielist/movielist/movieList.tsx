import { useState, useEffect } from "react";
import FilterButton from "@/components/movielist/filterbutton/filterButton";
import { MovieListData } from "@/types/MovieListData";
import { TvListData } from "@/types/TvListData";
import { GenreData, TvGenre, MovieGenre } from "@/types/GenreData";
import styles from "./movieList.module.css";
import { fetchMovieGenres, fetchTVGenres } from "../fetchAPI/fetchGenres";
import { fetchMovieData, fetchTvData } from "../fetchAPI/fetchData";
import RandomMovieBanner from "@/components/movielist/randomMovieBanner/RandomMovieBanner";
import Link from 'next/link';


const MovieList = () => {
  const [error, setError] = useState<any>(null); // Specify the type explicitly
  const [movieData, setMovieData] = useState<MovieListData | null>(null);
  const [tvData, setTvData] = useState<TvListData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("Movies & TV Shows");
  const [genreFilter, setGenreFilter] = useState('')
  const [movieGenres, setMovieGenres] = useState<GenreData>({ genres: [] });
  const [tvGenres, setTvGenres] = useState<GenreData>({ genres: [] });


  useEffect(() => {
    const getMovieData = async () => {
      setIsLoading(true);
      try {
        // const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
        const movieData: MovieListData = await fetchMovieData();
        setMovieData(movieData);

        // const tvresponse = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
        const tvData: TvListData = await fetchTvData();
        
        setTvData(tvData);

        const fetchedMovieGenres:GenreData = await fetchMovieGenres();
        console.log(fetchedMovieGenres)
        // const movieResponse = await fetch(
        //   `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        // );
        // const fetchedMovieGenres = await movieResponse.json();
        
        setMovieGenres(fetchedMovieGenres);

        const fetchedTVGenres:GenreData = await fetchTVGenres();
        setTvGenres(fetchedTVGenres);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieData();
  }, []);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };
  
  const allData = [...(movieData?.results || []), ...(tvData?.results || [])];
  // const allGenres = [...movieGenres.genres || [], ...tvGenres.genres || []]
  // console.log(movieGenres || "nonoe")

  const filteredData = allData.filter((item) => {
    if (filter === "Movies & TV Shows") {
      return true;
    } else if (filter === "Movies") {
      return 'original_title' in item;
    } else if (filter === "TV Shows") {
      return 'original_name' in item;
    }

    // console.log(allGenres)
    // Handle other filters if needed
    return false;
  });

  

  return (
    <div>
      <RandomMovieBanner movieData={movieData} />
      <div className={styles.filterButtonContainer}>
        {/* <FilterButton
          label={"Genre"}
          options={["All", "Action", "History", "Drama"]}
          onSelect={(newFilter) => setFilter(newFilter)}
        /> */}
        <FilterButton
          label={"Movies & TV Shows"}
          options={["Movies & TV Shows", "Movies", "TV Shows"]}
          onSelect={(newFilter) => handleFilterChange(newFilter)}
        />
        {/* <FilterButton
          label={"Service"}
          options={["Every Service", "Netflix", "Amazon Prime", "hulu", "Disney Plus"]}
          onSelect={(newFilter) => console.log("Service filter:", newFilter)}
        /> */}
      </div>
      <div className={styles.container}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Link key={item.id} className={styles.link} href={ 'original_name' in item ? `/tv/${item.id}` : `/movie/${item.id}`} passHref>
              <div className={styles.container2}>
                <img
                  className={styles.poster}
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title || item.original_name}
                />
                <p>{item.title || item.original_name}</p>
                {/* Display other movie details */}
              </div>
            </Link>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
