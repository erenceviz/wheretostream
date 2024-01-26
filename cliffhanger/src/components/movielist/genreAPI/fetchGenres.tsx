export const fetchMovieGenres = async () => {
    try {
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const movieGenresData = await movieResponse.json();
      console.log(movieGenresData)
      return movieGenresData.genres;
    } catch (error) {
      console.error("Error fetching genres:", error);
      throw error;
    }
  };

  export const fetchTVGenres = async () => {
    try {
      const tvResponse = await fetch(
        `https://api.themoviedb.org/3/genre/tv/list?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const TvGenresData = await tvResponse.json();
      return TvGenresData.genres;
    } catch (error) {
      console.error("Error fetching genres:", error);
      throw error;
    }
  };