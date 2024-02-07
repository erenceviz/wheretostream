import styles from "./Details.module.css";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MovieData } from "@/types/MovieData";
import { CastData } from "@/types/CastData";
import { BookmarkActionOptions, BookmarkContext } from "@/pages/_app";
import { IMovieTrailerResponse } from "@/types/MovieTrailer";
import Modal from 'react-modal';

interface IDetailsPage {
  movieId: string | string[] | undefined;
}

interface BookmarkIconAttributes {
  className?: string;
}


// source: https://github.com/parcel-bundler/parcel/discussions/7910#discussioncomment-5169513
export const BookmarkIcon: React.FC<BookmarkIconAttributes> = ({
  className = "",
}: BookmarkIconAttributes) => {
  return (
    <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0,0,256,256"
    width="60px"
    height="60px"
    >
      <g
        fill="#ffffff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
        >
        <g transform="scale(8.53333,8.53333)">
          <path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z"></path>
        </g>
      </g>
    </svg>
  );
};

function DetailsPage({ movieId }: IDetailsPage) {
  // const { id } = useParams();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [castData, setCast] = useState<CastData | null>(null);
  const [videoData, setTrailer] = useState<IMovieTrailerResponse | null >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { bookmarkState, dispatch } = useContext(BookmarkContext);

  useEffect(() => {
    if (typeof movieId === "undefined") return;
    const getMovieData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const movieData: MovieData = await response.json();
        setMovieData(movieData);

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const creditsData: CastData = await creditsResponse.json();
        setCast(creditsData);

        const videoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const videoData: IMovieTrailerResponse = await videoResponse.json();
        setTrailer(videoData);

        console.log("Trailer Data: ", videoData);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieData();
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }

  const movieInList: boolean = Boolean(
    bookmarkState.movies &&
      movieId &&
      bookmarkState.movies.find((ele) => ele.id === parseInt(movieId as string))
  );

  const toggleBookmark = () => {
    dispatch({
      type: movieInList
        ? BookmarkActionOptions.DELETE
        : BookmarkActionOptions.ADD,
      payload: {
        id: movieData!.id,
        titel: movieData!.title,
        description: movieData!.overview,
        poster_path: movieData!.poster_path,
      },
    });
  };

  // function openTrailerInNewTab(trailerLink: string) {
  //   window.open(trailerLink, "_blank");
  // }
  
  function findTrailerKey(responseData : IMovieTrailerResponse) {
    const trailerObject = responseData?.results.find(
      (item) => item.type === "Trailer"
    );

    return trailerObject ? trailerObject.key : null;
  }

  // Verwende die Funktion, um den Trailer-Schlüssel zu finden
  const trailerKey = findTrailerKey(videoData); // https://www.youtube.com/watch?v=${trailerKey}

  return (
    <>
      <div className={styles.imageBlocker}>&nbsp;</div>
      <div className={styles.bannerContainer}>
        <img
          className={styles.bannerImage}
          src={
            movieData?.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movieData?.backdrop_path}`
              : ""
          }
          alt=""
        />

        <div className={styles.bannerContentBackground}>
          <div className={styles.gradient}></div>
          <div className={styles.bannerContent}>
            <h2 className={styles.h5}>Watch</h2>
            <h1>{movieData?.title}</h1>
            <div style={{ display: "flex", gap: "5px" }}>
              {movieData?.genres.map((genre) => (
                <p key={genre.id} className={styles.movieMetaData}>
                  {genre.name}
                </p>
              ))}
              <p className={styles.movieMetaData}>
                {movieData?.release_date.slice(0, 4)}
              </p>
            </div>
            <Button
              className={styles.playTrailerBtn}
              variant="contained"
              onClick={() => setIsModalOpen(true)}
              >Play Trailer
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.movieDetails}>
      {isModalOpen && (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Trailer Modal"
      >
        {trailerKey && (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
    )}
        <div className={styles.posterAndInfo}>
          <img
            className={styles.poster}
            src={
              movieData?.poster_path
                ? `https://image.tmdb.org/t/p/w300${movieData?.poster_path}`
                : ""
            }
          />
          <div className={styles.infoToPoster}>
            <div className={styles.headlineWithBookmark}>
              <h1>{movieData?.title}</h1>
              <svg
                style={{ height: "40px", width: "auto", marginLeft: "auto" }}
                onClick={toggleBookmark}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                width="60px"
                height="60px"
              >
                <g
                  fill={movieInList ? "gold" : "white"}
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M23,27l-8,-7l-8,7v-22c0,-1.105 0.895,-2 2,-2h12c1.105,0 2,0.895 2,2z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <h4 className={styles.h4}>{movieData?.runtime} minutes</h4>
            <p style={{ marginTop: "20px" }}>{movieData?.overview}</p>
          </div>
        </div>
        <div className={styles.whereToWatch}>
          <h4 style={{ marginBottom: "1rem" }}>
            Where to watch {movieData?.title}
          </h4>
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
              <div key={actor.id} className={styles.castDiv}>
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

export default DetailsPage;
