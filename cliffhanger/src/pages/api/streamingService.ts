import { NextApiRequest, NextApiResponse } from 'next';

export interface StreamingService  {
    id: number;
    name: string;
    title: string;
    url: string;
    movies: string[]; // Array of movie titles available on the streaming service
};

interface MovieApiResponse {
    results: { title: string }[];
}
interface TVApiResponse {
    results: { name: string }[];
}

const streamingServiceData: StreamingService[] = [
    {
        id: 1,
        name: 'netflix',
        title: 'Netflix',
        url: 'https://www.netflix.com/',
        movies: []
    },
    {
        id: 2,
        name: 'amazon_prime',
        title: 'Amazon Prime',
        url: 'https://www.amazon.de/gp/video/storefront?contentId=IncludedwithPrime&contentType=merch&merchId=IncludedwithPrime',
        movies: []
    },
    {
        id: 3,
        name: 'disney_plus',
        title: 'Disney Plus',
        url: 'https://www.disneyplus.com/de-de',
        movies: []
    },
    {
        id: 4,
        name: 'hulu',
        title: 'Hulu',
        url: 'https://www.hulu.com/',
        movies: []
    },
];

async function fetchMovieTitles(): Promise<string[]> {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const movieData: MovieApiResponse = await response.json();
    // console.log(movieData)
    return movieData.results.map(movie => movie.title);
}

async function fetchTvShowTitles(): Promise<string[]> {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const tvData: TVApiResponse = await response.json();
    // console.log(tvData)
    return tvData.results.map(tvShow => tvShow.name);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<StreamingService[]>) {
    try {
        // Fetch movie and TV show titles
        const movieTitles = await fetchMovieTitles();
        const tvShowTitles = await fetchTvShowTitles();
        // console.log("des sind unsere movies undso in der neuen api", movieTitles, tvShowTitles)

        // Assign random subsets of movie titles to each streaming service
        streamingServiceData.forEach(service => {
            const allTitles = [...movieTitles, ...tvShowTitles];
            const randomTitles = getRandomSubset(allTitles, 20); // Adjust the number as needed
            service.movies = randomTitles;
        });

        // Respond with the updated streaming service data
        res.status(200).json(streamingServiceData);
    } catch (error) {
        // res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Function to get a random subset of an array
function getRandomSubset<T>(array: T[], size: number): T[] {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
}
