import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbpromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteMovieIdb = {
  async getMovie(id) {
    return (await dbpromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllMovies() {
    return (await dbpromise).getAll(OBJECT_STORE_NAME);
  },
  async putMovie(movie) {
    return (await dbpromise).put(OBJECT_STORE_NAME, movie);
  },
  async deleteMovie(id) {
    return (await dbpromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteMovieIdb;
