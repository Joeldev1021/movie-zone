import { IMovie, IMovieOrigin } from "../interface/movie.interface"

export const API_IMAGE_PORTRAIT_HOST = "https://image.tmdb.org/t/p/w300";
export const API_IMAGE_LANDSCAPE_HOST = "https://image.tmdb.org/t/p/original";


export const movieMapper = (moviesOrigin: IMovieOrigin[]): IMovie[] => {
    return moviesOrigin.map(movie => {

        return {
            id: movie.id,
            image: `${API_IMAGE_PORTRAIT_HOST}/${movie.backdrop_path}`,
            genreIds: movie.genre_ids,
            originalLanguage: movie.original_language,
            titleOriginal: movie.original_title,
            description: movie.overview,
            popularity: movie.popularity,
            imageLarge: `${API_IMAGE_PORTRAIT_HOST}/${movie.poster_path}`,
            releaseDate: movie.release_date,
            title: movie.title,
            video: movie.video,
            rating: movie.vote_average,
            voteCount: movie.vote_count,

        }
    })
}

/* id: movie.id;
        backdropPath: movie.backdrop_path;
        genreIds: movie.genre_ids;
        originalLanguage: movie.original_language;
        titleOriginal: movie.original_title;
        description: movie.overview;
        popularity: movie.popularity;
        posterPath: movie.poster_path;
        releaseDate: movie.release_date;
        title: movie.title;
        video: movie.video;
        voteAverage: movie.vote_average;
        voteCount: movie.vote_count; */
