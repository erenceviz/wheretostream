import { fetchMovieData } from "../src/components/movielist/fetchAPI/fetchData";

describe('fetchMovieData function', () => {
    it('returns movie data on successful API call', async () => {
      // Mocking the fetch API response
      const mockMovieData = { results: [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }] };
      global.fetch = jest.fn().mockResolvedValue({ json: () => Promise.resolve(mockMovieData) });
  
      // Calling the function and asserting the returned data
      const movieData = await fetchMovieData();
  
      expect(movieData).toEqual(mockMovieData);
    });
  
    it('throws an error on failed API call', async () => {
      // Mocking the fetch API error
      const mockError = new Error('Failed to fetch');
      global.fetch = jest.fn().mockRejectedValue(mockError);
  
      // Calling the function and asserting that it throws the error
      await expect(fetchMovieData()).rejects.toThrow(mockError);
    });
  });