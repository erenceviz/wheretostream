import { useState, useEffect } from "react";

import FilterButton from "@/components/movielist/filterbutton/FilterButton";
import { MovieData } from "@/types/MovieData"; 

const MovieList = () => {
    const [error, setError] = useState(); 
    const [movieData, setMovieData] = useState<MovieData | null>(null);
    const [isLoading, setIsLoading] = useState(false); 
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        const fetchMovies = async () => {
          setIsLoading(true);
          try {
            let apiUrl= "https://api.themoviedb.org/3/movie/872585?language=en-US&api_key=dafafcbe0ce651423372ac90650e5dad";
            if (filter !== "all") {
                apiUrl += `?genre=${filter}`;
              }
            
            const response = await fetch(apiUrl);
            const movieData: MovieData = await response.json();
            setMovieData(movieData);
            
            const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/872585/credits?api_key=dafafcbe0ce651423372ac90650e5dad`);
            
          } catch (e: any) {
            setError(e);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchMovies();
      }, [filter]);

      const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
      };


      return (
        <div>
            <FilterButton
                label="Genre"
                options={["Action", "History", "Drama"]}
                onSelect={handleFilterChange}
            />
            {/* <FilterButton
                label="All"
                options={["Movies", "History", "Drama"]}
                onSelect={handleFilterChange}
            /> */}
            <div>
                {/* {movieData?.genres.map((genre) => (
                  <p key={genre.id}>
                    {genre.name}
                    
                  </p>
                ))} */}
            </div>
            <div>
              {movieData?.map((movie) =>
                <p key={movieData.id}>{movieData.title}</p>
              )}
            </div>

        </div>
      )
}

export default MovieList;


