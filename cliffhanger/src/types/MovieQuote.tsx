export default interface MovieQuote {
  quote: string;
  movie: string;
  type: "movie";
  year: number;
}

export const movieQuotesData: MovieQuote[] = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    type: "movie",
    year: 1999,
  },
  {
    quote: "Why so serious?",
    movie: "The Dark Knight",
    type: "movie",
    year: 2008,
  },
  {
    quote: "To infinity and beyond!",
    movie: "Toy Story",
    type: "movie",
    year: 1995,
  },
  {
    quote: "I'm the king of the world!",
    movie: "Titanic",
    type: "movie",
    year: 1997,
  },
  {
    quote: "You complete me.",
    movie: "Jerry Maguire",
    type: "movie",
    year: 1996,
  },
  {
    quote: "I'll have what she's having.",
    movie: "When Harry Met Sally",
    type: "movie",
    year: 1989,
  },
  {
    quote: "I am your father.",
    movie: "Star Wars: Episode V - The Empire Strikes Back",
    type: "movie",
    year: 1980,
  },
  {
    quote: "May the Force be with you.",
    movie: "Star Wars",
    type: "movie",
    year: 1977,
  },
  {
    quote: "You can't handle the truth!",
    movie: "A Few Good Men",
    type: "movie",
    year: 1992,
  },
  {
    quote: "Houston, we have a problem.",
    movie: "Apollo 13",
    type: "movie",
    year: 1995,
  },
];
