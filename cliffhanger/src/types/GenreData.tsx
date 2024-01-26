export interface Genre {
    id: number;
    name: string;
  }
  
  export interface MovieGenre extends Genre {}
  
  export interface TvGenre extends Genre {}
  
  export interface GenreData {
    genres: Genre[];
  }
  