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

  const onSearch = async(event) => {
    event.preventDefault()
    const searchElement = document.querySelector('app-bar').searchElement
    if(searchElement.value === ''){
      document.querySelector('main').innerHTML = `
      <main>
        <section class="popular-movies">
            <div class="container">
                <h2 class="popular-movies__title">
                    Popular Movies
                </h2>
                <movies-list></movies-list>
            </div>
        </section>
        <section class="nowplaying-movies">
            <div class="container">
                <h2 class="nowplaying-movies__title">
                    Now Playing
                </h2>
                <movies-list></movies-list>
            </div>
        </section>
        <section class="upcoming-movies">
            <div class="container">
                <h2 class="upcoming-movies__title">
                    Upcoming 
                </h2>
                <movies-list></movies-list>
            </div>
        </section>
    </main>
      `
      return await MoviesApp()
    }
    const data = await MoviesApi.getMovieByTitle(searchElement.value)
    document.querySelector('main').innerHTML = `

    <style>
      .search-movies{
        margin-top: 100px;
      }
      .search-movies__title{
        margin-top: 40px;
      }
    </style>
    <section class="search-movies">
    <div class="container">
      <h2 class="search-movies__title">Search Result</h2>
      <movies-list><movies-list>
    </div>
    </section>
    `
    document.querySelector('.search-movies movies-list').movies = data;
  }

  const searchElement = document.querySelector('app-bar').searchElement
  searchElement.submitEvent = onSearch
};

export default MoviesApp;
