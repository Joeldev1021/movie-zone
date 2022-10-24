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
                href: "movie/trending/today",
            },
            {
                label: "Trending week",
                href: "movie/trending/week",
            }, {
                label: "Top Rated",
                href: "movie/top-rated"
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
                href: "tv-show/trending/today",
            },
            {
                label: "Trending week",
                href: "tv-show/trending/week",
            },
            {
                label: "Top Rated",
                href: "tv-show/top-rated"
            }, {
                label: "Popular",
                href: "tv-show/popular"
            }
        ],
    },
    {
        label: "Genres",
        href: "#",
    },
];
