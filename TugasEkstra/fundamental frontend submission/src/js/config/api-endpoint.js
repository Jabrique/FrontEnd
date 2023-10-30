import Config from './config'

const ApiEndpoint = {
    GET_POPULAR_MOVIES: (language, pageCount)=>`${Config.BASE_URL}/movie/popular?language=${language}&page=${pageCount}`,
    GET_NOWPLAYING_MOVIES: (language, pageCount)=> `${Config.BASE_URL}/movie/now_playing?language=${language}&page=${pageCount}`,
    GET_UPCOMING_MOVIES: (language, pageCount)=> `${Config.BASE_URL}/movie/upcoming?language=${language}&page=${pageCount}`,
}

export default ApiEndpoint