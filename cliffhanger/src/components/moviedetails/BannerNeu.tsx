import { Button } from "@mui/material";
import styles from "./Banner.module.css";
import { useEffect, useState } from "react";
import { MovieData } from "@/types/MovieData"; 
import { CastData } from "@/types/CastData";

const movieMetaData = ["Comedy", "Action", "Drama", "18+", "2023"];

function BannerNeu() {
  // Logic to get specific movie data for movie with id= "x"
  // const apiKey = `${process.env.API_KEY}`; 
  // const getMovieData = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}&query=${query}"
  //   ).then(res => res.json()).then(json => console.log(json))
  // };
  const [error, setError] = useState(); 
  const [isLoading, setIsLoading] = useState(false); 
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [castData, setCast] = useState<CastData | null>(null);

  useEffect(() => {
    const getMovieData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/872585?language=en-US&api_key=dafafcbe0ce651423372ac90650e5dad");
        const movieData: MovieData = await response.json();
        setMovieData(movieData);
        // const releaseDate = new Date(movieData?.release_date);
        // const releaseYear = releaseDate.getFullYear();
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/872585/credits?api_key=dafafcbe0ce651423372ac90650e5dad`);
        const creditsData: CastData = await creditsResponse.json();
        setCast(creditsData);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieData();
  }, []);


  if(isLoading){
    return <div>Loading...</div>; 
  }

  if(error){
    return <div>Something went wrong! Please try again.</div>
  }

  return (
    <>
      <div className={styles.bannerContainer}>
        <img
          className={styles.bannerImage}
          // src="https://i.redd.it/x36oy3277vcb1.jpg"
          src={`https://image.tmdb.org/t/p/original${movieData?.backdrop_path}`}
          alt=""
        />
        <div className={styles.bannerContentBackground}>
          <div className={styles.gradient}></div>
          <div className={styles.bannerContent}>
            <h5 className={styles.h5}>Watch</h5>
            <h1>{movieData?.title}</h1>
            <div style={{ display: "flex", gap: "5px" }}>
            {movieData?.genres.map((genre) => (
                  <p key={genre.id} className={styles.movieMetaData}>
                    {genre.name}
                    
                  </p>
                ))}
                <p className={styles.movieMetaData}>{movieData?.release_date}</p>
              
            </div>
            <Button className={styles.playTrailerBtn} variant="contained">
              Play Trailer
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.movieDetails}>
        <div className={styles.posterAndInfo}>
          <img
            className={styles.poster}
            // src="https://m.media-amazon.com/images/I/71xDtUSyAKL._AC_UF894,1000_QL80_.jpg"
            src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
            alt=""
          />
          <div className={styles.infoToPoster}>
            <div className={styles.headlineWithBookmark}>
              <h1>{movieData?.title}</h1>
              <img
                style={{ height: "40px", width: "auto", marginLeft: "auto" }}
                src="./bookmark.png"
                alt="Bookmark"
              />
            </div>
            <h5 className={styles.h5}>{movieData?.runtime} minutes</h5>
            <p style={{ marginTop: "20px" }}>
              {movieData?.overview}
            </p>
          </div>
        </div>
        <div className={styles.whereToWatch}>
          <h4 style={{ marginBottom: "1rem" }}>Where to watch (The Curse)</h4>
          <div className={styles.tableWhereToWatch}>
            <div className={styles.watchItem}>
              <img
                className={styles.imgPlatform}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png"
                alt=""
              />
              <p>Prime Video</p>
              <a href="">
                <img
                  className={styles.playButton}
                  src="./play.png"
                  alt="Play Button"
                />
              </a>
            </div>
            <div className={styles.watchItem}>
              <img
                className={styles.imgPlatform}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png"
                alt=""
              />
              <p>Prime Video</p>
              <a href="">
                <img
                  className={styles.playButton}
                  src="./play.png"
                  alt="Play Button"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.leadingActors}>
          <h4 style={{ marginBottom: "1rem" }}>Leading Actors</h4>
          <div className={styles.tableLeadingActors}>
          {castData?.cast.slice(0, 4).map((actor) => (
            <div className={styles.castDiv}>
            <img
              key={actor.id}
              className={styles.posterActor}
              src={`https://www.themoviedb.org/t/p/w276_and_h350_face${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            </div>
          ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default BannerNeu;
