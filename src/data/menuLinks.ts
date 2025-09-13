export interface MenuLink {
    id: number;
    path: string;
    label: string;
}


export const menuLinks: MenuLink[] = [
    { id: 1, path: "/", label: "Home" },
    { id: 3, path: "/boxswitch", label: "Box" },
    { id: 3, path: "/iconswitch", label: "Icon" },
];