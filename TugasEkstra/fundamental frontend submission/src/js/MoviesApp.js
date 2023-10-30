import AppBar from './components/AppBar';
import SearchBar from './components/SearchBar';
import MovieItem from './components/MovieItem';
import MoviesList from './components/MoviesList';
import MoviesApi from './network/MoviesAPI';

const MoviesApp = async () => {
  const PopularMoviesListElement = document.querySelector('.popular-movies movies-list');
  
  const playingNowMoviesListElement = document.querySelector('.nowplaying-movies movies-list')

  const upcomingMoviesListElement = document.querySelector('.upcoming-movies movies-list')

  PopularMoviesListElement.movies = await MoviesApi.getPopularMovies();
  playingNowMoviesListElement.movies = await MoviesApi.getNowplayingMovies();
  upcomingMoviesListElement.movies = await MoviesApi.getUpcomingMovies();
};

export default MoviesApp;
