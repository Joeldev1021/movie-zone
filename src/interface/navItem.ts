
export interface INavItem {
    label: string;
    children?: Array<INavItem>;
    href?: string;
}