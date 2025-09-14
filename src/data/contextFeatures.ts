
export interface ContextFeature {
    id: number;
    title: string;
    path: string;
    description: string;
}

export const contextFeatures: ContextFeature[] = [
    {
        id: 1,
        title: "Box Bg Toggle",
        path: "/boxswitch",
        description: "Switching between different box colors using Context."
    },
    {
        id: 2,
        title: "Profile",
        path: "/profilepage",
        description: "Add, update, and delete users globally with Context API."
    },
    {
        id: 3,
        title: "Counter",
        path: "/counterpage",
        description: "Add, subtrsct or reset counter globally with Context API."
    },
    {
        id: 4,
        title: "User Management",
        path: "/boxswitch",
        description: "Add, update, and delete users globally with Context API."
    },
]