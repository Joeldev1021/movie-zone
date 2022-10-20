import { INavItem } from "../interface/navItem";

export const NAV_ITEMS: INavItem[] = [
    {
        label: "TV Show",
        children: [
            {
                label: "Trending day",
                href: "tv-show/trending/day",
            },
            {
                label: "Trending week",
                href: "tv-show/trending/week",
            },
        ],
    },
    {
        label: "Movie",
        children: [
            {
                label: "Trending day",
                href: "movie/trending/day",
            },
            {
                label: "Trending week",
                href: "movie/trending/week",
            }
        ],
    },
    {
        label: "Genres"
    }

];