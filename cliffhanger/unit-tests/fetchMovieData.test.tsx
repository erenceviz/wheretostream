import { fetchMovieData } from "../src/components/movielist/fetchAPI/fetchData";


//das ist unser erster unit-test. hier war es gedacht zu überprüfen, ob wir tatsächlich von diesem endpunkt fetchen können
describe('fetchMovieData function', () => {
    it('returns movie data on successful API call', async () => {
      // Mocking the fetch API response
      const mockMovieData = { results: [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }] };
      global.fetch = jest.fn().mockResolvedValue({ json: () => Promise.resolve(mockMovieData) });
  
      
      const movieData = await fetchMovieData();
  
      expect(movieData).toEqual(mockMovieData);
    });
  
    it('throws an error on failed API call', async () => {
      
      const mockError = new Error('Failed to fetch');
      global.fetch = jest.fn().mockRejectedValue(mockError);
  
      
      await expect(fetchMovieData()).rejects.toThrow(mockError);
    });
  });