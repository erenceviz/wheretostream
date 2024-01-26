import { useState, useEffect } from "react";
import Logo from "@/components/header/Logo/Logo";
import styles from "./Footer.module.css";
import MovieQuote from "@/types/MovieQuote";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieQuotes, setMovieQuote] = useState<MovieQuote | null>(null);

  useEffect(() => {
    const getMovieQuotes = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://trial-api-popular-movie-quote-2t9j.gw.openapihub.com/movie-quote/quote-by-type?type=movie&X-OpenAPIHub-Key=e618778939d24b50a4eab064346cd55a`
        );
        const movieQuotes: MovieQuote = await response.json();
        const firstThreeObjects = movieQuotes.slice(0, 5);
        console.log(firstThreeObjects);
        // console.log("Movie Quotes: ", movieQuotes);
        setMovieQuote(firstThreeObjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieQuotes();
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.upperFooter}>
        <h4>Best Movie Quotes</h4>
        <div className={styles.seperationline}></div>
        <div className={styles.quotes}>
          <div className={styles.quote}>
            {movieQuotes?.map((quote) => (
              <div className={styles.singleQuote} key={quote.quote}>
                <p>
                  {quote.quote}
                </p>
                <p>{quote.movie}, {quote.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.lowerFooter}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2023 - Ceviz & Berg</p>
          <p>Designed by Eren Ceviz und Vivien Berg</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
