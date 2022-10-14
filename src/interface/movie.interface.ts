export interface IMovie {
    id: number;
    image: string;
    genreIds: number[]
    originalLanguage: string;
    titleOriginal: string;
    description: string;
    popularity: number;
    imageLarge: string;
    releaseDate: string;
    title: string;
    video: boolean;
    rating: number;
    voteCount: number;
}

export interface IMovieOrigin {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: false
    vote_average: number
    vote_count: number
}

export interface IGenre {
    id: number;
    name: string
}