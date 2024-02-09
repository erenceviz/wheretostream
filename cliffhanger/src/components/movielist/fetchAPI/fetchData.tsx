export const fetchMovieData = async () =>{
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const movieData = await response.json();
        return movieData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };



  export const fetchTvData = async () =>{
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
        const tvData = await response.json();
        return tvData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };