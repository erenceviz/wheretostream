// __tests__/DetailsPage.test.tsx

import { render, screen, waitFor } from '@testing-library/react';
import DetailsPage from '@/components/moviedetails/DetailsPage';

// Mock movie data for testing
const mockMovieData = {
  id: 123,
  title: 'Mock Movie Title',
  genres: [{ id: 1, name: 'Action' }],
  release_date: '2022-01-01',
  runtime: 120,
  overview: 'Mock movie overview',
  poster_path: '/mock-poster-path.jpg',
};

// Mock fetch function to return the mock movie data
jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(mockMovieData),
})));

describe('DetailsPage Component', () => {
  it('renders movie details correctly', async () => {
    render(<DetailsPage movieId="123" />);

    // Wait for movie details to be loaded
    await waitFor(() => {
      expect(screen.getByText(mockMovieData.title)).toBeInTheDocument();
      expect(screen.getByText(mockMovieData.genres[0].name)).toBeInTheDocument();
      expect(screen.getByText(mockMovieData.release_date.slice(0, 4))).toBeInTheDocument();
      expect(screen.getByText(`${mockMovieData.runtime} minutes`)).toBeInTheDocument();
      expect(screen.getByText(mockMovieData.overview)).toBeInTheDocument();
      expect(screen.getByAltText(mockMovieData.title)).toBeInTheDocument();
    });
  });
});
