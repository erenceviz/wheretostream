// types.ts
export interface SearchResult {
    adult: boolean;
    genres: { id: number; name: string }[];
    title: string;
    original_title: string;
    original_language: string;
    spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
    poster_path: string;
    logo_path:string;
    runtime: number;
    overview: string;
  }
  