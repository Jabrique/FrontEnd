import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';
import Config from '../config/config';

const MoviesApi = {
  async getPopularMovies() {
    return await axios.get(ApiEndpoint.GET_POPULAR_MOVIES('en-US', '1'), {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Config.API_KEY}`,
      },
    });
  },
  async getNowplayingMovies() {
    return await axios.get(ApiEndpoint.GET_NOWPLAYING_MOVIES('en-US', '1'), {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Config.API_KEY}`,
      },
    });
  },
  async getUpcomingMovies() {
    return await axios.get(ApiEndpoint.GET_UPCOMING_MOVIES('en-US', '1'), {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Config.API_KEY}`,
      },
    });
  },

};

export default MoviesApi;
