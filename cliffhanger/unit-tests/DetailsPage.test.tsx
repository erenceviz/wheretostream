import { render, screen, waitFor } from '@testing-library/react';
import DetailsPage from '@/components/moviedetails/DetailsPage';

//das ist ein unit-test der componenten DetailsPage, hier wird überprüft, ob unsere informationen auch dynamisch geladen werden, nachdem sie gefechted werden

const mockMovieData = {
  id: 123,
  title: 'Mock Movie Title',
  genres: [{ id: 1, name: 'Action' }],
  release_date: '2022-01-01',
  runtime: 120,
  overview: 'Mock movie overview',
  poster_path: '/mock-poster-path.jpg',
};


jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(mockMovieData),
})));

describe('DetailsPage Component', () => {
  it('renders movie details correctly', async () => {
    render(<DetailsPage movieId="123" />);

    
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
