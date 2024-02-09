import { fetchMovieData } from "../src/components/movielist/fetchAPI/fetchData";

//das ist unser erster integration test, hier war ebenfalls die idee, zu überprüfen, ob wir etwas fetchen können
describe('fetchMovieData integration test', () => {
    it('fetches movie data from the API', async () => {
      
      global.fetch = jest.fn().mockResolvedValue({
        json: async () => ({ results: [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }] })
      });
  
      
      const movieData = await fetchMovieData();
  
      expect(movieData.results).toBeDefined();
      expect(movieData.results.length).toBeGreaterThan(0);
    });
  
    it('handles errors gracefully', async () => {
     
      global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));
  
     
      jest.spyOn(console, 'error').mockImplementation(() => {});
  
      await expect(fetchMovieData()).rejects.toThrow('Failed to fetch');
    });
  
    
  });