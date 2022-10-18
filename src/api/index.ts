import axios from 'axios'

const { VITE_API_MOVIE_KEY } = import.meta.env
const BASE_URL = 'https://api.themoviedb.org/3'

export const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        api_key: VITE_API_MOVIE_KEY,
    }
})