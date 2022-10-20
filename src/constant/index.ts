import { INavItem } from "../interface/navItem";




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
