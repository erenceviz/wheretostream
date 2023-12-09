import { Button } from "@mui/material";
import styles from "./Banner.module.css";
import { useEffect, useState } from "react";

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
  const [movieData, setMovieData] = useState([]); 

  useEffect( () => {
    const getMovieData = async () => {
      setIsLoading(true); 
      try{
        const response = await fetch("https://api.themoviedb.org/3/movie/872585?language=en-US&api_key=dafafcbe0ce651423372ac90650e5dad"); 
        const movieData = await response.json(); 
      }catch(e:any){
        setError(e);
      }finally{
        setIsLoading(false); 
      }

      setIsLoading(false); 
      console.log(movieData); 
      setMovieData(movieData); 
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
          src="https://i.redd.it/x36oy3277vcb1.jpg"
          alt=""
        />
        <div className={styles.bannerContentBackground}>
          <div className={styles.gradient}></div>
          <div className={styles.bannerContent}>
            <h5 className={styles.h5}>Watch</h5>
            <h1>{movieData.original_title}</h1>
            <div style={{ display: "flex", gap: "5px" }}>
              {movieMetaData.map((data, index) => (
                <p key={index} className={styles.movieMetaData}>
                  {data}
                </p>
              ))}
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
            src="https://m.media-amazon.com/images/I/71xDtUSyAKL._AC_UF894,1000_QL80_.jpg"
            alt=""
          />
          <div className={styles.infoToPoster}>
            <div className={styles.headlineWithBookmark}>
              <h1>The Curse (2023)</h1>
              <img
                style={{ height: "40px", width: "auto", marginLeft: "auto" }}
                src="./bookmark.png"
                alt="Bookmark"
              />
            </div>
            <h5 className={styles.h5}>151 minutes</h5>
            <p style={{ marginTop: "20px" }}>
              In post-World War II Venice, Poirot, now retired and living in his
              own exile, reluctantly attends a seance. But when one of the
              guests is murdered, it is up to the former detective to once again
              uncover the killer. A Haunting in Venice featuring Kenneth Branagh
              and Kyle Allen is streaming with subscription on Hulu, available
              for purchase on Apple TV, available for purchase on Prime Video,
              and 2 others. It’s a drama and mystery movie with an average IMDb
              audience rating of 6.6 (62,229 votes).
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
            <img
              className={styles.posterActor}
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Cillian_Murphy-2014.jpg"
              alt=""
            />
            <img
              className={styles.posterActor}
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Cillian_Murphy-2014.jpg"
              alt=""
            />
            <img
              className={styles.posterActor}
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Cillian_Murphy-2014.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerNeu;
