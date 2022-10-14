import { INavItem } from "../interface/navItem";

export const NAV_ITEMS: INavItem[] = [
    {
        label: "Inspiration",
        children: [
            {
                label: "Explore Design Work",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "New & Noteworthy",
                subLabel: "Up-and-coming Designers",
                href: "#",
            },
        ],
    },
    {
        label: "Find Work",
        children: [
            {
                label: "Job Board",
                subLabel: "Find your dream design job",
                href: "#",
            },
            {
                label: "Freelance Projects",
                subLabel: "An exclusive list for contract work",
                href: "#",
            },
        ],
    },

];