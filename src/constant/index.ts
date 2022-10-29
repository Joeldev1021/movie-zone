import { INavItem } from "../interface/navItem";


export const API_IMAGE_PORTRAIT_HOST = "https://image.tmdb.org/t/p/w300";
export const API_IMAGE_LANDSCAPE_HOST = "https://image.tmdb.org/t/p/original";

export const IMG_RANDOM = 'https://cdn.oldskull.net/wp-content/uploads/2015/07/Flore-Maquin-movie-posters-illustration-dracula-.jpg'


export const NAV_ITEMS: INavItem[] = [
    {
        label: "Movie",
        children: [
            {
                label: "Trending today",
                href: "trending/movie/day",
            },
            {
                label: "Trending week",
                href: "trending/movie/week",
            }, {
                label: "Top Rated",
                href: "movie/top_rated"
            }, {
                label: "Popular",
                href: "movie/popular"
            }
        ],
    },
    {
        label: "TV Show",
        children: [
            {
                label: "Trending today",
                href: "trending/tv/day",
            },
            {
                label: "Trending week",
                href: "trending/tv/week",
            },
            {
                label: "Top Rated",
                href: "tv/top_rated"
            }, {
                label: "Popular",
                href: "tv/popular"
            }
        ],
    },
    {
        label: "Genres",
        href: "#",
    },
];

export const MULTI_PATH = [
    'trending/tv/:query',
    'tv/top_rated',
    'tv/popular',
    'trending/movie/:query',
    'movie/top_rated',
    'movie/popular',
];