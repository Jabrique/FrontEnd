import AppBar from './components/AppBar'
import SearchBar from './components/SearchBar'
import MovieItem from './components/MovieItem'
import MoviesList from './components/MoviesList'
import MoviesApi from './network/MoviesAPI'

const MoviesApp = async() => {
    const moviesListElement = document.createElement('movies-list')

    moviesListElement.movies = await MoviesApi.getPopularMovies()
}

export default MoviesApp