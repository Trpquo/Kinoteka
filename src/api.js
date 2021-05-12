import { POPULAR_BASE_URL, SEARCH_BASE_URL, API_URL, MOVIE_ENDPOINT, CREDITS_ENDPOINT } from './config'

export const fetchMovies = async (searchTerm, movies={}, loadMore=false) => {
    const page = loadMore ? movies.currentPage + 1 : 1
    const endpoint = searchTerm 
        ? 
        `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        :
        `${POPULAR_BASE_URL}&page=${page}`

    const response = await fetch(endpoint)
    const result = await response.json()
    
    return {
        ...movies,
        movies: loadMore ? [...movies.movies, ...result.results] : [...result.results],
        heroImage: movies.heroImage || result.results[0],
        totalPages: result.total_pages
    }
}

export const fetchMovie = async movieId=>{

    const endpoint = MOVIE_ENDPOINT( movieId )
    const creditsEndpoint = CREDITS_ENDPOINT( movieId) 

    const result = await (await fetch( endpoint)).json()
    const credits = await (await fetch( creditsEndpoint )).json()
    return {
        ...result,
        actors: credits.cast,
        directors: credits.crew.filter( member=> member.job === "Director" )
    }
}