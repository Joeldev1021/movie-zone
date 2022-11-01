export interface IMovieVideo {
    id: string;
    key: string;
    name: string;
    official: boolean
    site: string
}
export interface IGenre {
    id: number;
    name: string
}

export interface IMovieOrigin {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    genres?: IGenre[]
    id: number
    imdb_id: number
    original_title: string
    media_type: string;
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    videos: {
        results: IMovieVideo[]
    }
    vote_average: number
    vote_count: number
    homepage?: string
}


export interface ICastOrigin {
    id: number;
    name: string;
    profile_path: string;
    cast_id: number;
    character: string;
}

export interface ICast {
    id: number;
    name: string;
    profilePath: string;
    castId: number;
    character: string;
}

export interface IMovieDetails {
    movie: IMovieOrigin
    cast: ICast[]
}

export interface IMovieResponse {
    page: number
    results: IMovieOrigin[]
    total_pages: number
    total_results: number
}

export interface IPerson {
    biography: string;
    birthday: string;
    id: number
    imdb_id: string;
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export interface IPersonMovies {
    cast: IMovieOrigin[]
    crew: []
} 