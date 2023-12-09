// types.ts
export interface SearchResult {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    // Add or remove properties based on API data
    backdrop_path?: string;
    belongs_to_collection?: any; // Adjust the type based on the API data
    budget?: number;
    genres?: { id: number; name: string }[];
    homepage?: string;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: { id: number; logo_path: string; name: string; origin_country: string }[];
    production_countries?: { iso_3166_1: string; name: string }[];
    revenue?: number;
    runtime?: number;
    spoken_languages?: { english_name: string; iso_639_1: string; name: string }[];
    status?: string;
    tagline?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}
