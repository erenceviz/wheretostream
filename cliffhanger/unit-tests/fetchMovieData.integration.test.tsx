import { fetchMovieData } from "../src/components/movielist/fetchAPI/fetchData";

describe('fetchMovieData integration test', () => {
    it('fetches movie data from the API', async () => {
      // Mock the fetch function to return a controlled response
      global.fetch = jest.fn().mockResolvedValue({
        json: async () => ({ results: [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }] })
      });
  
      // Call the fetchMovieData function
      const movieData = await fetchMovieData();
  
      // Assert that the movieData contains the expected movie data
      expect(movieData.results).toBeDefined();
      expect(movieData.results.length).toBeGreaterThan(0);
    });
  
    it('handles errors gracefully', async () => {
     
      global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));
  
     
      jest.spyOn(console, 'error').mockImplementation(() => {});
  
      await expect(fetchMovieData()).rejects.toThrow('Failed to fetch');
    });
  
    
  });