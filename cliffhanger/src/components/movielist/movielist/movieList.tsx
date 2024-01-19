import { useState, useEffect } from "react";
import FilterButton from "@/components/movielist/filterbutton/filterButton";
import { MovieListData } from "@/types/MovieListData";
import { TvListData } from "@/types/TvListData";
import styles from "./movieList.module.css";

const MovieList = () => {
  const [error, setError] = useState<any>(null); // Specify the type explicitly
  const [movieData, setMovieData] = useState<MovieListData | null>(null);
  const [tvData, setTvData] = useState<TvListData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const getMovieData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
        const movieData: MovieListData = await response.json();
        setMovieData(movieData);

        const tvresponse = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
        const tvData: TvListData = await tvresponse.json();
        setTvData(tvData);
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

  const filteredData = allData.filter((item) => {
    if (filter === "Movies & TV Shows") {
      return true;
    } else if (filter === "Movies") {
      return 'original_title' in item;
    } else if (filter === "TV Shows") {
      return 'original_name' in item;
    }
    // Handle other filters if needed
    return false;
  });

  return (
    <div>
      <div className={styles.filterButtonContainer}>
        <FilterButton
          label={"Genre"}
          options={["All", "Action", "History", "Drama"]}
          onSelect={(newFilter) => setFilter(newFilter)}
        />
        <FilterButton
          label={"Type"}
          options={["Movies & TV Shows", "Movies", "TV Shows"]}
          onSelect={(newFilter) => handleFilterChange(newFilter)}
        />
        <FilterButton
          label={"Service"}
          options={["Every Service", "Netflix", "Amazon Prime", "hulu", "Disney Plus"]}
          onSelect={(newFilter) => console.log("Service filter:", newFilter)}
        />
      </div>
      <div className={styles.container}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className={styles.container2} key={item.id}>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title || item.original_name}
              />
              <p>{item.title || item.original_name}</p>
              {/* Display other movie details */}
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
