import { API_IMAGE_LANDSCAPE_HOST, API_IMAGE_PORTRAIT_HOST, IMG_RANDOM } from "../constant"
import { ICast, ICastOrigin, IMovieOrigin, IMovieVideo } from "../interface/movie"



export const movieVideoMapper = (movieVideo: IMovieVideo): IMovieVideo => {
    const { id, name, key, official, site } = movieVideo
    return {
        id,
        name,
        key,
        official,
        site,
    }
}


export const movieCastMapper = (casts: ICastOrigin[]): ICast[] => {
    return casts.map(cast => {
        const { id, cast_id, character, name, profile_path } = cast
        return {
            id,
            name,
            character,
            castId: cast_id,
            profilePath: profile_path
        }
    })
}