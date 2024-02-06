import { useState, useEffect } from "react";
import Logo from "@/components/header/Logo/Logo";
import styles from "./Footer.module.css";
import MovieQuote from "@/types/MovieQuote";
import { movieQuotesData } from "@/types/MovieQuote";

const Footer = () => {
  const [randomQuotes, setRandomQuotes] = useState<MovieQuote[]>([]);

  useEffect(() => {
    const getRandomQuotesOutOfTen = (quotes: MovieQuote[]) => {
      if (quotes.length < 5) {
        console.error("Die Liste der Zitate ist zu kurz.");
        return [];
      }

      const selectedQuotes: MovieQuote[] = [];

      while (selectedQuotes.length < 5) {
        const randomIndex = Math.floor(Math.random() * quotes.length);

        // Vermeidung von Dupikaten (index)
        if (!selectedQuotes.some(quote => quote === quotes[randomIndex])) {
          selectedQuotes.push(quotes[randomIndex]);
        }
      }

      return selectedQuotes;
    };

    const randomQuotesResult = getRandomQuotesOutOfTen(movieQuotesData);
    setRandomQuotes(randomQuotesResult);
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.upperFooter}>
        <h4>Best Movie Quotes</h4>
        <div className={styles.seperationline}></div>
        <div className={styles.quotes}>
          <div className={styles.quote}>
            {randomQuotes.map((quote, index) => (
              <div className={styles.singleQuote} key={index}>
                <p>{quote.quote}</p>
                <p>
                  {quote.movie}, {quote.year}
                </p>
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
