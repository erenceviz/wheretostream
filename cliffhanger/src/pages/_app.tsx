import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useContext, useReducer } from 'react'

// useReducer()
export enum BookmarkActionOptions {
  ADD = 'ADD',
  DELETE = 'DELETE',
  RESET = 'RESET',
}

interface BookmarkAction {
  type: BookmarkActionOptions;
  payload: IMovie;
}

interface BookmarkState {
  movies: IMovie[];
}

interface IMovie {
  id: number; 
  titel: string; 
  description: string;
  poster_path: string;
}

function manageBookmark(state: BookmarkState, action: BookmarkAction) {

  switch (action.type) {
    case BookmarkActionOptions.ADD:
      return {
        ...state,
        movies: [...state.movies, action.payload] 
      };
    case BookmarkActionOptions.DELETE:
      return {
        ...state,
        movies: state.movies.filter( (ele) => ele.id !== action.payload.id)
      };
    case BookmarkActionOptions.RESET: 
      return {
        ...state, 
        movies: []
      }
    default:
      return state;
  }
}


// useContext()

export type BookmarkContextType = {
  bookmarkState: BookmarkState; 
  dispatch: (props: BookmarkAction) => void;
}

export const BookmarkContext = createContext<BookmarkContextType>({
  bookmarkState: {movies: []},
  dispatch: () => null
})

export const useGlobalContext = () => useContext(BookmarkContext)


export default function App({ Component, pageProps }: AppProps) {
  
  const [bookmarkState, dispatch] = useReducer(manageBookmark,{movies: []} );

  return (
    <BookmarkContext.Provider value={{ bookmarkState, dispatch }}>
      <Component {...pageProps} />
    </BookmarkContext.Provider>
  )
}
