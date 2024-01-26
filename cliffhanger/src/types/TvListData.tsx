export interface TvListData {
    results:{
        poster_path:string;
        title:string;
        id: number; 
        genre_ids: number[];
        original_name:string;
    }[]
} 