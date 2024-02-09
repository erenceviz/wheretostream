import styles from "./Details.module.css";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MovieData } from "@/types/MovieData";
import { CastData } from "@/types/CastData";
import { BookmarkActionOptions, BookmarkContext } from "@/pages/_app";
import { IMovieTrailerResponse } from "@/types/MovieTrailer";
import Modal from 'react-modal';
import { StreamingService } from "@/pages/api/streamingService";
import { Stream } from "stream";
import { TvData2 } from "@/types/TvData2";
import MovieRatingForm from "./MovieRatingFormular";

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

export function DetailsPage({ itemId }: IDetailsPage) {
  // const { id } = useParams();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [tvData, setTvData] = useState<TvData2 | null>(null);
  const [castData, setCast] = useState<CastData | null>(null);
  const [videoData, setTrailer] = useState<IMovieTrailerResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [streamingServices, setStreamingServices] = useState<StreamingService[]>([]); 
  const [platforms, setPlatforms] = useState<StreamingService[]>([]);


  const { bookmarkState, dispatch } = useContext(BookmarkContext);

  useEffect(() => {
    if (typeof itemId === "undefined") return;
  
    const getMediaData = async () => {
      setIsLoading(true);
  
      try {
        let mediaType: string;
        let mediaDataEndpoint: string;
        let creditsEndpoint: string;
  
        // Determine the type of media based on the URL path
        const isMovie = window.location.pathname.startsWith("/movie");
  
        if (isMovie) {
          mediaType = "movie";
          mediaDataEndpoint = `https://api.themoviedb.org/3/movie/${itemId}`;
        } else {
          mediaType = "tv";
          mediaDataEndpoint = `https://api.themoviedb.org/3/tv/${itemId}`;
        }
  
        // Fetch media data
        const mediaResponse = await fetch(
          `${mediaDataEndpoint}?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const mediaData: MovieData | TvData2 = await mediaResponse.json();
  
        // Fetch credits data
        const creditsResponse = await fetch(
          `${mediaDataEndpoint}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const creditsData: CastData = await creditsResponse.json();
  
        // Fetch video data
        const videoResponse = await fetch(
          `${mediaDataEndpoint}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const videoData: IMovieTrailerResponse = await videoResponse.json();
          console.log("media", mediaData)
        // Set state based on the type of media
        if (mediaType === "movie") {
          setMovieData(mediaData as MovieData);
        } else {
          console.log(mediaData)
          setTvData(mediaData as TvData);
        }
        console.log(tvData)
        setCast(creditsData);
        setTrailer(videoData);
  
        // Fetch streaming services
        const streamingResponse = await fetch("/api/streamingService");
        if (!streamingResponse.ok) {
          throw new Error("Failed to fetch streaming services");
        }
        const streamingData: StreamingService[] = await streamingResponse.json();
        setStreamingServices(streamingData);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
  
    getMediaData();
  }, [itemId]);
  

    useEffect(() => {
      if (movieData && movieData.title && streamingServices.length > 0) {
        const foundPlatforms = findStreamingPlatforms();
        setPlatforms(foundPlatforms);
        console.log("foundPlatforms", foundPlatforms);
      }
    }, [movieData, streamingServices]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong! Please try again.</div>;
  }

  const findStreamingPlatforms = () => {
    if (!movieData?.title) return []; 

    const platforms = streamingServices.filter(service => service.movies.includes(movieData?.title));
    console.log("available platforms:", platforms)
    return platforms;
  };

  // Function to render streaming platform links/buttons
  // const renderStreamingPlatforms = () => {
  //   const platforms = findStreamingPlatforms();
  //   if (platforms.length === 0) {
  //     return <p>This movie is not available on any streaming platform.</p>;
  //   }};

  const movieInList: boolean = Boolean(
    bookmarkState.movies &&
      itemId &&
      bookmarkState.movies.find((ele) => ele.id === parseInt(itemId as string))
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

  function findTrailerKey(responseData: IMovieTrailerResponse) {
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
          (movieData && movieData?.backdrop_path) || (tvData && tvData?.backdrop_path)
            ? `https://image.tmdb.org/t/p/original${movieData?.backdrop_path || tvData?.backdrop_path}`
            : ""
        }
        alt=""
      />

      <div className={styles.bannerContentBackground}>
        <div className={styles.gradient}></div>
        <div className={styles.bannerContent}>
          <h2 className={styles.h5}>Watch</h2>
          <h1>{movieData?.title || tvData?.name}</h1>
          <div style={{ display: "flex", gap: "5px" }}>
            {(movieData || tvData) &&
              (movieData?.genres || tvData?.genres).map((genre) => (
                <p key={genre.id} className={styles.movieMetaData}>
                  {genre.name}
                </p>
              ))}
            <p className={styles.movieMetaData}>
              {(movieData && movieData?.release_date) || (tvData && tvData?.first_air_date)?.slice(0, 4)}
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
            (movieData && movieData?.poster_path) || (tvData && tvData?.poster_path)
              ? `https://image.tmdb.org/t/p/w300${movieData?.poster_path || tvData?.poster_path}`
              : ""
          }
        />
        <div className={styles.infoToPoster}>
          <div className={styles.headlineWithBookmark}>
            <h1>{movieData?.title || tvData?.name}</h1>
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
          <h4 className={styles.h4}>{movieData?.runtime || (tvData && tvData?.episode_run_time[0])} minutes</h4>
          <p style={{ marginTop: "20px" }}>{movieData?.overview || tvData?.overview}</p>
        </div>
      </div>
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
            style={{
              overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                zIndex: 1000
              },
              content: {
                position: 'absolute',
                top: '50 %',
                left: '50 %',
                border: 'none',
                background: 'transparent',
                overflow: 'auto',
                outline: 'none',
              }
            }}
          >
            {trailerKey && (
              <iframe
                width="750"
                height="420"
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
            {platforms.map(service => (
              <div key={service.id} className={styles.watchItem}>
                {/* Display streaming service logo */}
                <img
                  className={styles.imgPlatform}
                  src={`https://img.rgstatic.com/service-logos/${service.name}.svg`} 
                  alt={service.name}
                  
                />
                <p>{service.title}</p>
                {/* Link to the streaming service */}
                <a href={service.url} target="_blank" rel="noopener noreferrer">
                  {/* Placeholder play button */}
                  <img
                    className={styles.playButton}
                    src="/play.png" 
                    alt="Play Button"
                  />
                </a>
              </div>
            ))}
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
        <MovieRatingForm/>
      </div>
    </>
  );
}

export default DetailsPage;
